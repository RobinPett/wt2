import { useEffect, useState, useRef, use } from "react"
import { fetchUtils } from "../../services"
import * as echarts from 'echarts'
import SlideSwitch from "../common/SlideSwitch.js"
import YearPicker from "../common/YearPicker.js"

/**
 * Displays a specified sound.
 */
const GameChart = () => {
    const [data, setData] = useState(null)
    const [year, setYear] = useState(2008)
    const [error, setError] = useState(null)
    const [sort, setSort] = useState(false)
    const chartRef = useRef(null)

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameData = await fetchUtils.getGamesOfYear(year)
                setData(gameData)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(error.message)
            }
        }
        fetchData()
    }, [year])

    const sortData = (genres, counts) => {
        const combined = genres.map((genre, index) => ({ genre, count: counts[index] }))
        combined.sort((a, b) => b.count - a.count)

        return {
            genres: combined.map(item => item.genre),
            counts: combined.map(item => item.count)
        }
    }

    const triggerSort = () => {
        if (sort) setSort(false)
        else setSort(true)
    }


    // Initialize chart
    useEffect(() => {
        if (data && chartRef.current) {
            const chart = echarts.init(chartRef.current)

            const genreMap = new Map()

            data.forEach(game => {
                const genres = game.genres.map(genre => genre.name)
                genres.forEach(genre => {
                    genreMap.set(genre, (genreMap.get(genre) || 0) + 1)
                })
            })

            // Data for chart
            let genres = Array.from(genreMap.keys())
            let counts = Array.from(genreMap.values())

            if (sort) {
                ({ genres, counts } = sortData(genres, counts))
            }

            // Chart options
            const options = {
                title: {
                    text: `Most popular genres in ${year}`,
                    left: 'center'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: genres
                },
                yAxis: {
                    type: 'value' // Count of games
                },
                series: [{
                    name: 'Number of games',
                    type: 'bar',
                    data: counts
                }]
            }
            chart.setOption(options)

            // Cleanup
            return () => {
                chart.dispose()
            }
        }
    }, [data, year, sort])

    return (
        <div className="cc0-view-sound">
            <h1>Game Chart</h1>
            <div style={{ padding: '10px' }}>
                <YearPicker updateYear={setYear} />
            </div>
            <SlideSwitch label={'Sort'} onChange={triggerSort} />
            {error && <p className="error">{error}</p>}
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default GameChart