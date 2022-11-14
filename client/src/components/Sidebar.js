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
          // className={({ isActive }) =>
          //   isActive ? 'nav-link active' : 'nav-link'
          // }
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
    background: var(--colorLight);
    position: fixed;
    top: 0;
    right: 0;
    width: 125px;
    height: 100%;
    z-index: 999;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(100%);
    padding: 1rem;
    box-shadow: -1px 0px 12px 1px #aaaaaa;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
  }

  a {
    color: var(--colorDark);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    margin-top: 4rem;

    li {
      margin: 2rem 0;
      display: flex;
      align-items: center;

      a {
        color: var(--colorGreyMid);
        transition: var(--transition);

        &:hover {
          color: var(--colorDark);
          transform: scale(1.1);
        }
      }

      span {
        color: var(--colorDark);
        margin-right: 0.5rem;
      }
    }
  }
`
