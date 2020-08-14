import SweepList from './SweepList'

test('SweepList can be created', () => {
    const list = new SweepList({
        id: 0,
        name: 'myName',
    })

    expect(list.id).toEqual(0)
    expect(list.name).toEqual('myName')
});

test('SweepList name can be set', () => {
    const list = new SweepList({
        id: 0,
        name: 'myName',
    })

    list.setName('new name');

    expect(list.name).toBe('new name');
});