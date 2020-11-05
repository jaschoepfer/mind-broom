import React from 'react'
import { render } from '@testing-library/react'
import App , { setInitialPage } from './App'
import { Welcome as WelcomePage}  from './pages.js'

const welcomeText = /sweep your mind/i

test('Welcome Screen renders welcome text', () => {
  let { getByText } = render(<App />)
  let textElement = getByText(welcomeText)
  expect(textElement).toBeInTheDocument()
})

test('initial page can be set', () => {
  let tempPage = {
    render: (navigateTo) => {
      return <div>temporary text</div>
    }
  }
  setInitialPage(tempPage)
  let { getByText } = render(<App />)
  let textElement = getByText('temporary text')
  expect(textElement).toBeInTheDocument()
})

test('navigation callback opens welcome page', () => {
  let instantReroutePage = {
    render: (navigateTo) => {
      navigateTo(new WelcomePage())
      return <div />
    }
  }
  setInitialPage(instantReroutePage)
  let { getByText } = render(<App />)
  let textElement = getByText(welcomeText)
  expect(textElement).toBeInTheDocument()
})
