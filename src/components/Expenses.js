import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className="expenses">
            {props.data.map(data => {
                return (
                    <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />
                )
            })}
        </div>
    )
}
export default Expenses;