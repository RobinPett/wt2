import { useEffect, useState } from "react"
import { fetchUtils } from "../../services"
import PlatformsPieChart from "./PlatformsPieChart.js"

/**
 * Home page.
 */
const Platforms = () => {
    const [platformData, setPlatformData] = useState(null)

    useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                const data = await fetchUtils.getPlatforms()
                setPlatformData(await data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchPlatforms()
    }, [])

    return (
        <div>
            {platformData ? <PlatformsPieChart data={platformData}/> : <p>Loading...</p>}
        </div>
    )
}

export default Platforms