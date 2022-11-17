import { useState } from 'react'
import { FormGroup, Alert, Header } from '../../components'
import { useAppContext } from '../../context/appContext'
import styled from 'styled-components'

export default function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [email, setEmail] = useState(user?.email)
  const [location, setLocation] = useState(user?.location)

  function handleSubmit(e) {
    e.preventDefault()
    if (!firstName || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ firstName, lastName, email, location })
  }

  return (
    <Section>
      <Header text="profile" />
      {showAlert && <Alert />}
      <form onSubmit={handleSubmit}>
        <FormGroup
          type="text"
          name="firstName"
          value={firstName}
          handleChange={e => setFirstName(e.target.value)}
        />
        <FormGroup
          type="text"
          name="lastName"
          value={lastName}
          handleChange={e => setLastName(e.target.value)}
        />
        <FormGroup
          type="email"
          name="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
        />
        <FormGroup
          type="text"
          name="location"
          value={location}
          handleChange={e => setLocation(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'updating...' : 'Update'}
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

  @media (min-width: 1024px) {
    max-width: var(--formMaxDesktop);
  }
`
