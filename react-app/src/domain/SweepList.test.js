import SweepList, {ListType} from './SweepList'

test('Empty SweepList can be created', () => {
    let list = new SweepList({
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

test('SweepList with item can be created', () => {
    const item = {name: 'myItem'}
    const list = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS,
        items: [item]
    })

    expect(list.name).toEqual('myName')
    expect(list.type).toEqual(ListType.ACTIONS)
    expect(list.items[0]).toEqual(item)
});