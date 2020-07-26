import React from 'react';
import './ActionItem.css';

function ActionItem(props) {
    let text = props.text

    return (
        <div className='ActionItem'>
            <div className='ItemBorder ItemLeftCap'/>
            <div className='ItemBorder ItemContent'>
                {text}
            </div>
            <div className='ItemBorder ItemRightCap'/>
        </div>
    )
}

export default ActionItem