import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { axisBottom, extent, select, scaleLinear, scaleBand } from "d3";
import { dodge, parseWeekHour, DAYS_OF_WEEK } from "../../lib";

const BeeSwarmChart = ({ commitsByHour, isLoading, error }) => {
  const ref = useRef();
  const [width, height] = [800, 360];
  const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 20
  };

  const massage = d =>
    d.reduce(
      (acc, { day, hour, commits }) => [
        ...acc,
        ...Array(commits).fill({ value: parseWeekHour(day, hour) })
      ],
      []
    );

  const data = massage(commitsByHour);

  const x = scaleLinear()
    .domain(extent(data, ({ value }) => value))
    .range([margin.left, width - margin.right]);

  const x_ = scaleBand()
    .domain(DAYS_OF_WEEK)
    .range([margin.left, width - margin.right]);

  const xAxis = g =>
    g
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(axisBottom(x_).tickSizeOuter(0));

  const radius = 2;
  const padding = 1;

  useEffect(() => {
    const svg = select(ref.current);

    svg.append("g").call(xAxis);

    svg
      .append("g")
      .selectAll("circle")
      .data(dodge(data, radius * 2 + padding, x))
      .enter()
      .append("circle")
      .attr("cx", ({ x }) => +x)
      .attr("cy", ({ y }) => height / 2 + y)
      .attr("r", radius);
  }, []);

  return isLoading ? (
    <h3>Loading</h3>
  ) : error ? (
    <>
      <h3>Error</h3>
      <p>{error}</p>
    </>
  ) : (
    <section className="Box col-md-10 px-4 mt-4">
      <h2 className="py-3 Subhead">Total commits by week-hour</h2>
      <div className="mt-2">
        <svg ref={ref} width={width} height={height} />
      </div>
    </section>
  );
};

export const BeeSwarmChartProps = PropTypes.shape({
  commitsByHour: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired,
      commits: PropTypes.number.isRequired
    }).isRequired
  )
}).isRequired;

BeeSwarmChart.propTypes = BeeSwarmChartProps;

export default BeeSwarmChart;
