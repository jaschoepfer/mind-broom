import { useState, useMemo } from 'react'
import SweepList from '../domain/SweepList';
import SweepItem from '../domain/SweepItem';

function addItemCallback(list, setList) {
    return (args) => {
        list.addItem(new SweepItem(args));
        setList(list);
    }
}

export default function useSweepListState(initialList = null) {
    const makeInitialList = () => {return initialList ?? new SweepList}
    const [list, setList] = useState(makeInitialList);
    
    callbacks = useMemo({
        addItem: addItemCallback(list, setList)
    })

    return [list, callbacks]
}