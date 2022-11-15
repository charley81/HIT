import moment from 'moment'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'

export default function Drink({
  drinkName,
  drinkType,
  drinkLocation,
  drinkRating,
  _id: id,
  createdAt,
  breweryName,
  thoughts
}) {
  const { editDrink, deleteDrink } = useAppContext()
  let date = moment(createdAt).format('Do MMM YYYY')

  return (
    <Section>
      <header>
        <p>{drinkName}</p>
        <p>{drinkRating}/10</p>
      </header>
      <div className="sub-header">
        <p>{breweryName}</p>
        <div className="location">
          <GrLocation />
          <p>{drinkLocation}</p>
        </div>
      </div>
      <main>
        <p>{thoughts}</p>
      </main>
      <footer>
        <div className="buttons">
          <Link
            to="/add-drink"
            className="btn edit-btn"
            onClick={() => editDrink(id)}
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn delete-btn"
            onClick={() => deleteDrink(id)}
          >
            Delete
          </button>
        </div>
        <p>{date}</p>
      </footer>
    </Section>
  )
}

const Section = styled.div`
  border: 1px solid var(--colorGreyLight);
  padding: 1rem;
  border-radius: var(--borderRadius);

  header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.1rem;
  }
`
