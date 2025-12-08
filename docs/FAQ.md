# Frequently Asked Questions

1. [Why is the isAuthenticated flag reset to false on the client side when the page is refreshed (or reloaded)?](#Why-is-the-isAuthenticated-flag-reset-to-false-on-the-client-side-when-the-page-is-refreshed-(or-reloaded))

## <a name="Why-is-the-isAuthenticated-flag-reset-to-false-on-the-client-side-when-the-page-is-refreshed-(or-reloaded)">Why is the isAuthenticated flag reset to false on the client side when the page is refreshed (or reloaded)?</a> ##

This is by design. Because the tokens are not saved (persisted), refreshing the page will reset the authentication state, requiring the SDK to log in again. To maintain the authenticated state upon refresh, you should use the loginWithRedirect flow or the AuthenticationGuard component.
