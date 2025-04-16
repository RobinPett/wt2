/**
 * Fetches data from Game API
 */

import { gql, request } from "graphql-request"

const graphqlFetch = async (query) => {
    try {
        const response = await request(process.env.REACT_APP_BACKEND_URL, query)
        return response.games
    } catch (error) {
        console.error(error)
    }
}

export const getAllGames = async () => {
    const query = gql`
    query {
        games {
            title
            release_year
        }
    }
`
    return await graphqlFetch(query)
}


export const getGamesOfYear = async (year) => {
    const query = gql`
    query {
        games(release_year: ${year}) {
            title
            release_year
        }
    }
`
    return await graphqlFetch(query)
}