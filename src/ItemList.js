import React, { useState } from 'react';
import './itemList.css'
import nextId  from 'react-id-generator'
import trash from './trash.png'

const AddItem = () => {
    const [ text, setText ] = useState('');
	const [ items, setItems ] = useState([]);

	const handleInputChange = (e) => {
		const textValue = e.target.value;
		setText(textValue);
    };

    const handleAdd = (e) => {
        e.preventDefault();

         if(text !== ''){
             const newItem = {
                 id: nextId(),
                 desc: text,
                 checked: false,
             }
             setItems([newItem, ...items]);

             setText('');
         } else {
             alert('No has escrito nada')
         }
    }

    const handleDelete = (itemID) => {
        const newArray = items.filter((item) => item.id !== itemID)

        console.log(newArray);

        setItems(newArray);

        console.log(items);
    }
    
    const checkItem = (itemID) => {
        items[itemID].checked = !items[itemID].checked;

        const newItems = items.filter((i) => i);
        setItems(newItems);
    }

	return (
        <div className='additem-component'>
            <form className='formulario' onSubmit={handleAdd}>
                    <label>Prepará tu lista de compras!</label>
			        <input className='input-form' placeholder='Escribe lo que tienes que comprar...' value={text} type="text" onChange={handleInputChange} />
                <button className='btn' type='submit'>Agregar item</button>
		    </form>

            <div className='list'>
                {items.length > 0 ? items.map((item, i) => (
                    <div key={item.id}  className={` list-item ${item.checked && 'complete'}`} >
                        <p className={`par ${item.checked && 'complete-p'}` } onClick={() => checkItem(i)}> {item.desc}</p>
                        <button className='list-item-button' onClick={() => handleDelete(item.id)}> <img src={trash} alt='trash'/> </button>
                    </div>
                        ))
                        : <div className='empty'>Aún no tienes elementos en tu lista :c</div>    
                    }
            </div>
        </div>
	);
};

export default AddItem;
