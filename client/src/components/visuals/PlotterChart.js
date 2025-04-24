import { useEffect, useState, useRef } from "react"
import * as echarts from 'echarts'
import SlideSwitch from "../common/SlideSwitch.js"

/**
 * Displays a PlotterChart component.
 */
const PlotterChart = ({ data }) => {
    const chartRef = useRef(null)
    console.log('PlotterChart data:', data)

    const option = {
        title: {
            text: 'Genre vs Rating',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: [...new Set(data.map(item => item.genre))],
        },
        yAxis: {
            type: 'value',
            min: 1,
            max: 6,
            interval: 1,
            data: [...new Set(data.map(item => item.rating))],
            axisLabel: {
                formatter: value => {
                    const labels = ['Rating 1', 'Rating 2', 'Rating 3', 'Rating 4', 'Rating 5', 'Rating 6']
            }
        },
        series: [
          {
            symbolSize: 20,
            data: [],
            type: 'scatter'
          }
        ]
      }
    }


    return (
        <div className="cc0-view-sound">
            <h1>Genre vs Rating Plotter Chart</h1>
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default PlotterChart