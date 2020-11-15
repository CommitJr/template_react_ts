import { useStoreActions, useStoreState } from '../store/hookStore';
import React from 'react';
import './App.css';

function App() {

    const counter = useStoreState((state)=>state.countStore.count);
    const setCounter= useStoreActions((actions)=>actions.countStore.setCount);

    return (
        <>
            <h1>Contador</h1>

            <p>Valor do Contador: {counter}</p>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setCounter(0)}>RESET</button>
        </>
    );
}

export default App;
