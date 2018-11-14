## HOW TO START ?

1. Start a new project with [create-react-app](https://github.com/facebook/create-react-app).

2. Copy store.js into your src folder.

3. Copy actions, components and reducers folders into your src folder.

4. In the file index.js import Provider
    
    ```Javascript
    import { Provider } from 'react-redux';
    ```
    
    then wrap `<App />` with `<Provider>` :

    ```Javascript
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );`
    ```

5. Open you terminal and intall redux, react-redux and redux-thunk in your project with : 

```Shell
npm install --save redux react-redux redux-thunk
```

6. Install redux devtool [for chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [for firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/), 

7. Start working on your project with react-redux.

More info on how to use redux :
- [Redux Github](https://github.com/reduxjs/redux)
- [React-redux Github](https://github.com/reduxjs/react-redux)
- [Redux-thunk Github](https://github.com/reduxjs/redux-thunk)
- [redux-devtools-extensions Github](https://github.com/zalmoxisus/redux-devtools-extension)
