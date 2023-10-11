```shell
npm create vite@latest

```

```shell
npm install react-router-dom
```

```shell
npm run dev
```

## open main.tsx insert <BrowserRouter> 
### HashRouter contains a # symbol in the URL like http://localhost:3000/#/about  
### MemoryRouter: the routers are stored in memory, which will not be appeared in URL

### open MainApp.tsx add Routes with children route which will navigate to different pages

 ```javascript
  <Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<BookNew />} />
  <Route path="*" element={<NotFound />} />
 ```
 