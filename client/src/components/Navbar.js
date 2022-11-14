import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiFillCaretDown } from 'react-icons/ai'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'

export default function Navbar() {
  const { toggleSidebar } = useAppContext()
  const [showLogout, setShowLogout] = useState(false)

  return (
    <Section>
      {/* nav center */}
      <div className="nav-center">
        {/* logo */}
        <div className="logo">
          <h3>TDTR</h3>
        </div>

        {/* menu sections */}
        <div className="menu-section">
          {/* profile */}
          <div className="profile">
            {/* user name */}
            <p className="name">John</p>
            {/* logout dropdown button */}
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => setShowLogout(!showLogout)}
            >
              <AiFillCaretDown />
            </button>
            {/* logout */}
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button
                className="logout-btn"
                type="button"
                onClick={() => console.log('logout user')}
              >
                Logout
              </button>
            </div>
          </div>

          {/* nav menu */}
          <div className="menu">
            {/* menu button */}
            <button
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt4 />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.nav``
