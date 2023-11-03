// / <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CONFIGURATION_ENDPOINT: string
  readonly VITE_CLIENT_ID: string
  readonly VITE_REDIRECT_URL: string
  readonly VITE_LOGOUT_REDIRECT_URL: string
  readonly VITE_SCOPES: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
