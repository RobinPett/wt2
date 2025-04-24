import { useEffect, useState } from "react"
import { fetchUtils } from "../../services/index.js"
import Loader from "../info/Loader.js"
import { toast } from "sonner"
import PlotterChart from "../visuals/PlotterChart.js"
import YearPicker from "../common/YearPicker.js"

/**
 * RatingsVsGenre component fetches and displays a plotter chart comparing game ratings against genres.
 */
const RatingsVsGenre = () => {
    const [plotterData, setPlotterData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [year, setYear] = useState(1985)

    useEffect(() => {
        const createPlotterData = async () => {
            try {
                setLoading(true)
                const ratingObject = await fetchRating()
                const genreData = await fetchGenres(year)
                console.log('Rating Object:', ratingObject)

                const plotterData = genreData.games.flatMap(game => 
                    game.genres.map(genre => {
                        const ratingKey = Object.keys(ratingObject).find(key => ratingObject[key] === game.rating)
                        return {
                            genre,
                            rating: ratingKey || Object.keys(ratingObject).length, // Fallback - Last rating = Rating pending
                        }
                    })
                )

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
            ratingObject[index + 1] = rating.text
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