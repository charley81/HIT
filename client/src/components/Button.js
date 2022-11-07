import { Link } from 'react-router-dom'

export default function Button({ text, path, styles }) {
  return (
    <Link to={path ? `/${path}` : '/'} className="btn-primary">
      {text}
    </Link>
  )
}
