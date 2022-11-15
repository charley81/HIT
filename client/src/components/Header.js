import styled from 'styled-components'

export default function Header({ text }) {
  return (
    <Section>
      <h1>{text}</h1>
    </Section>
  )
}

const Section = styled.section`
  margin: 2rem 0;
  text-align: center;

  h1 {
    font-size: 64px;
    text-transform: capitalize;
  }

  @media screen and (min-width: 744px) {
    h1 {
      font-size: 88px;
    }
  }
`
