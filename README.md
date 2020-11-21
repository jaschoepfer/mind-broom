This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TODO #
 - schedule database.initialize() in WelcomeScreen and navigate to ListPage('default') on completion
   - optional: display welcomeScreen for a minimal time (like 1s) to prevent flickering
 - add getItems(listID) -> (list of docs) to database.js
 - Implement ListScreen to display a getItems result
   - displays placeholder while result pending
   - displays formatted list if result successful
   - displays error & retries on failed

# Ideas #
 - Items need to be checkable
 - ListScreen listens to pouchdb.changes event listener
 - Get own logo
 - Fade-out/-in transitions between pages (react-spring.Transition)
