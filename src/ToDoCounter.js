import React from "react";
import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
        <h1 className='TodoCounter'>Has completado {completed} de {total} TODOs</h1>
    );
};

// hay dos formas de importar algo
export default TodoCounter;
export { TodoCounter };