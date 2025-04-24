import { useEffect, useState } from "react"
import { fetchUtils } from "../../services/index.js"
import PlatformsPieChart from "../visuals/PlatformsPieChart.js"
import Loader from "../info/Loader.js"
import { toast } from "sonner"
import YearPicker from "../common/YearPicker.js"

/**
 * Home page.
 */
const Platforms = () => {
    const [platformData, setPlatformData] = useState(null)
    const [year, setYear] = useState(2022)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                setLoading(true)
                const data = await fetchUtils.getPlatforms(year)
                setPlatformData(await data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                const statusCode = error.response?.status
                toast.error(`Error fetching data: Status: ${statusCode}`)
            }
        }
        fetchPlatforms()
    }, [year])

    return (
        <div>
            <div className="year-picker" style={{ padding: '10px' }}>
                <YearPicker  updateYear={setYear} />
            </div>
            {platformData && <PlatformsPieChart data={platformData.games} />}
            {loading && <Loader blur={true} />}
        </div>
    )
}

export default Platforms