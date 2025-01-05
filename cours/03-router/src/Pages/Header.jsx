import { Link } from 'react-router-dom'

function Header() {


  return (
    <header>
        <nav>
            <Link to="/">home</Link>
            <Link to="login">Signin</Link>
        </nav>
    </header>
  )
}

export default Header