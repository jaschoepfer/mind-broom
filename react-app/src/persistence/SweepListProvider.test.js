import SweepListProvider from './SweepListProvider'
import SweepList, { ListType } from '../domain/SweepList'

test('SweepListProvider provides empty list', () => {
    const list = new SweepList({name: 'my list', type: ListType.ACTIONS})
    const provider = new SweepListProvider(list);
    const { getList } = provider.callbacks;

    const providedList = getList()
    
    expect(providedList).toEqual(list)
})

test('SweepListProvider provides addItem', () => {
    const list = new SweepList({name: 'my list', type: ListType.ACTIONS})
    const item = {name: 'my item'}
    const provider = new SweepListProvider(list);
    const { getList, addItem } = provider.callbacks;

    addItem(item);
    const providedList = getList();
    const providedItem = providedList.items[0];

    expect(providedItem).toEqual(item)
})