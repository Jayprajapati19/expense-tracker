import React, { useEffect } from 'react'
import CreatedBudget from './CreatedBudget'
import { db } from '@/utils/dbConfig'
import { eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'

function BudgetList() {

    useEffect(() => {
        getBudgetList();
    }, [])

    //  used to get budget list

    const getBudgetList = async () => {
        const result = await db.select({
            ...getTableColumns(Budgets),
            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy,))
            // 2:2
            .groupBy(Budgets.id);

        console.log(result);
    }

    return (
        <div className='mt-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <CreatedBudget />
            </div>
        </div>
    )
}

export default BudgetList