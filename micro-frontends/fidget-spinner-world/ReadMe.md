# [Micro-Frontends Course - Beginner to Expert](https://www.youtube.com/watch?v=lKKsjpH09dU)  
```shell
 npx create-mf-app # create module federation app
```

# Asynchronously import remote components  
we need suspense from react

# webpack shared 
webpack shared and manage the full dependencies loaded, it can manage to just load the code of header or footer, which is awesome

# error handling  
what happens when remote components go down
One way is to build and deploy it to a static asset store like S3 bucket
go to home app, build it 
```shell
npm run build
```
go inside the build folder home/dist and serve it
```shell
PORT=3000 npx servor
```
so, we can refresh the pdp application, you are good to go



# Module Federation Sharing and Exposing  
it can share not only the components but any type of javascript , that could be constants, encoded JSON, functions ...
for example, in the Home application, we can share products.js including all functions which are calling the sever controllers

# All Applications in the Spinner Portfolio
## Server Application
- This is the nextjs backend service including controller, modules and auth services, providing all services for all micro-front-ends spa   
   
- Running command
```shell
npm run start:dev
```
## Home Application
This home application can be the host frontend SPA, including header and footer by itself.  
And the host can consume other remote SPA components or functions  
- HomeContent use getProducts method to call the products.js service which call the backend controller in server project. We can consume from PDP SPA for the products list  
- Please use the ways  (async and await) in product.js to call the controller, otherwise it won't work.  
- We need to expose these product functions via the configuration of webpack.config.js
```javascript
 exposes: {
  "./Header": "./src/components/Header.jsx",
  "./Footer": "./src/components/Footer.jsx",
  "./Products": "./src/components/products.js",
 },

```
- Running this app command
```shell
npm run start
```

## Product Details Page (PDP) application
this is the products list page or one product detail page  
- We want to use all the functions and components exposed by home App  
- To access the remote home via the entrypoint in the webpack.config.jas file shown as following:
  ```javascript
  new ModuleFederationPlugin({
      name: "product_detail_page",
      filename: "remoteEntry.js",
      remotes: {
        // the HomeKey is the reference name used in this pdp application
        // the homeContainer with @ is the {name: "home"} in the ModuleFederationPlugin of home application
        // the url is the entry point of home application exposed
        HomeKey: "homeContainer@http://localhost:3000/remoteEntry.js",
      },
      ...
  })
  ```

Running this pdp app command
```shell
npm run start
``` 

## cart application
waiting to implement
this is for sharing the user cart and cart items among all the micro-frontend SPA apps, including Home, PDP, Server

we need a good logic and thought about how to architect this cart.  

[(0:51:35) Sever Cart Setup](https://www.youtube.com/watch?v=lKKsjpH09dU)  

# Other tips
1. Disable error overlay in development mode
An alternate solution is to add the following CSS style:
```css
  iframe
  {
      display: none;
  }
```
This prevents the error from showing.
2. Reference:  
 - https://github.com/bvaughn/react-error-boundary
 - https://semaphoreci.com/blog/error-handling-layer-react

