import { FormGroup, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import styled from 'styled-components'
import { Header } from '../../components/index'

export default function AddDrink() {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    drinkName,
    drinkType,
    drinkLocation,
    breweryName,
    thoughts,
    drinkRating,
    handleChange,
    createDrink
  } = useAppContext()

  function handleSubmit(e) {
    e.preventDefault()

    if (
      !drinkName ||
      !drinkType ||
      !drinkLocation ||
      !breweryName ||
      !thoughts ||
      !drinkRating
    ) {
      displayAlert()
      return
    }

    if (isEditing) {
      return
    }
    createDrink()
  }

  function handleDrinkInput(e) {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Section>
      <Header text={isEditing ? 'edit drink' : 'add drink'} />
      {showAlert && <Alert />}
      <form onSubmit={handleSubmit}>
        <FormGroup
          type="text"
          name="drinkName"
          value={drinkName}
          onChange={handleDrinkInput}
          text="Name"
          placeholder="enter drink name"
        />
        <FormGroup
          type="text"
          name="drinkType"
          value={drinkType}
          onChange={handleDrinkInput}
          text="Type"
          placeholder="enter drink type... Pilsner"
        />
        <FormGroup
          type="text"
          name="drinkLocation"
          value={drinkLocation}
          onChange={handleDrinkInput}
          text="Location"
          placeholder="enter drink location... Charlotte, NC"
        />
        <FormGroup
          type="text"
          name="breweryName"
          value={breweryName}
          onChange={handleDrinkInput}
          text="Brewery Name"
          placeholder="enter name of brewery"
        />
        <FormGroup
          type="number"
          name="drinkRating"
          value={drinkRating}
          onChange={handleDrinkInput}
          text="Rating"
          placeholder="enter rating out of 10"
        />
        <label htmlFor="thoughts">Thoughts</label>
        <textarea
          name="thoughts"
          value={thoughts}
          onChange={handleDrinkInput}
          cols="30"
          rows="10"
        ></textarea>

        {/* submit btn */}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Section>
  )
}

const Section = styled.section`
  padding: 1rem;
  max-width: var(--maxWidthTablet);
  margin: auto;

  form {
    margin: 2rem 0;
  }

  button {
    margin-top: 2rem;
  }

  p {
    button {
      margin-left: 0.5rem;
      background: none;
      border: none;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  label {
    display: block;
  }

  textarea {
    display: block;
    width: 100%;
    background-color: inherit;
    margin-top: 0.5rem;
  }

  @media (min-width: 1024px) {
    max-width: var(--formMaxDesktop);
  }
`
