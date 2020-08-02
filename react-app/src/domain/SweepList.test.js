import SweepList, {ListType} from './SweepList'

test('Empty SweepList can be created', () => {
    let result = new SweepList({
        name: 'myName',
        type: ListType.ACTIONS
    })

    expect(result.name).toEqual('myName')
    expect(result.type).toEqual(ListType.ACTIONS)
    expect(result.items).toHaveLength(0)
});

test('Creating SweepList with invalid type throws Exception', () => {
    const invalidCreation = () => {let l = new SweepList('invalid type')}
    
    expect(invalidCreation).toThrow(/Invalid type for SweepList/)
});