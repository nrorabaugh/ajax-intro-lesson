# mern-template-project

# Setup A New Project From This Template

If you are starting a new project do the following:

1. copy/download this directory to where you new project is located and rename
   it to the name of your project.
1. change your directory (`cd`) into the copied project template
1. `npm install`
1. `node ./server.js`
1. In a new terminal run `curl localhost:3000/helloworld`. You should see
   `hello world!` as the output. From there your server template works!
1. see the `controllers`, `models`, and `views` directories' `readme.md` files

# Setup A New Project Without This Template

If you want to start a project without using this template directory do the
following:


1. `mkdir <project-name>`
1. `cd <project-name>`
1. `echo "# <project-name>" > readme.md`
1. `git init`
1. `git add readme.md `
1. `git commit -m "init repo with readme.md"`
1. `npm init`
1. `npm install express hbs method-override`
1. `mkdir models views controllers`
1. `touch ./server.js`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
