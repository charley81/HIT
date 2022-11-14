import { CgProfile } from 'react-icons/cg'
import { FaWpforms } from 'react-icons/fa'
import { BiDrink } from 'react-icons/bi'
import { ImStatsBars } from 'react-icons/im'

export const links = [
  {
    id: 1,
    text: 'All Drinks',
    path: '/',
    icon: <BiDrink />
  },
  {
    id: 2,
    text: 'Info',
    path: '/info',
    icon: <ImStatsBars />
  },
  {
    id: 3,
    text: 'Add Drink',
    path: '/add-drink',
    icon: <FaWpforms />
  },
  {
    id: 4,
    text: 'Profile',
    path: '/profile',
    icon: <CgProfile />
  }
]
