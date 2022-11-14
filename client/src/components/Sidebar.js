import styled from 'styled-components'
import { links } from '../utils/links'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { useAppContext } from '../context/appContext'

export default function Sidebar() {
  const { showSidebar, toggleSidebar } = useAppContext()

  const navLinks = links.map(link => {
    const { icon, id, path, text } = link

    return (
      <li key={id}>
        <Link
          to={path}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <span>{icon}</span>
          {text}
        </Link>
      </li>
    )
  })
  return (
    <Section>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <CgClose className="icon" onClick={toggleSidebar} />
        <ul>{navLinks}</ul>
      </div>
    </Section>
  )
}

const Section = styled.aside`
  .sidebar-container {
    display: none;
  }

  .show-sidebar {
    display: block;
  }
`
