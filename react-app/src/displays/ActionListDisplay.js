import React, { useState } from 'react';

export default function ActionListDisplay(props) {
    const { getList, addItem } = props.callbacks;

    const [list, setList] = useState(getList());

    let newItemName = ''
    function newItemNameChanged(event) {
        newItemName = event.target.value;
    }

    function newItemSubmitted(_) {
        addItem({ name: newItemName });
        setList(getList());
        alert('button cb called')
    }

    return (
    <div>
        <h3>{list.name}</h3>
        <ul>
            {list.items.map((item, idx) => <li key={idx}>{item.name}</li>)}
        </ul>
        <span>
            <input id='actionlist_add-item-name' type='text' onChange={newItemNameChanged}/>
            <button id='actionlist_add-item-button' onClick={newItemSubmitted}>Add Item</button>
        </span>
    </div>);
}