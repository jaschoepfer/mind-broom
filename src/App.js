import { useState } from 'react'
import { Welcome as WelcomePage } from './pages.js'

var initialPage = new WelcomePage()

export function setInitialPage(page) {
  initialPage = page
}

export default function App() {
  let [currentPage, navigateTo] = useState(initialPage)
  return currentPage.render(navigateTo)
}
