import { useAuth0 } from '@auth0/auth0-react'
import { MainButton } from './StyledComponents'

export default function Login() {
    const { loginWithRedirect } = useAuth0()
    
    return(
        <MainButton onClick={() => loginWithRedirect()}>
            Sign In
        </MainButton>
    )

}