# @trimble-oss/trimble-id-react

Trimble Identity SDK for React app.

🚀 [Getting Started](#getting-started) - 📚 [Usage Reference](#usage-reference) - 💬 [Support](#support)

## <a name="getting-started">Getting Started</a>

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```sh
npm install @trimble-oss/trimble-id-react
```

### Configure Trimble Identity

Create a new application in the [Trimble Developer Console](https://console.trimble.com) portal and configure the following settings:

To register your application in Trimble Developer Console:

1. On the left pane select "Applications".

2. On the Applications home page, in the top right corner select + NEW APPLICATION. The Create Application page displays.

3. Select Continue to enter the applications details.

    | Field       | Description |
    | ----------- | ----------- |
    | Name        | Name of your application                    |
    | Description | Provide a description for the application.  |

4. Configure OAuth application grant types as `Authorization Code Grant` and `Use Refresh tokens` in order to use this SDK.

5. Configure the desired `callback URL` and `logout URL` for your application. These URLs are used by the SDK to redirect the user after authentication.

6. Select "Create Application" to save changes.

Take note of the Client ID and URLs under the "Basic Information" section. You'll need these values to configure the SDK.

**Scopes**

Trimble Identity uses scopes to determine the aud claim in the returned access token. Scope is mandatory for the application to work. You can use the scope as the application name registered in the Trimble Developer Console. For example, if you have registered an application with the name "test", then it must be registered in the format {some_uuid}-"test". For eg., 12345678-1234-1234-1234-123456789012-test.

For more information, see [Authentication documentation](https://developer.trimble.com/docs/authentication).

## <a name="usage-reference">Usage Reference</a>

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

> **_NOTE:_** 
> 
> As of version 1.0.0, PersistentOptions have been removed. By default, the SDK now supports in-memory token storage. Using localStorage and sessionStorage for storing sensitive information poses several security risks, including vulnerability to XSS attacks, lack of secure attributes and session hijacking. 

> When you upgrade to version 1.x, storage options will no longer be available, resulting in a breaking change. For those using an older version of the SDK (i.e., <1.x), it is highly recommended to use the default in-memory storage to avoid any security issues.

### useAuth
Use the `useAuth` hook in your components to access authentication state (`isLoading`, `isAuthenticated`, `user`, `error`) and authentication methods (`loginWithRedirect` and `logout`):

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
var access_token = await getAccessTokenSilently()
```

### getTokens

Gets the token details from cache. 

```tsx
const {getTokens}= useAuth()
var tokenResponse : TokenResponse = await getTokens()
```

### user

Information of the user in session

```tsx
const {user}= useAuth()
var name = user?.name
```

### error

Property that let the developer know if an error happen during the authentication

```tsx
const {error}= useAuth()
var error = error.message
```


### AuthenticationGuard 
It renders a component if the user is authenticated, otherwise redirects the user to the login page. It can be used to protect private components. If the user is not authenticated, they will be redirected to the login page.

```tsx
<AuthenticationGuard renderComponent={<MyPrivateComponent/>}/>
```

> **_NOTE:_** Refer samples for better understanding.

## Sample Code

See here for [Sample Code](https://github.com/trimble-oss/trimble-id-sdk-docs-for-react/blob/main/samples) for reference.

## Release notes

See here for [releases](https://github.com/trimble-oss/trimble-id-sdk-docs-for-react/blob/main/release-notes/CHANGELOG.md)

## Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/trimble-oss/trimble-id-sdk-docs-for-react/issues).

## <a name="support">Support</a>

Send email to [support@trimble.com](mailto:support@trimble.com)
