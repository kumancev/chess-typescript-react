# React + TypeScript Chess
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## TODO:
1) ***Checkmate*** - (check - check whether the king is under attack or not (`canMove()` => **king** must be moved or protected). Mate - if there is no access to move (`target.avaible`), or protect the king);
2) ***Logic*** of finding a winner (add if - keep track of who ran out of time (*white* or *black*) to display on the screen);
3) The ability for the user to ***choose the time***;
4) The ***design***, the mobileFirst;
5) ***Move history*** (the ability to go back and forth one move);
