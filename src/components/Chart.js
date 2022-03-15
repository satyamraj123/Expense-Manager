import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.id}
        ></ChartBar>;
      })}
    </div>
  );
};

export default Chart;