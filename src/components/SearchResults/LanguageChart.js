import React from "react";
import sumBy from "lodash/fp/sumBy";
import sortBy from "lodash/fp/sortBy";
import { format } from "d3";

const LanguageChart = ({ languages }) => {
  const sizeTotal = sumBy("size", languages);
  return (
    <section className="Box col-md-5 px-4 mt-4">
      <h2 className="py-3 Subhead">Language usage</h2>
      <dl className="mt-2 list-style-none">
        {sortBy("size", languages)
          .reverse()
          .map(({ name, color, size }) => (
            <>
              <dt key={name} className="pt-2">
                <strong>{name}</strong> {format(".1%")(size / sizeTotal)}
              </dt>
              <dd>
                <div
                  style={{
                    height: "1rem",
                    backgroundColor: color,
                    width: format(".1%")(size / sizeTotal),
                    textShadow: "1px 1px 1px white"
                  }}
                />
              </dd>
            </>
          ))}
      </dl>
    </section>
  );
};

export default LanguageChart;
