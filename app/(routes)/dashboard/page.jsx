"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo'
import { db } from '@/utils/dbConfig';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetList from './budgets/_components/BudgetList';
import BudgetItem from './budgets/_components/BudgetItem';
import Budget from './budgets/page';
import ExpenseListTable from './expenses/_components/ExpenseListTable';

function Dashboard() {

    const { user } = useUser();

    const [budgetList, setBudgetList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);

    useEffect(() => {
        user && getBudgetList();
    }, [user])

    //  used to get budget list

    const getBudgetList = async () => {

        const result = await db.select({

            ...getTableColumns(Budgets),


            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
            .groupBy(Budgets.id)
            .orderBy(desc(Budgets.id))

        setBudgetList(result);
        getAllExpense()
    }


    // use to get all the expensebelog to user 
    const getAllExpense = async () => {
        const result = await db.select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.cretedAt,
        }).from(Budgets)
            .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
            .orderBy(desc(Expenses.id));
        setExpenseList(result);

        console.log(result);
    }


    return (
        <div className='p-8 '>
            <h2 className='font-bold text-4xl animate-pulse'> Hi... ,  {user?.fullName} ✌️</h2>
            <p className='text-gray-500 text-2xl'>Here's what happenning with your money, Let's Manage Your expense</p>
            <CardInfo budgetList={budgetList} />

            <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
                <div className='md:col-span-2 '>
                    <BarChartDashboard
                        budgetList={budgetList}
                    />

                    <ExpenseListTable
                        expensesList={expenseList}
                        refreshData={() => getBudgetList()}
                    />

                </div>

                <div className='grid gap-5'>
                    <h2 className='font-bold text-lg'>Latest Budgets</h2>
                    {budgetList.map((budget, index) => (
                        <BudgetItem budget={budget} key={index} />
                    ))}
                </div>

            </div>


        </div>
    )
}

export default Dashboard