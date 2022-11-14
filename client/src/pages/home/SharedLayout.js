import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Sidebar } from '../../components'

export default function sharedLayout() {
  return (
    <Section>
      <main>
        <Sidebar />
        <div>
          <Navbar />
          <div className="page">
            <Outlet />
          </div>
        </div>
      </main>
    </Section>
  )
}

const Section = styled.section``
