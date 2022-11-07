import styled from 'styled-components'
import image from '../assets/notFound.svg'
import { Button, Header } from '../components'

export default function Error() {
  return (
    <Section>
      <Header text="404" />
      <img src={image} alt="beer" />
      <Button text="Back Home" className="error-btn" />
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
  padding: 1rem;
  max-width: var(--maxWidthTablet);
  margin: 4rem auto 0;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 4rem;
  }

  img {
    margin-bottom: 4rem;
  }
`
