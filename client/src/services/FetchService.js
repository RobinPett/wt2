/**
 * Fetches data from Game API
 */

import { gql, request } from "graphql-request"

// TODO Create a class

const graphqlFetch = async (query) => {
    try {
        const response = await request(process.env.REACT_APP_BACKEND_URL, query)
        return response.games
    } catch (error) {
        console.error(error)
        throw error
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

export const getGameGenres = async (year) => {
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

export const getPlatforms = async (year) => {
    const query = gql`
    query {
        games (release_year: ${year}) {
            platforms {
                name
            }
        }
    }
`
    return await graphqlFetch(query)
}