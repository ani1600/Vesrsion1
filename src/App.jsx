import React,{useState}from 'react';
import ItemsList from './ItemsList';
const App=()=>{
    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
    const listOfItems=()=>{
      setItems((olditems)=>{
          return[...olditems,inputList];
      });
      setInputList("");
    }
return(
<>
<div className='main_div'>
    <div className='center_div'>
     <br/>
     <h1>ToDO List</h1>
     <br/>
     <input type='text' placeholder="Add item" onChange={itemEvent} value={inputList}></input>
     <button onClick={listOfItems}> + </button>
     <ol>
        {
            items.map((itemval)=>{
              return  <ItemsList text={itemval}/>
            })
        }
     </ol>
    </div>

</div>
</>
)}

export default App;