import SweepListRepository from './SweepListRepository'
import SweepList from '../domain/SweepList';

test('List can be added to Repo', () => {
    const repo = new SweepListRepository();
    const list = new SweepList({id: 42, name: 'name'})

    repo.addList(list)
})

test('List can be retrieved from Repo', () => {
    const repo = new SweepListRepository();
    const list = new SweepList({id: 42, name: 'name'})
    repo.addList(list)

    expect(repo.getListById(42)).toBe(list)
})

test('Retrieving unknown ID from Repo throws', () => {
    const repo = new SweepListRepository();

    expect(() => {repo.getListById(42)}).toThrow(/unknown list id/i);
})