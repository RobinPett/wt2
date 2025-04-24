import { useEffect, useState, useRef } from "react"
import * as echarts from 'echarts'

/**
 * Displays a PlotterChart component.
 */
const PlotterChart = ({ data, ratings }) => {
    const chartRef = useRef(null)
    const dataLength = data.length
    console.log('PlotterChart data:', data)
    console.log('Math max:', Math.max(...data.map(item => item.frequency)))

    useEffect(() => {
        setChartOptions()
    }, [data])

    const setChartOptions = () => {
        const chart = echarts.init(chartRef.current)
        const option = {
            title: {
                text: 'Genre vs Rating',
                left: 'center'
            },
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                data: [...new Set(data.map(item => item.genre))],
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: [...new Set(data.map(item => item.rating))],
                axisLabel: {
                    formatter: value => {
                        return ratings[value] || `Rating ${value}`
                    }
                },
                splitArea: {
                    show: true
                  }
            },
            visualMap: {
                min: 1,
                max: Math.max(...data.map(item => item.frequency)),
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top: 'center',
                inRange: {
                    color: ['#f6d8a7', '#ff0000'],
                },
            },
            series: [
                {
                    data: data.map(item => [item.genre.name, item.rating, item.frequency]), // Adding a small random offset to the y value
                    type: 'heatmap',
                    label: {
                        show: true,
                        formatter: '{@[2]}',
                    }
                }
            ]
        }
        chart.setOption(option)
    }


    return (
        <div className="cc0-view-sound">
            <h1>Genre vs Rating Plotter Chart</h1>
            <h2>Number of games: {dataLength}</h2>
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default PlotterChart