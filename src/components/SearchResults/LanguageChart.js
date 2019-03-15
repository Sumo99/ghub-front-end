import React from "react";
import PropTypes from "prop-types";
import sumBy from "lodash/fp/sumBy";
import sortBy from "lodash/fp/sortBy";
import { format } from "d3";
import Octicon, { Alert } from "@githubprimer/octicons-react";
import { toast } from "react-toastify";

import LoadingWheel from "../Loading/LoadingWheel";

const LanguageChart = ({ languages, isLoading, error }) => {
  const sizeTotal = sumBy("size", languages);
  if (isLoading) {
    return <LoadingWheel text="language usage information." />;
  } else if (error) {
    toast.error(error);
    return (
      <div className="d-flex flex-column flex-justify-center flex-items-center">
        <Octicon icon={Alert} size="large" />
        <span>Something went wrong.</span>
      </div>
    );
  } else
    return (
      <section className="col-12 col-lg-6 px-4 pb-2">
        <h2 className="Subhead">Language Usage</h2>
        <dl className="mt-2 list-style-none">
          {sortBy("size", languages)
            .reverse()
            .filter(({ size }) => size / sizeTotal > 0.02)
            .map(({ name, color, size }) => (
              <React.Fragment key={name}>
                <dt className="pt-2">
                  <strong>{name}</strong> {format(".1%")(size / sizeTotal)}
                </dt>
                <dd>
                  <div
                    style={{
                      height: "1rem",
                      backgroundColor: color,
                      width: format(".1%")(size / sizeTotal)
                    }}
                  />
                </dd>
              </React.Fragment>
            ))}
        </dl>
      </section>
    );
};

export const LanguageChartProps = PropTypes.shape({
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired
  )
}).isRequired;

LanguageChart.propTypes = LanguageChartProps;

export default LanguageChart;
