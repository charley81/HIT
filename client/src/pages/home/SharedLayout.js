import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'

export default function sharedLayout() {
  return (
    <Section>
      <nav>
        <Link to="add-drink">Add Drink</Link>
        <Link to="">All Drinks</Link>
      </nav>
      <Outlet />
    </Section>
  )
}

const Section = styled.div``
