
My TailWind CSS Intellisense plugin just isn't working on my VSCode ?  
Its actually a pretty simple fix.
Open your settings.json file then add this to get the intellisense working on all files  
```json
"tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript",
    "css": "css"
},
"editor.quickSuggestions": {
    "strings": true
}
```

if Tailwind is not in effect on className, see this:  
[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)  


```shell
npm install react-icons --save
```