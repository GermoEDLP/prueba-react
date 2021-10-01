import React from 'react'

export const ListItem = (props) => {
    const item = props.itemsDeZompo;
    return (
        <div>
            <li>{item}</li>
        </div>
    )
}
