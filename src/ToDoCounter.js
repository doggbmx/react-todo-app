import React from "react";
import './TodoCounter.css';

function TodoCounter() {
    return (
        <h1 className='TodoCounter'>Has completado 2 de 3 TODOs</h1>
    );
};

// hay dos formas de importar algo
export default TodoCounter;
export { TodoCounter };