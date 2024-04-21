import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(
    BarElement,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale
)

const GraficaBarras = () => {

    const data = {
        labels: ['Publicacion 1', 'Publicacion 2', 'Publicacion 3'],
        datasets: [{
            label: 'Publicaciones con mayor likes',
            data: [30, 40, 30],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    }

    return (
        <>
            <Bar data={data}/>
        </>
    )
}

export default GraficaBarras;