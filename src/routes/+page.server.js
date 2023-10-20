import { client } from '$lib/utilities/apolloClient';
import gql from 'graphql-tag';

/** @type {import('../../.svelte-kit/types/src/routes/$types').PageLoad} */
export async function load() {
    const limit = 5;
    const query = gql`
        query Users($limit: Int) {
            users(limit: $limit) {
                displayName
            }
        }
	`;
    const { data } = await client.query({
        query,
        variables: { limit },
    });

    return {
        data,
    };
}