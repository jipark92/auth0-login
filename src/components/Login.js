import { useAuth0} from '@auth0/auth0-react'

export default function Login() {

    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return (
            !isAuthenticated &&(
            <div>
                <button onClick={()=>loginWithRedirect()}>Login</button>
            </div>
        )
    )
}