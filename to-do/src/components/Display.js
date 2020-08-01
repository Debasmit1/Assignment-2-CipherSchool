import React from 'react';
import './Display.css';

const Display = ({ lists,deleteItem}) => {



    if(lists.text !== ''){

        var itemList = lists.map(course => {
            let { text, id } = course;
            return (
                <ol className='display-item' key={id} onClick={() => { deleteItem(id) }}>
                    <li>
                        {text}
                    </li>

                </ol>
            )
        })
    }else{
        alert('Enter a item');
    }




    return (
        <div>
           {itemList}
        </div>
    )
};

export default Display;