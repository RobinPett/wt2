import { useEffect, useRef } from "react"
import * as echarts from 'echarts'

/**
 * Displays a PlotterChart component.
 */
const Heatmap = ({ data, ratings }) => {
    const chartRef = useRef(null)
    const datapoints = data.length

    useEffect(() => {
        setChartOptions()
    }, [data])

    const setChartOptions = () => {
        const chart = echarts.init(chartRef.current)
        const option = {
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
                top: 'bottom',
                inRange: {
                    color: ['#f6d8a7', '#ff0000'],
                },
            },
            series: [
                {
                    data: data.map(item => [item.genre, item.rating, item.frequency]),
                    type: 'heatmap',
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        chart.setOption(option)
    }

    // Render chart
    return (
        <div className="cc0-view-sound">
            <h1>Genre vs Rating</h1>
            <h2>Datapoints: {datapoints}</h2>
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    )
}

export default Heatmap