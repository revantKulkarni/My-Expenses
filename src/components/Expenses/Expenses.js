import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.data.map(data => {
                return (
                    <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />
                )
            })}
        </Card>
    )
}
export default Expenses;