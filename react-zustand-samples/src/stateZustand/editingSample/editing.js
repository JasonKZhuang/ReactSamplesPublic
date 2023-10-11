// import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import callApi from '../../actions/apiCaller';
import findFileType from '../../actions/findFileType';

/**Edit part */
/** @typedef {import('./editing.types.js').AnswerItem} AnswerItem */
/** @typedef {import('./editing.types.js').AnswerButton} AnswerButton */
/** @typedef {import('./editing.types.js').AnswerDialog} AnswerDialog */
/** @typedef {import('./editing.types.js').Answer} Answer */
/** @typedef {import('./editing.types.js').EditState} EditState */

/** TODO
 * - Add new page
 * - we should now be able to delete mediaSave
 * - find all remaining places that are using mediaEditDetails, should be replaced with currentItem
 * - fix as many lint errors as we can (run eslint src && eslint src --fix in client dir)
 */

let pendingFile;

/**
 * @function
 * @returns {EditState}
 */
const useEditState = create(
  devtools(
    (set, get) => ({
      mediaEditorOpen: false,
      unsavedChanges: false,
      editing: false,
      currentAnswer: undefined,
      currentItem: undefined,
      /** @param {Partial<EditState>}  */
      setState(delta) {
        set(delta, false, 'setState');
      },

      /** @param {Answer} answer // the answer to edit */
      editAnswer(answer) {
        set({ currentAnswer: answer }, false, 'editAnswer');
      },

      /** @param {string} itemID // must be an item in the currentAnswer */
      editItem(itemID) {
        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          console.warn('cannot edit item', itemID, 'no currentAnswer');
          return;
        }
        /** @type {AnswerItem|undefined} */
        const item = answer.items.find((i) => i.itemID === itemID);
        if (!item) {
          console.warn(
            'cannot edit item',
            itemID,
            'not found in currentAnswer'
          );
          return;
        }
        // console.log(item);
        set({ currentItem: item }, false, 'editItem');
      },

      /** @param {Partial<AnswerItem>} delta */
      updateItem(delta) {
        /** @type {AnswerItem|undefined} */
        const item = get().currentItem;
        if (!item) {
          console.warn('cannot update item: no currentItem');
          return;
        }
        if (delta.file) pendingFile = delta.file;
        set({ currentItem: { ...item, ...delta } }, false, 'updateItem');
      },

      /** Add a new item to the currentAnswer */
      addItem() {
        /** @type AnswerItem */
        const item = {
          itemID: uuidv4(),
          type: 'upload',
          itemName: '',
          itemCaption: '',
          itemCopyright: '',
          itemYouTubeID: '',
          constrainItem: false,
        };

        pendingFile = null;

        set({ currentItem: item }, false, 'addItem');
      },

      addAnswer() {
        /** @type Answer */
        const answer = {
          answerID: 0,
          items: [],
          buttons: [
            { buttonName: '', buttonAction: '' },
            { buttonName: '', buttonAction: '' },
            { buttonName: '', buttonAction: '' },
          ],
          dialog: [
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
          ],
          title: '',
          category: '',
          subCategory: '',
          rows: 1,
          cols: 1,
        };
        set(
          { currentAnswer: answer, adding: true, editing: true },
          false,
          'addAnswer'
        );
      },

      /** get the pending upload for the currentItem
       * @returns File
       */
      getPendingFile() {
        return pendingFile;
      },
      /** upload file by Add New button
       */

      async uploadFile() {
        /** @type {AnswerItem|undefined} */
        /**get current media */
        const item = get().currentItem;
        if (!item || !pendingFile) {
          console.warn('cannot upload file: no item file');
          return;
        }
        const form = new FormData();
        form.append('media', pendingFile);

        if (findFileType(item.itemName).type === 'image') {
          // if image, create thumbnail and rescale
          await callApi(
            `/image/upload/antarctic-explorer-cos/${item.itemName}`,
            'post',
            form
          ).then((r) => console.log(r, item.itemName, 'Uploaded to COS'));
        } else if (findFileType(item.itemName).type === 'video') {
          // if video upload
          await callApi('/image/videoUpload', 'post', form).then((r) =>
            console.log(r, item.itemName, 'Uploaded to COS')
          );
        } else {
          // if other file just upload
          await callApi(
            '/image/fileUpload/antarctic-explorer-cos',
            'post',
            form
          ).then((r) => console.log(r, item.itemName, 'Uploaded to COS'));
        }
        pendingFile = null;
      },

      /** @returns boolean */
      itemRequiresUpload() {
        /** @type {AnswerItem|undefined} */
        const item = get().currentItem;
        if (!item) {
          return false;
        }
        return !!pendingFile && item.type === 'upload';
      },

      /** initialise the categorisation for this image name
       *  @param Object[] categorisation
       */
      initialiseCategorisation(categorisation) {
        /** @type {AnswerItem|undefined} */
        const item = get().currentItem;
        if (!item?.file) {
          console.warn('cannot update item: no currentItem');
          return false;
        }
        const fields = item.itemName.split('.');
        fields.splice(fields.length - 1, 0, '_thumb.');
        const thumbName = fields.join('').toString();
        /**post file that user choose */
        return callApi('/mongoimage/upload', 'post', {
          itemName: item.itemName,
          categorisation,
          mediaType: findFileType(item.itemName).type,
          itemThumbnail: thumbName,
        }).then((r) => console.log(r, item.itemName, 'Uploaded to Mongo'));
      },

      /** Apply the currentItem to the currentAnswer */
      applyCurrentItem() {
        /** @type {AnswerItem|undefined} */
        const item = get().currentItem;
        if (!item) {
          console.warn('cannot update item: no currentItem');
          return;
        }
        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          console.warn('cannot apply item: no currentAnswer');
          return;
        }
        let insert = true;
        const items = answer.items.map((i) => {
          if (i.itemID === item.itemID) {
            insert = false;
            return item;
          }
          return i;
        });
        if (insert) items.push(item);
        set({ currentAnswer: { ...answer, items } }, false, 'applyCurrentItem');
      },

      /**update the answer (current answer) */
      /** @param {Partial<Answer>} delta */
      updateAnswer(delta) {
        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          console.warn('cannot update answer: no currentAnswer');
          return;
        }
        set(
          { currentAnswer: { ...answer, ...delta }, unsavedChanges: true },
          false,
          'updateAnswer'
        );
      },

      /**
       * Update a sungle dialog item by index
       * @param {number} index
       * @param {string} [title]
       * @param {string} [text]
       */
      updateDialog(index, title, text) {
        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          console.warn('cannot update answer: no currentAnswer');
          return;
        }
        const dialog = answer.dialog.map((d, i) => {
          if (i === index) return { title, text };
          return d;
        });
        set(
          { currentAnswer: { ...answer, dialog }, unsavedChanges: true },
          false,
          'updateDialog'
        );
      },

      /**
       * Save all changes to the answer
       */
      saveChanges() {
        const unsavedChanges = get().unsavedChanges;
        if (!unsavedChanges) {
          set({ editing: false }, false, 'saveChanges');
          return;
        }

        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          console.warn('cannot update answer: no currentAnswer');
          return;
        }

        const adding = get().adding;

        if (adding) {
          callApi('/answer/maxID').then(([{ answerID }]) => {
            const newId = answerID + 1;
            answer.answerID = newId;
            callApi('/answer/insert', 'post', answer).then(() => {
              // navigate(`/content/${newID}`);
              // setIsEditable(false);

              set({ unSavedChanges: false, editing: false, adding: false });
            });
            alert('Your new page is added at ID ' + newId);
          });
          return;
        }

        if (window.confirm('Are you sure you want to save?')) {
          callApi(`/answer/update/${answer.answerID}`, 'post', answer)
            .then(() => {
              set(
                { editing: false, unsavedChanges: false },
                false,
                'saveChanges'
              );
            })
            .catch((err) => {
              alert('Warning, could not save your changes');
              console.log(err);
            });
        }
      },

      discardChanges() {
        /** @type {Answer|undefined} */
        const answer = get().currentAnswer;
        if (!answer) {
          // console.warn('cannot update answer: no currentAnswer');
          set(
            { editing: false, unsavedChanges: false },
            false,
            'discardChanges'
          );

          return;
        }
        if (window.confirm('Are you sure you want to discard any changes?')) {
          set({
            editing: false,
            unsavedChanges: false,
            currentAnswer: undefined,
          });
        }
      },

      addNewPage() {
        /**
         * add new page
         */
      },
    }),
    'EditState'
  )
);

export default useEditState;
