import { useState } from 'react';

export const NuevoPresupuesto = ({ presupuesto  , setPresupuesto }) => {

  const handlePresupuesto = (e) => {
    e.preventDefault();
    
    if(!Number(presupuesto) || Number(presupuesto) < 0){
      console.log('No es un presupuesto válido');
    }else{
      console.log('Si es un presupuesto válido');
    }

  }
    

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={ handlePresupuesto } className="formulario">
          <div className="campo">
            <label>Definir Presupuesto</label>

            <input
              className="nuevo-presupuesto"
              type="text"
              placeholder="Añade tu presupuesto"
              value={ presupuesto }
              onChange={ (e) => setPresupuesto(e.target.value) }
            />
          </div>

          <input  type="submit" value="Añadir" />

        </form>
    </div>
  )
}
