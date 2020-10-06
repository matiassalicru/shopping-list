import React from 'react';
import ItemList from './ItemList';
import './App.css'


const App = () => {

    return(
        <div className='body'>
            <header>
                <h1>Shopping list</h1>
            </header>
            <ItemList/>
        </div>
    )
}

export default App;