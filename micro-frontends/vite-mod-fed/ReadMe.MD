# Project Objectives  
- This project is to upgrade the skills to the architecture level by showing how to do Module Federation between two Vite applications
- Showing how to do shared stores between two applications  
- Bringing webpack and see if it's compatible because webpack is where all these module federations started
- comparing build timesharing system Vs. a runtime sharing system
- All these are very cool stuff

# 1 start with vite plugin module federation
[vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)    
this project is showing react applications talks with each other.

# 2 there are 2 projects, one as the host side and one as the remote side.
- the remote app is the one that shares the component out
- the host app is to consume the remote components in remote app.
- actually, for module federation architecture, an application can be both host and remote.

# 3 Remote application  
```shell
  npm create vite remote
  cd remote
  npm install @originjs/vite-plugin-federation --save-dev
```
## 3.1 set fix port number
so modify the script part of package.json
```json
  {
    "scripts": {
        "dev": "vite --port 5001 --strictPort",
        "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "build": "vite build",
        "preview": "vite preview --port 5001 --strictPort",
        "serve": "vite preview --port 5001 --strictPort"
      },
  }

```
## 3.2 Create a button component which will be exposed to be consumed
## 3.3 configure the remote for sharing (Remote Module Federation)
modify the vite.config.js file
```javascript

```
## 3.4 create a button component

## 3.5 Build the SPA 
it will generate the remoteEntry.js file in the dist/assets folder  
all of the bundle files are just javascript files that should be treated and deployed as assets

```shell
npm run build && npm run serve
```

https://www.youtube.com/watch?v=t-nchkL9yIg&t=803s



# 4 host application  
```shell
  npm create vite host
  cd host
  npm install @originjs/vite-plugin-federation --save-dev
```
