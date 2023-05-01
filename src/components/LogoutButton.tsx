import { useAuth0 } from '@auth0/auth0-react'
import { MainButton } from './StyledComponents'

export default function LogoutButton() {
    const { logout } = useAuth0()

    return(
        <MainButton onClick={() => logout()}>
            Sign Out
        </MainButton>
    )
}