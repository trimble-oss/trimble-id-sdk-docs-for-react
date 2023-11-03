import { TIDClient } from '@trimble-oss/trimble-id-react'
import { PersistentStore } from '@trimble-oss/trimble-id-react'

const tidClient = new TIDClient({
  config: {
    configurationEndpoint: import.meta.env.VITE_CONFIGURATION_ENDPOINT,
    clientId: import.meta.env.VITE_CLIENT_ID,
    redirectUrl: import.meta.env.VITE_REDIRECT_URL,
    logoutRedirectUrl: import.meta.env.VITE_LOGOUT_REDIRECT_URL,
    scopes: [import.meta.env.VITE_SCOPES],
  },
  persistentOptions: {
    persistentStore: "localStorage"
  }
})

export default tidClient
