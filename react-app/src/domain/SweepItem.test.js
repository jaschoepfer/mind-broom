// TODO:
// * Creating Items sets the creation data
// * Items can be marked done
// * marking Items done sets doneDate

import SweepItem from './SweepItem'

test('creating SweepItem sets name & done', () => {
    const item = new SweepItem({name: 'item name'});

    expect(item.name).toBe('item name');
    expect(item.done).toBe(false);
})

test('creating SweepItem sets creationDate & doneDate', () => {
    const item = new SweepItem({name: 'item name'});

    expect(Math.abs(item.creationDate - new Date())).toBeLessThan(100);
    expect(item.doneDate).toBeUndefined();
})

test('SweepItem name can be set', () => {
    const item = new SweepItem({name: 'item name'});

    item.setName('new name');

    expect(item.name).toBe('new name')
})

test('Item can be set done', () => {
    const item = new SweepItem('item name');

    item.setDone(true);

    expect(item.done).toBe(true);
})

test('Setting Item done sets doneDate', () => {
    const item = new SweepItem('item name');

    item.setDone(true);

    expect(Math.abs(item.doneDate - new Date())).toBeLessThan(100);
})

test('Setting Item undone unsets doneDate', () => {
    const item = new SweepItem('item name');

    item.setDone(true);
    item.setDone(false);

    expect(item.doneDate).toBeUndefined();
})