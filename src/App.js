import { useState } from 'react'
import * as Pages from './pages.js'

function App() {
  const [pageStack, setPageStack] = useState([new Pages.Welcome()])

  const navCallbacks = {
    'back': () => {
      if(pageStack.length > 1){
        let newPageStack = pageStack.slice(0, pageStack.length - 1)
        setPageStack(newPageStack)
      }
    },
    'open': (page) => {
      let newPageStack = pageStack.concat([page])
      setPageStack(newPageStack)
    }
  }

  let currentPage = pageStack[pageStack.length - 1]
  return currentPage.render(navCallbacks)
}

export default App;
