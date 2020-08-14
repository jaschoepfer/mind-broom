import SweepList, {ListType} from './SweepList'

test('SweepList can be created', () => {
    const list = new SweepList({
        id: 0,
        name: 'myName',
        type: ListType.ACTIONS
    })

    expect(list.id).toEqual(0)
    expect(list.name).toEqual('myName')
    expect(list.type).toEqual(ListType.ACTIONS)
});

test('Creating SweepList with invalid type throws Exception', () => {
    const invalidCreation = () => {let l = new SweepList({
        id: 0,
        name: 'myName',
        type: 'invalid type'
    })}
    
    expect(invalidCreation).toThrow(/Invalid type for SweepList/)
});

test('SweepList name can be set', () => {
    const list = new SweepList({
        id: 0,
        name: 'myName',
        type: ListType.ACTIONS
    })

    list.setName('new name');

    expect(list.name).toBe('new name');
});