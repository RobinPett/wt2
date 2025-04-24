import { useEffect, useState } from "react"
import { fetchUtils } from "../../services/index.js"
import Loader from "../info/Loader.js"
import { toast } from "sonner"
import PlotterChart from "../visuals/PlotterChart.js"
import YearPicker from "../common/YearPicker.js"

/**
 * Home page.
 */
const RatingsVsGenre = () => {
    const [plotterData, setPlotterData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [year, setYear] = useState(2022)

    useEffect(() => {
        const createPlotterData = async () => {
            try {
                setLoading(true)
                const ratingObject = await fetchRating()
                const genreData = await fetchGenres(year)
                const plotterData = genreData.games.flatMap(game => {
                    game.genres.map(genre => ({
                        genre,
                        rating: ratingObject[game.rating]
                    }))
                })
                setPlotterData(plotterData)
                setLoading(false)
            }
            catch (error) {
                console.error('Error fetching data: ', error)
                toast.error('Error fetching data: ' + error)
            }
        }
        createPlotterData()
    }, [year])

    const fetchRating = async () => {
            const data = await fetchUtils.getRatings()
            const ratings = data.ratings
            const ratingObject = convertToObject(ratings)
            return ratingObject
    }

    const fetchGenres = async (year) => {
            return await fetchUtils.getGenresAndRatings(year)
    }

    const convertToObject = (ratings) => {
        const ratingObject = {}
        ratings.forEach((rating, index) => {
            ratingObject[index] = rating.text
        })
        return ratingObject
    }

    return (
        <div>
            <div className="year-picker" style={{ padding: '10px' }}>
                <YearPicker updateYear={setYear} />
            </div>
            {plotterData && <PlotterChart data={plotterData} />}
            {loading && <Loader blur={true} />}
        </div>
    )
}

export default RatingsVsGenre