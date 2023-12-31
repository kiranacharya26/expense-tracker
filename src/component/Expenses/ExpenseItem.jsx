import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const { date, amount, title } = props

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs: {amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem


