## HOW TO START ?

1. Start a new project with [create-react-app](https://github.com/facebook/create-react-app).

2. Copy store.js into your src folder.

3. Copy actions, components and reducers folders into your src folder.

4. Dans le fichier index.js importer Provider
    
    ```Javascript
    import { Provider } from 'react-redux';
    ```
    
    puis entourer `<App />` avec le `<Provider>` :

    ```Javascript
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );`
    ```

5. Open you terminal and intall redux, react-redux and redux-thunk in your project with :  `npm install --save redux react-redux redux-thunk`.

6. Start working on your project with react-redux.

More info on :
- [Redux Github](https://github.com/reduxjs/redux)
- [React-redux Github](https://github.com/reduxjs/react-redux)
- [Redux-thunk Github](https://github.com/reduxjs/redux-thunk)
