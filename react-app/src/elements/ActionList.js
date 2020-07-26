import React from 'react';
import './ActionList.css';
import ActionItem from './ActionItem'

function ActionList(props) {
    let actions = props.actions

    return (
        <div className='ActionList'>
            {actions.map((action, idx) =>
                <ActionItem key={idx} text={action}/>
            )}
        </div>
    )
}

export default ActionList