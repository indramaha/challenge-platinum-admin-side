import { propTypes } from "react-bootstrap/esm/Image"
import { Bar } from "react-chartjs-2"

const Bar = (props) => {
    return <Bar data={props.chartData}/>
}

Bar.prototype = {
    name: propTypes.string,
    data: propTypes.number
}

export default Bar