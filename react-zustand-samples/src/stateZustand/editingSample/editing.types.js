/**
 * An answer item - image, video or youtube embed
 * @typedef {Object} AnswerItem
 * @property {string} itemID // unique id (uuidv4) for this item
 * @property {'existing'|'upload'} [type]
 * @property {File} [file] // the file object to upload
 * @property {string} [itemName] // the COS name for an image asset
 * @property {string} [itemCaption]
 * @property {string} [itemCopyright]
 * @property {string} [itemYouTubeID]
 * @property {string} [itemAction] // a linked answer id, the item will be a link to this answer
 * @property {boolean} constrainItem // constrain the image / preview
 * @property {QuizItem[]} quizItems
 * @property {string} [quizQuestionType] // single | multi
 */

/**
 * An answer item - questions, answers
 * @typedef {Object} QuizItem
 * @property {string} quizID // unique id (uuidv4) for this item
 * @property {'single'|'multi'}  [quizQuestionType] // single | multi
 * @property {string}  [quizQuestion] // quiz question
 * @property {quizAnswers[]} quizAnswers
 */

/**
 * quizAnswers
 * @typedef {Object} quizAnswers
 * @property {string} [quizAnswerText]
 * @property {boolean} [quizAnswerCorrect]
 */

/**
 * A Link to another answer
 * @typedef {Object} AnswerButton
 * @property {string} buttonName
 * @property {number} buttonAction // the linked answer id
 */

/**
 * Some text to show
 * @typedef {Object} AnswerDialog
 * @property {string} [title]
 * @property {string} text
 */

/**
 * An Answer
 * @typedef {Object} Answer
 * @property {string} _id // mongo id
 * @property {AnswerItem[]} items
 * @property {AnswerButton[]} buttons
 * @property {AnswerDialog[]} dialog
 * @property {number} answerID // the lookup id
 * @property {string} title // the answer title
 * @property {string} category // remote id for the category
 * @property {string} subCategory // remote id for the sub category
 * @property {number} rows // the answer rows
 * @property {number} cols // the answe cols
 */

/**
 * Edit
 * @typedef {Object} EditState
 * @property {boolean} mediaEditorOpen
 * @property {boolean} editing
 * @property {Answer} [currentAnswer]
 * @property {AnswerItem} [currentItem]
 * @property {Function} setState
 * @property {Function} editAnswer
 * @property {Function} editItem
 * @property {Function} updateItem
 * @property {Function} addItem
 * @property {Function} getPendingFile
 * @property {Function} uploadFile
 * @property {Function} itemRequiresUpload
 * @property {Function} initialiseCategorisation
 * @property {Function} applyCurrentItem
 * @property {Function} updateAnswer
 * @property {Function} updateDialog
 * @property {boolean} unsavedChanges
 * @property {Function} saveChanges
 * @property {Function} discardChanges
 */

// we have to export something for the type import to work
export const NOOP = {};
