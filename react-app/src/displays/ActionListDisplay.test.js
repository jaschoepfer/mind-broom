import React from 'react';
import { render, getByText } from '@testing-library/react';
import ActionListDisplay from './ActionListDisplay'
import SweepListProvider from '../persistence/SweepListProvider'
import SweepList, { ListType } from '../domain/SweepList';

test('Rendering empty list shows list name', () => {
    const list = new SweepList({name: 'my list', type: ListType.ACTIONS})
    const provider = new SweepListProvider(list)

    const { getByText } = render(<ActionListDisplay callbacks={provider.callbacks}/>)
    const listNameElement = getByText(list.name);

    expect(listNameElement).toBeInTheDocument()
})

test('Render list with one item', () => {
    const item = {name: 'my item'}
    const list = new SweepList({name: 'my list', type: ListType.ACTIONS, items: [item]})
    const provider = new SweepListProvider(list)
    
    const { getByText } = render(<ActionListDisplay callbacks={provider.callbacks}/>)
    const itemNameElement = getByText(item.name);

    expect(itemNameElement).toBeInTheDocument()
})