import { useEffect, useState, useRef } from "react"
import * as echarts from 'echarts'
import SlideSwitch from "../common/SlideSwitch.js"

/**
 * Displays a PlotterChart component.
 */
const PlotterChart = ({ data }) => {
    const chartRef = useRef(null)


    return (
        <div className="cc0-view-sound">
            <h1>Genre vs Rating Plotter Chart</h1>
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default PlotterChart