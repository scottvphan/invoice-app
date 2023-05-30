import { Auth0Provider, AuthorizationParams, useAuth0 } from '@auth0/auth0-react'
import App from './App'

function Index() {

  const options: any = {
    domain: 'dev-g4y2r5dknwja6vmn.us.auth0.com',
    clientId: 'KGydycvxYPyKjwQxxcKUa8IrmcBtuqR6',
  }

  return(
    <>
      <Auth0Provider
      {...options}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <App />
      </Auth0Provider>
    </>
  )
}

export default Index