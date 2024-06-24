import React from 'react'
import CreatedBudget from './CreatedBudget'

function BudgetList() {
    return (
        <div className='mt-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <CreatedBudget />
            </div>
        </div>
    )
}

export default BudgetList