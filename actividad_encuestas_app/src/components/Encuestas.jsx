import React, { useState } from 'react';

const Encuestas = ({ encuestas }) => {


    return (

    <div>
    <h2>Encuestas Disponibles</h2>
    <ul>
    {encuestas.map(encuesta => (
    // <li key={encuesta.id}> ({encuesta.id}){encuesta.pregunta} <OpcionesEncuesta Opciones = {opcion} /> </li>
    <li key={encuesta.id}>{encuesta.pregunta}<ul>{encuesta.opciones.map(opcion =>(<li className='ul1'>{opcion}</li>))}</ul> </li>
    
    ))}

    </ul>
   
    </div>

    );
}
export default Encuestas;