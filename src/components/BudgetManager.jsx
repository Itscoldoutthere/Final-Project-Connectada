import React from 'react'

const BudgetManager = ({budget}) => {
        
        // Dándole formato a la cantidad, para que tenga la estructura de una denominación monetaria
    const amountFormat = (amount) =>{
        return amount.toLocalString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

            <div>
                <p>
                    Graphics Here.</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span> Presupuesto: </span> {amountFormat(budget)}
                </p>
            </div>

        </div>
    )
}

export default BudgetManager
