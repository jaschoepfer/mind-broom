import { useState } from 'react'
import { Welcome as WelcomePage } from './pages.js'

const defaultInitialPage = new WelcomePage()

export default function App(props) {
  let initialPage = props.initialPage || defaultInitialPage
  let [currentPage, navigateTo] = useState(initialPage)
  return currentPage.render(navigateTo)
}
