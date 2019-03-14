import React, { useEffect, useRef, useReducer } from "react";
import PropTypes from "prop-types";
import {
  area,
  axisBottom,
  axisLeft,
  curveStep,
  line,
  max,
  mean,
  range,
  scaleBand,
  scaleLinear,
  select
} from "d3";
import { reduce } from "lodash/fp";

import { data as _data } from "./data";
import { formatHour, DAYS_OF_WEEK } from "../../lib";

import "./MultiLineChart.scss";

// @TODO Add key
const DiffChart = ({ avgData, dayValues, maxY }) => {
  const ref = useRef();

  const [width, height] = [600, 360];
  const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 40
  };

  const x = scaleLinear()
    .domain([0, 24])
    .range([margin.left, width - margin.right]);

  const x_ = scaleBand()
    .domain(
      range(24)
        .map(formatHour)
        .filter((_, ix) => ix % 2 === 0)
    )
    .range([margin.left, width - margin.right]);

  const xAxis = g =>
    g
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(axisBottom(x_).tickSizeOuter(0))
      .call(g => g.select(".domain").remove());

  const y = scaleLinear()
    .domain([0, maxY])
    .range([height - margin.bottom, margin.top]);

  const yAxis = g =>
    g.attr("transform", `translate(${margin.left}, 0)`).call(axisLeft(y));

  const LT_RED = "#ffdce0";
  const LT_BLUE = "#dbedff";

  const colors = [LT_RED, LT_BLUE];

  const data = avgData.map((a, ix) => ({
    ...a,
    dayValue: dayValues[ix]
  }));

  const curve = curveStep;

  useEffect(() => {
    const svg = select(ref.current).datum(data);

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, []);

  useEffect(
    () => {
      const svg = select(ref.current).datum(data);

      svg.selectAll("path").remove();
      svg.selectAll("clipPath").remove();

      svg
        .append("clipPath")
        .attr("id", "above")
        .append("path")
        .attr(
          "d",
          area()
            .curve(curve)
            .x(({ hour }) => x(hour))
            .y0(0)
            .y1(({ avgValue }) => y(avgValue))
        );

      svg
        .append("clipPath")
        .attr("id", "below")
        .append("path")
        .attr(
          "d",
          area()
            .curve(curve)
            .x(({ hour }) => x(hour))
            .y0(height)
            .y1(({ avgValue }) => y(avgValue))
        );

      svg
        .append("path")
        .attr("clip-path", "url(#above)")
        .attr("fill", colors[1])
        .attr(
          "d",
          area()
            .curve(curve)
            .x(({ hour }) => x(hour))
            .y0(height)
            .y1(({ dayValue }) => y(dayValue))
        );

      svg
        .append("path")
        .attr("clip-path", "url(#below)")
        .attr("fill", colors[0])
        .attr(
          "d",
          area()
            .curve(curve)
            .x(({ hour }) => x(hour))
            .y0(0)
            .y1(({ dayValue }) => y(dayValue))
        );

      svg
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr(
          "d",
          line()
            .curve(curve)
            .x(({ hour }) => x(hour))
            .y(({ dayValue }) => y(dayValue))
        );
    },
    [dayValues]
  );

  return (
    <div className="mt-2 col-md-7">
      <svg ref={ref} width={width} height={height} />
    </div>
  );
};

const MultiLineChart = ({ commitsByHour = _data }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW_AVERAGE":
        return action.payload;
      case "SHOW_DIFFERENCE":
        return action.payload;
      default:
        return state;
    }
  };

  const massage = reduce(
    (acc, { day, commits }) => ({
      ...acc,
      [day]: (acc[day] || []).concat(commits)
    }),
    []
  );

  const byDayHashMap = massage(commitsByHour);
  const values = Object.values(byDayHashMap);
  const avgData = range(24).map(n => ({
    hour: n,
    avgValue: mean(values.map(vs => vs[n]))
  }));

  const maxY = max(values.flat());

  const initialState = avgData.map(({ avgValue }) => avgValue);

  const [dayValues, dispatch] = useReducer(reducer, initialState);

  const handleMouseEnter = day => _event => {
    dispatch({
      type: "SHOW_DIFFERENCE",
      payload: byDayHashMap[day]
    });
  };

  const handleMouseLeave = _event => {
    dispatch({
      type: "SHOW_AVERAGE",
      payload: initialState
    });
  };

  return (
    <section className="Box col-md-10 px-4 mt-4">
      <h2 className="Subhead py-3">Daily commits per hour</h2>
      <div className="d-flex mb-3">
        <ul className="Box col-md-3" onMouseLeave={handleMouseLeave}>
          {DAYS_OF_WEEK.map(day => (
            <li
              className="Box-row hover-li"
              onMouseEnter={handleMouseEnter(day)}
            >
              {day}
            </li>
          ))}
        </ul>
        <DiffChart avgData={avgData} dayValues={dayValues} maxY={maxY} />
      </div>
    </section>
  );
};

export const MultiLineChartProps = PropTypes.shape({
  commitsByHour: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired,
      commits: PropTypes.number.isRequired
    }).isRequired
  )
}).isRequired;

MultiLineChart.propTypes = MultiLineChartProps;

const DiffChartProps = PropTypes.shape({
  avgData: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number.isRequired,
      avgValue: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  dayValues: PropTypes.arrayOf(PropTypes.number.isRequired),
  maxY: PropTypes.number.isRequired
});

DiffChart.propTypes = DiffChartProps;

export default MultiLineChart;
