import { useState } from 'react'
import * as Pages from './pages.js'

export var initialPage = new Pages.Welcome()

export default function App() {
  let [currentPage, navigateTo] = useState(initialPage)
  return currentPage.render(navigateTo)
}
