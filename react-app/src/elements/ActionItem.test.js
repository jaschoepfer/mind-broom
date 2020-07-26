import React from 'react';
import { render } from '@testing-library/react';
import ActionItem from './ActionItem';

test('ActionItem renders its text', () => {
    const text = 'Item Text'

    const { getByText } = render(<ActionItem text={text}/>)

    const textElement = getByText(/Item Text/)
    expect(textElement).toBeInTheDocument()
})