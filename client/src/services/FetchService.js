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

export const getGamesByGenre = async (genre) => {
    const query = gql`
    query {
        games {
            title
            release_year
            genres {
                name
            }
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
            genres {
                name
            }
        }
    }
`
    return await graphqlFetch(query)
}

export const getGamesLimited = async (year, limit, page) => {
    const query = gql`
    query {
        games(release_year: ${year}, limit: ${limit}, page: ${page}) {
            title
            release_year
            genres {
                name
            }
        }
    }
`
    return await graphqlFetch(query)
}

export const getPlatforms = async () => {
    const query = gql`
    query {
        games (release_year: 2008) {
            platforms {
                name
            }
        }
    }
`
    return await graphqlFetch(query)
}