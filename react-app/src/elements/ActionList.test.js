import React from 'react';
import { render } from '@testing-library/react';
import ActionList from './ActionList';

test('ActionList renders an action', () => {
  const actions = ['test TODO']

  const { getByText } = render(<ActionList actions={actions} />)

  const actionElement = getByText(/test TODO/)
  expect(actionElement).toBeInTheDocument()
})

test('ActionList renders no actions', () =>{
    const actions = []

    const { baseElement } = render(<ActionList actions={actions}/>)

    const listElements = baseElement.querySelectorAll('.ActionItem')
    expect(listElements.length).toEqual(0)
})