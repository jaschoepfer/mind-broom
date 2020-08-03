import SweepList, {ListType} from './SweepList'
import SweepItem from './SweepItem';

test('Empty SweepList can be created', () => {
    const list = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS
    })

    expect(list.name).toEqual('myName')
    expect(list.type).toEqual(ListType.ACTIONS)
    expect(list.items).toHaveLength(0)
});

test('Creating SweepList with invalid type throws Exception', () => {
    const invalidCreation = () => {let l = new SweepList('invalid type')}
    
    expect(invalidCreation).toThrow(/Invalid type for SweepList/)
});

test('SweepList with items can be created', () => {
    const item = new SweepItem({name: 'myItem'});
    const list = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS,
        items: [item]
    })

    expect(list.items[0]).toEqual(item)
});

test('Item can be added to SweepList', () => {
    const list = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS
    })
    const item = new SweepItem({name: 'myItem'});

    list.addItem(item);

    expect(list.items[0]).toEqual(item);
});

test('SweepList name can be set', () => {
    const list = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS
    })

    list.setName('new name');

    expect(list.name).toBe('new name');
});