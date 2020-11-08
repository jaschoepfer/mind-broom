import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

function makeTestPage(displayText) {
  return {
    render: (navigateTo) => {
      return <div>{displayText}</div>
    }
  }
}

test('Welcome page renders welcome text', () => {
  let welcomeText = /sweep your mind/i
  let { getByText } = render(<App />)
  let textElement = getByText(welcomeText)
  expect(textElement).toBeInTheDocument()
})

test('App can render custom initial page', () => {
  let testText = 'exercise regularly'
  let testPage = makeTestPage(testText)
  let { getByText } = render(<App initialPage={testPage}/>)
  let textElement = getByText(testText)
  expect(textElement).toBeInTheDocument()
})

test('App processes navigation requests of pages', () => {
  let testText = 'brush your teeth'
  let targetPage = makeTestPage(testText)
  let reroutingPage = {
    render: (navigateTo) => {
      navigateTo(targetPage)
      return <div />
    }
  }
  let { getByText } = render(<App initialPage={reroutingPage}/>)
  let textElement = getByText(testText)
  expect(textElement).toBeInTheDocument()
})
