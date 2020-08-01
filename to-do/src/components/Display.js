import React from 'react';
import './Display.css';

const Display = ({ lists}) => {


    const itemList =  lists.map(course => {
        let {text,id} = course;
        return (
            <ul key={id}>
                    <li>
                        {text}
                    </li>

            </ul>
        )
    })



    return (
        <div className='display-item'>
            {itemList}
        </div>
    )
};

export default Display;