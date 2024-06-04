import styled from 'styled-components'
import beerImage from '../assets/beer.png'
import { Header } from '../components'
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <Section>
      {/* header */}
      <Header text={'HIT'} />

      <div className="content">
        {/* info sec */}
        <div className="info">
          <p>
            Have I Tried (HIT) is a dynamic platform designed to help you keep
            track of the drinks you've experienced. Share your thoughts, rate
            each drink, and build a personalized record of your tasting journey.
          </p>
          <Link to="/register" className="btn btn-primary">
            Login/Register
          </Link>
        </div>

        {/* image */}
        <img src={beerImage} alt="beer" />
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 1rem;
  max-width: var(--maxWidthTablet);
  margin: auto;

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: var(--colorGreyDark);
  }

  img {
    margin-top: 4rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--maxWidthTotal);

    .content {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 4rem;

      align-items: center;
    }

    img {
      margin: 0;
      height: 600px;
    }
  }
`
