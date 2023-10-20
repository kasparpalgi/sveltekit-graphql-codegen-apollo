# sveltekit-graphql-codegen-apollo

Tested with Apollo 3.5.6 - that version and upgrades can break compatibility. Once we have that working then let's test any newer version which might be currently available.

1. `npm i -D @apollo/client@3.5.6 dotenv graphql@15.8 graphql-tag node-fetch svelte-preprocess`
2. Rename `.env.exmple` to `.env` and add your endpoint and, for example, Hasura `x-hasura-admin-secret`
3. Create `src/lib/utilities/apolloClient.js` and update line 26 for the right authorisation
4. Patch the Apollo client `./patch-apollo-client.sh`
5. Integrate the patch into the build script to run when the host builds the site: [Update the build script in the package.json](https://github.com/kasparpalgi/sveltekit-graphql-codegen-apollo/commit/32a2e2c38f1097135a31ddbef3bc4eb1942ca004)
6. Use the Apollo client `src/routes/+page.server.js`
