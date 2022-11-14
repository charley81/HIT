import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, MobileSidebar, DesktopSidebar } from '../../components'

export default function sharedLayout() {
  return (
    <Section>
      <main>
        <MobileSidebar />
        <DesktopSidebar />
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
