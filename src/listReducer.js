import { useState } from 'react';

const listReducer = ({type, action}) => {

    const [items, setItems] = useState([]);

    switch (type) {
        case 'add':
            
            break;
    
        default:
            break;
    }

    return items;

}

export listReducer;