import {  Gasto  } from './';

export const ListadoGastos = ({ 
    eliminarGasto , 
    gastos  , 
    setGastoEditar , 
    filtro , 
    gastosfiltrados }) => {


  return (
    <div className="listado-gastos contenedor">        
        {
          filtro ? (
            <>
            <h2>{  gastosfiltrados.length ? 'Gastos' :   'No Hay Gastos en esta Categoria' }</h2>
              {gastosFiltrados.map( (gasto)  =>  (
                <Gasto
                    key={  gasto.id }
                    eliminarGasto = { eliminarGasto }
                    gasto={ gasto }
                    setGastoEditar={ setGastoEditar }
                />
              ))}
            </> 
          ) : (
            <>
            <h2>{  gastos.length ? 'Gastos' :   'No Hay Gastos Aun' }</h2>            
            {gastos.map( (gasto)  =>  (
              <Gasto
                  key={  gasto.id }
                  eliminarGasto = { eliminarGasto }
                  gasto={ gasto }
                  setGastoEditar={ setGastoEditar }
              />
            ))}
            </>
          )
        }        
    </div>
  )
}
