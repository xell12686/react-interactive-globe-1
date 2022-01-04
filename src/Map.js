import React from "react";
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import { geoCircle } from "d3-geo";
import "./styles.css";

const mapStyles = {
  width: "100%",
  height: "auto"
};

const circleVien = [
  geoCircle()
    .center([20, 47.5])
    .radius(1.5)()
];
const circleCape = [
  geoCircle()
    .center([2, 46.5])
    .radius(1.5)()
];
const circleTal = [
  geoCircle()
    .center([30.5, -25.7])
    .radius(1.5)(),
  geoCircle()
    .center([-83.1, 35.4])
    .radius(1.5)()
];

const circleBrat = [
  geoCircle()
    .center([25, 46.5])
    .radius(1.5)()
];

const Map = ({ center, isActive }) => (
  <div>
    <Motion
      defaultStyle={{
        x: center[0],
        y: center[1]
      }}
      style={{
        x: spring(center[0]),
        y: spring(center[1])
      }}
    >
      {({ x, y }) => (
        <ComposableMap
          width={500}
          height={500}
          projection="orthographic"
          projectionConfig={{ scale: 220 }}
          style={mapStyles}
        >
          <ZoomableGlobe center={[x, y]}>
            <circle cx={250} cy={250} r={220} fill="white" stroke="#CFD8DC" />
            <Geographies
              disableOptimization
              geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
            >
              {(geographies, proj) =>
                geographies.map((geo, i) => (
                  <Geography
                    key={geo.id + i}
                    geography={geo}
                    projection={proj}
                    style={{
                      default: { fill: "#d4d4d4" }
                    }}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleVien} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={"vien mark"}
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleBrat} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className={
                      isActive ? "bratislava mark active" : "bratislava mark"
                    }
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleCape} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className="capetown mark"
                  />
                ))
              }
            </Geographies>
            <Geographies geography={circleTal} disableOptimization>
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={i}
                    geography={geo}
                    projection={proj}
                    className="tallahasi mark"
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      )}
    </Motion>
  </div>
);

export default Map;
