import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.value}
        />
      ))}
      {/* every chart bar should plot the value in relation to the maximum value in the entire chart */}
      {/* we wanna look at all the months and find the biggest value */}
    </div>
  );
};

export default Chart;
