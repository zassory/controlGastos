import { useState , useEffect } from 'react';
import { Header , ListadoGastos , Modal } from './components';

import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';


export const App = () => {

  const [ presupuesto , setPresupuesto  ] = useState(0);
  const [ isValidPresupuesto , setIsValidPresupuesto  ] = useState(false);

  const [ modal , setModal ] = useState( false );
  const [ animarModal , setAnimarModal ] = useState( false );

  const [ gastos  , setGastos ] = useState([]);

  const [ gastoEditar  , setGastoEditar  ] = useState({});

  useEffect(()  =>  {
    if( Object.keys(gastoEditar).length > 0 ){
      setModal( true );
      setTimeout(()=> {
        setAnimarModal( true );
      },500);
    }
  },[gastoEditar]);

  const handleNuevoGasto = () => {
    setModal( true );
    setGastoEditar({});

    setTimeout(()=> {
      setAnimarModal( true );
    },500);
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id );
    setGastos( gastosActualizados );
  }

  const guardarGasto = (  gasto ) => {

    if(gasto.id){    
      const gastosActualizados = gastos.map(
        gastoState => gastoState.id === gasto.id ?  gasto : gastoState );
      setGastos(gastosActualizados);
      setGastoEditar({});

    }else{
      //Nuevo Gasto
      gasto.id  = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto]);
    }                

    setAnimarModal(false);
    setTimeout(()=> {
      setModal(false);
    },[500])
  }

  return (
    <div  className={ modal ? 'fijar' : '' }>
      <Header
        gastos={ gastos }
        presupuesto={ presupuesto }
        setPresupuesto={ setPresupuesto }
        isValidPresupuesto={ isValidPresupuesto }
        setIsValidPresupuesto={ setIsValidPresupuesto }
      />
      
      { isValidPresupuesto && (
        <>
        <main>
          <ListadoGastos
            eliminarGasto = { eliminarGasto } 
            gastos = { gastos }
            setGastoEditar={ setGastoEditar }
          />
        </main>
        <div className="nuevo-gasto">
          <img 
            src={ IconoNuevoGasto }
            alt="Icono nuevo gasto"
            onClick={ handleNuevoGasto }
          />
        </div>
        </>
        )}

        { modal && 
          <Modal 
            setModal = { setModal }
            animarModal = { animarModal }
            setAnimarModal  = { setAnimarModal }
            guardarGasto  = { guardarGasto }
            gastoEditar = { gastoEditar }
            setGastoEditar={ setGastoEditar }
          /> }
      
    </div>    
  )
}
