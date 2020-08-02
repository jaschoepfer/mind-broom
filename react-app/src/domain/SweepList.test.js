import SweepList, {ListType} from './SweepList'

test('Empty action SweepList can be created', () => {
    let result = new SweepList(ListType.ACTIONS)
    expect(result.getItems()).toHaveLength(0)
});

test('Empty check SweepList can be created', () => {
    let result = new SweepList(ListType.CHECK)
    expect(result.getItems()).toHaveLength(0)
});

test('Creating SweepList with invalid type throws Exception', () => {
    const invalidCreation = () => {let l = new SweepList('invalid type')}
    expect(invalidCreation).toThrow(/Invalid type for SweepList/)
});

test('Item can be added', () => {
    const list = new SweepList(ListType.ACTIONS);
    const itemSpec = {title: 'Item XYZ'}

    list.addItem(itemSpec)
    const items = list.getItems()

    expect(items[0]).toMatchObject(itemSpec);
});