# @trimble-oss/trimble-id-react

Trimble Identity SDK developer documentation for React apps.

🚀 [Getting Started](#getting-started) - 📚 [Usage Reference](#usage-reference) - 💬 [Support](#support)

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```sh
npm install @trimble-oss/trimble-id-react
```

### Configure Trimble Identity

Create a new application in the [Trimble Developer Console](https://developer.console.trimble.com) portal and configure the following settings:

To register your service application in Trimble Developer Console:

1. On the left pane select Identity Management > Applications.

2. On the Applications home page, in the top right corner select + NEW APPLICATION. The Create Application page displays.

3. Select Continue to enter the applications details.

    | Field       | Description |
    | ----------- | ----------- |
    | Name        | Name of your application                    |
    | Display Name| Provide a display name of the application.  |
    | Description | Provide a description for the application.  |

4. Configure OAuth application grant types as `Authorization Code Grant` and `Use Refresh tokens` in order to use this SDK.

5. Select "Create Application" to save changes.

Take note of the Client ID and URLs under the "Basic Information" section. You'll need these values to configure the SDK.

For more information, see [Authentication documentation](https://developer.trimble.com/docs/authentication).

## Usage Reference

### Configure the SDK

SDK provides a React component `TID Provider` that will handle the
process related to the authentication for you. Configure the SDK by wrapping your application in `TIDProvider`:

```tsx
<TIDProvider tidClient={new TIDClient(config)} onRedirectCallback={handleRedirect}>
    <Component/>
</TIDProvider> 
```

Here TIDProvider can take two parameters :  
* **tidClient**  : TID client instance. You can send an instance of the TID Client if you want to handle the initialization yourself
* **onRedirectCallback** -  When the redirect callback occur this function will be call once the user is login using the TIDClient. This could allow you to redirect the user into another page after the login happen.


After wrapping your app with the TIDProvider, you have to configure the TID credentials registered in TrimbleCloud console. There are two ways of doing this:

**1.** Using the `TIDClient`
```tsx
<TIDProvider tidClient={new TIDClient({
    config: {
        configurationEndpoint: "<OAUTH_WELL_KNOWN_URL>",
        clientId: "CLIENT_ID",
        redirectUrl: "http://localhost:3000/callback",
        logoutRedirectUrl: "http://localhost:3000/logout-callback",
        scopes: ['test']
    },
    persistentOptions: {
      persistentStore:   ('localStorage' as PersistentStore),
  }
  })} onRedirectCallback={handleRedirect}>
    <Component/>
</TIDProvider>
```
**2.** You can send the properties directly

```tsx
<TIDProvider
    configurationEndpoint={"<OAUTH_WELL_KNOWN_URL>"}
    clientId={"CLIENT_ID"}
    redirectUrl={"http://localhost:3000/callback"}
    logoutRedirectUrl={"http://localhost:3000/logout-callback"}
    scopes={['test']}
    onRedirectCallback={handleRedirect}>
        <Component/>
</TIDProvider>
```

Below are the parameters of TIDClient.
### 1. TID Client configurations:

* **ConfigurationEndpoint** : The URL for the Trimble Identity OpenID well known configuration endpoint <br /> 
Production: https://id.trimble.com/.well-known/openid-configuration  <br /> 
* **clientId** : Client id of the application created in Trimble Developer Console
* **redirectUrl** : The URL to which Trimble Identity should redirect after successfully authenticating a user
* **logoutRedirectUrl** : The URL to which Trimble Identity should redirect after successfully logout a user
* **scopes** :  The type of credentials you want (openID, or application_name)

### 2. PersistentOptions configuration
Type of persistence you want the user and token to be store
   * **localStorage** - This persistent doesn't have expiration date
   * **sessionStorage** - This one is cleared when the page session ends

Use the `useAuth` hook in your components to access authentication state (`isLoading`, `isAuthenticated` and `user`) and authentication methods (`loginWithRedirect` and `logout`):

### loginWithRedirect

Redirect the user to TID using the browser

```tsx
const {loginWithRedirect}= useAuth()
await loginWithRedirect()

```

### logout

```tsx
const {logout}= useAuth()
await logout()
```

### isAuthenticated

True if the user is authenticated.

```tsx
const {isAuthenticated}= useAuth()
```

### isLoading 

This property will indicate the developer that the TID Provider is still loading information from the cache By default, this state will be true, this will allow the developers to handle async functionality Note: This property will only be true the first time that the app executes.

```tsx
const {isLoading}= useAuth()
```

### getAccessTokenSilently

Gets the access token from cache. SDK handles token refresh when token expires.

```tsx
const {getAccessTokenSilently}= useAuth()
var access_token = await useAuth().getAccessTokenSilently()
```

### user

Information of the user in session

```tsx
const {user}= useAuth()
var name = user?.name
```


### AuthenticationGuard 
It renders a component if the user is authenticated, otherwise redirects the user to the login page. It can be used to protect private components. If the user is not authenticated, they will be redirected to the login page.

```tsx
<AuthenticationGuard renderComponent={() => <MyPrivateComponent/>}/>
```

> **_NOTE:_** Refer samples for better understanding.

## Release notes

See here for [releases](https://github.com/trimble-oss/trimble-id-sdk-docs-for-react/blob/main/release-notes/CHANGELOG.md)

## Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/trimble-oss/tcp-sdk-docs-for-net/issues).

## <a name="support">Support</a>

Send email to [cloudplatform_support@trimble.com](mailto:cloudplatform_support@trimble.com)