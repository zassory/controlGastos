import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';

export const Modal = ({ setModal  , animarModal , setAnimarModal }) => {

  const [nombre,setNombre] = useState('');
  const [cantidad,setCantidad] = useState(0);
  const [categoria,setCategoria] = useState('');
  

  const ocultarModal = () => {  
    setAnimarModal( false );

    setTimeout(() => {
      setModal( false );
    },500);
  }

  return (
    <div className="modal">
        <div className="cerrar-modal">
          <img 
            src={ CerrarBtn }
            alt="cerrar modal"
            onClick={ ocultarModal }
          />
        </div>

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
          <legend>Nuevo Gasto</legend>

          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>

            <input 
              id="nombre"
              type="text"
              placeholder="Añade el Nombre del Gasto"
              value={ nombre }
              onChange={ e => setNombre(e.target.value) }
            />
          </div>

          <div className="campo">
            <label htmlFor="nombre">Cantidad</label>

            <input 
              id="cantidad"
              type="number"
              placeholder="Añade la cantidad del gasto: ej. 300"
              value={ cantidad }
              onChange={ (e)  =>  setCantidad(Number(e.target.value)) }
            />
          </div>

          <div className="campo">
            <label htmlFor="nombre">Categoria</label>

            <select 
              id="categoria"
              value={ categoria }
              onChange={ e => setCategoria(e.target.value) }  
            >              
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="ahorro">Casa</option>
              <option value="ahorro">Gastos Varios</option>
              <option value="ahorro">Ocio</option>
              <option value="ahorro">Salud</option>
              <option value="ahorro">Suscripciones</option>
            </select>

          </div>

          <input 
            type="submit" 
            value="Añadir Gasto"
          />

        </form>

    </div>
  )
}
