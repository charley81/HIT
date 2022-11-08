import { useState } from 'react'
import { Header, FormGroup, Alert } from '../components'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegistered: true
}

export default function Register() {
  const [values, setValues] = useState(initialState)
  const { showAlert, isLoading, displayAlert } = useAppContext()

  // global state and useNavigate

  function toggleRegistered() {
    setValues({ ...values, isRegistered: !values.isRegistered })
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, password, isRegistered } = values

    if ((!isRegistered && !name) || !email || !password) {
      displayAlert()
      return
    }
    console.log(values)
  }

  return (
    <Section>
      <Header text={values.isRegistered ? 'Login' : 'Register'} />
      {showAlert && <Alert />}
      <form onSubmit={handleSubmit}>
        {/* name */}
        {!values.isRegistered && (
          <FormGroup
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            text="name"
            placeholder="enter name"
          />
        )}

        {/* email */}
        <FormGroup
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          text="email"
          placeholder="enter email"
        />
        {/* password */}
        <FormGroup
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          text="password"
          placeholder="enter password"
        />

        {/* submit btn */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/* switch between register and login */}
        <p>
          {values.isRegistered ? 'Not yet registered?' : 'Already registered?'}
          <button type="button" onClick={toggleRegistered}>
            {values.isRegistered ? 'Register' : 'Login'}
          </button>
        </p>
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
