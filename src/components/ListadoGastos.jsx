import {  Gasto  } from './';

export const ListadoGastos = ({ eliminarGasto , gastos  , setGastoEditar }) => {


  return (
    <div className="listado-gastos contenedor">
        <h2>{  gastos.length ? 'Gastos' :   'No Hay Gastos Aun' }</h2>

        {  gastos.map( (gasto)  =>  (
            <Gasto
                key={  gasto.id }
                eliminarGasto = { eliminarGasto }
                gasto={ gasto }
                setGastoEditar={ setGastoEditar }
            />
        ) ) }
    </div>
  )
}
