import React from 'react';

const ItemsList=(props)=>
{
    const deletItems=()=>{

    }
    return (
        <>
        <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true" onClick={deletItems}></i>
        <li>{props.text}</li>
        </div>
        </>
        );
}

export default ItemsList;