/**
 * Fetches data from Game API
 */

export const getAllGames = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/data`) 
    if (!response.ok) {
        throw new Error('Failed to fetch games' + response.statusText)
    }
    const data = await response.json()
    return data
}

export const getGamesOfYear = async (year) => {
    const response = await fetch(`${process.env.BACKEND_URL}/data/${year}`) 
    if (!response.ok) {
        throw new Error('Failed to fetch games' + response.statusText)
    }
    const data = await response.json()
    return data
}