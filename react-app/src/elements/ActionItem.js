import React from 'react';
import './ActionItem.css';

function ActionItem(props) {
    let text = props.text

    return (
        <div className='ActionItem'>
            <div className='ItemFragment ItemLeftCap'/>
            <div className='ItemFragment ItemContent'>
                {text}
            </div>
            <div className='ItemFragment ItemRightCap'/>
        </div>
    )
}

export default ActionItem