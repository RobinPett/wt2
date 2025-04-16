import { useEffect, useState } from "react"
import { fetchUtils } from "../../services"

/**
 * Displays a specified sound.
 */
const GameChart = () => {
    const [data, setData] = useState(null)
    const [year, setYear] = useState(2008)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data...')
                const gameData = await fetchUtils.getGamesOfYear(year)
                console.log(gameData)
                setData(gameData)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(error.message)
            }
        }
        fetchData()
    }, [year])
    
    return (
        <div className="cc0-view-sound">
            <h1>Game Chart</h1>
            {error && <p className="error">{error}</p>}
            {data && (
                <ul>
                    {data.map((game, index) => {
                        return <li>{game.title}</li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default GameChart