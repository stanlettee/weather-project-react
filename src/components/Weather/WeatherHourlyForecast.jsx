import styles from './styles/WeatherHourlyForecast.module.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export const WeatherHourlyForecast = ({data}) => {
    const [forecast, setForecast] = useState(null)

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: data.name,
                units: "metric",
                appid: "7d999ffaaae7e56a4ec93496de93f111"
            }
        })
        .then(res => {
            setForecast(res.data)
        });
    }, [data.name])

    if (!forecast) return null;

    const chartData = forecast.list.slice(1, 9).map(item => {
        const date = new Date(item.dt * 1000);
        return {
            time: date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }), 
            temp: Math.round(item.main.temp)
        }
    })
    
    return (
        <div id='hourly-forecast' className={styles.div}>
            <h2 className={styles.title}>Hourly forecast</h2>
            <ResponsiveContainer width="100%" height="100%" className={styles.container}>
                <LineChart
                    data={chartData}
                    className={styles.linechart}
                    margin={{ top: 20, right: 20, left: -10, bottom: 10 }}
                >
                    <CartesianGrid 
                    stroke="#B5B5B5" 
                    strokeDasharray="0"  
                    vertical={true}  
                    horizontal={true}  
                    />

                    <XAxis 
                    dataKey="time"
                    tick={{ fontSize: 11 }}
                    axisLine={false} 
                    />

                    <YAxis 
                    unit="℃"
                    tick={{ fontSize: 11 }}
                    axisLine={false} 
                    
                    />

                    <Tooltip />

                    <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#FFB36C"
                    strokeWidth={3}
                    dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}