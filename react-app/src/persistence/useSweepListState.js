import { useState, useMemo } from 'react'
import SweepList, { ListType } from '../domain/SweepList';
import SweepItem from '../domain/SweepItem';


export default function useSweepListState(initialList = null) {
    const makeInitialList = () => {
        return initialList ?? new SweepList('New Action List', ListType.ACTIONS);
    }
    const [list, updateList] = useState(makeInitialList);
    
    const callbacks = useMemo(createCallbacks(list, updateList));

    return [list, callbacks];
}

function createCallbacks(list, updateList) {
    return {
        addItem: (name) => {
            new_item = new SweepItem({name: name});
            list.addItem(new_item);
            updateList(list);
        },
        renameList: (new_name) => {
            list.setName(new_name);
            updateList(list);
        }
    };
}
