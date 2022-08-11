import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Moment from "moment";

{
    name: 'bitcoin'
    bitcoin: '100000'
}

export default function CoinChart({prices}){
    const newData = prices?.map(([data, price]) =>({
        name: Moment(data).format('DD/MM/YYYY - HH:MM'),
        moeda: price
    }))
    console.log(newData)
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={newData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="moeda" stroke="#1400c6" />
            </LineChart>
        </ResponsiveContainer>

    )
}