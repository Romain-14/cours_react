
import { useEffect } from 'react'

function Login() {


    useEffect(()=> {
        document.title = "login | intro router";
    }, [])

  return (
    <div>Login</div>
  )
}

export default Login