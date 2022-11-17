import moment from 'moment'
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
  const { setEditDrink, deleteDrink } = useAppContext()
  let date = moment(createdAt).format('Do MMM YYYY')

  return (
    <Section>
      {/* header */}
      <header>
        <p>{drinkName}</p>
        <p>{drinkRating}/10</p>
      </header>

      {/* brewery and location */}
      <div className="sub-header">
        <p className="brewery">{breweryName}</p>
        <div className="location">
          <GrLocation />
          <p>{drinkLocation}</p>
        </div>
      </div>

      {/* thoughts */}
      <main>
        <p>{thoughts}</p>
      </main>

      {/* type and date */}
      <div className="info">
        <p>{drinkType}</p>
        <p>{date}</p>
      </div>

      {/* buttons */}
      <footer>
        <div className="buttons">
          <Link
            to="/add-drink"
            className="btn-small edit-btn"
            onClick={() => setEditDrink(id)}
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn-small delete-btn"
            onClick={() => deleteDrink(id)}
          >
            Delete
          </button>
        </div>
      </footer>
    </Section>
  )
}

const Section = styled.div`
  border: 1px solid var(--colorGreyLight);
  padding: 1rem;
  border-radius: var(--borderRadius);
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.1rem;

    p {
      text-transform: capitalize;
    }
  }

  .sub-header {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;

    .brewery {
      color: var(--colorPrimary);
    }

    .location {
      display: flex;
      align-items: center;
      color: var(--colorGreyMid);

      p {
        margin-left: 0.25rem;
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    margin: 1rem 0;
  }

  .btn-small {
    font-size: 1rem;
    background: inherit;
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    font-family: var(--fontFamily);
    cursor: pointer;
  }

  .edit-btn {
    border: 1px solid var(--colorDark);
    color: var(--colorDark);
    margin-right: 0.5rem;
  }

  .delete-btn {
    background-color: var(--colorDark);
    color: var(--colorLight);
  }
`
