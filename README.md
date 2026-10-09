# Remote form `validate()` and a redirect response

1. Open `/a`, pick "yes" and press "save". The server sets a cookie, and from then on the `handle` hook in `src/hooks.server.ts` redirects any request made for `/a` to `/b`.
2. Pick "no". `validate()` posts a validation request and gets the redirect back. The root layout's `$effect`, which reads `save.fields.allIssues()`, then throws `TypeError: issues is not iterable`.

To reset, clear the `answered` cookie.
