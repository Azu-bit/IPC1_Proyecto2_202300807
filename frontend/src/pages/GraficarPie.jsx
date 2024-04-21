import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const GraficarPie = () => {

    const data = {
        labels: ['Publicacion 1', 'Publicacion 2', 'Publicacion 3'],
        datasets: [
            {
                data: [25, 40, 35],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(245, 176, 65)']
            }
        ]
    }

    return (
        <>
            <Pie data={data}/>
        </>
    )
}

export default GraficarPie;