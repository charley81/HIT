import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiFillCaretDown } from 'react-icons/ai'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'

export default function Navbar() {
  const { toggleSidebar, logoutUser, user } = useAppContext()
  const [showLogout, setShowLogout] = useState(false)

  return (
    <Section>
      <div className="nav-center">
        {/* logo */}
        <h3>TDTR</h3>

        {/* menu sections */}
        <div className="menu-section">
          {/* profile */}
          <div className="profile" onClick={() => setShowLogout(!showLogout)}>
            <p>{user?.firstName}</p>
            <div className="dropdown-btn-section">
              <AiFillCaretDown className="dropdown-btn" type="button" />

              {/* logout */}
              <button
                type="button"
                onClick={logoutUser}
                className={showLogout ? 'logout show-logout' : 'logout'}
              >
                Logout
              </button>
            </div>
          </div>

          {/* menu button */}
          <HiOutlineMenuAlt4
            type="button"
            className="menu-btn"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.nav`
  padding: 1rem;

  .nav-center {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-right: auto;
  }

  .menu-section {
    display: flex;
    align-items: center;
  }

  .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .dropdown-btn-section {
    display: flex;
  }

  .logout {
    display: none;
  }

  .menu-btn {
    border: 1px solid var(--colorGreyMid);
    border-radius: 50%;
    font-size: 1.75rem;
    padding: 0.25rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--colorDark);
      color: var(--colorLight);
    }
  }

  @media (min-width: 744px) {
    .nav-center {
      max-width: var(--maxWidthNavTablet);
      margin: auto;
    }
  }

  @media (min-width: 1280px) {
    .nav-center {
      max-width: var(--maxWidthNavDesktop);
      margin: auto;
    }
  }
`
