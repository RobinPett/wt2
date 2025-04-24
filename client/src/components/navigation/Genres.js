import { useEffect, useState } from "react"
import { fetchUtils } from "../../services/index.js"
import GameChart from "./GameChart.js"

/**
 * Home page.
 */
const Genres = () => {
    const [genreData, setGenreData] = useState(null)

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const data = await fetchUtils.getGamesByGenre()
                setGenreData(await data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchGenres()
    }, [])

    return (
        <div>
            {genreData ? <GameChart /> : <p>Loading...</p>}
        </div>
    )
}

export default Genres