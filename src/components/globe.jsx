import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "../Css/globe.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Globe = () => {
  const [zoom, setZoom] = useState(1);

  const customers = [
    { id: 1, name: "New York", coordinates: [-74.006, 40.7128], value: 250 },
    { id: 2, name: "Delhi", coordinates: [77.209, 28.6139], value: 180 },
    { id: 3, name: "Mumbai", coordinates: [72.8777, 19.076], value: 210 },
    { id: 4, name: "London", coordinates: [-0.1278, 51.5074], value: 300 },
    { id: 5, name: "Tokyo", coordinates: [139.6917, 35.6895], value: 270 },
    { id: 6, name: "Sydney", coordinates: [151.2093, -33.8688], value: 150 },
    { id: 7, name: "Moscow", coordinates: [37.6173, 55.7558], value: 120 },
    { id: 8, name: "Jaipur", coordinates: [75.7873, 26.9124], value: 130 },
    { id: 9, name: "Udaipur", coordinates: [73.7125, 24.5854], value: 110 },
    { id: 11, name: "Canada", coordinates: [-106.3468, 56.1304], value: 190 }
  ];

  const getMarkerSize = (value) => {
    const minSize = 2;
    const maxSize = 8;
    const minValue = 100;
    const maxValue = 300;
    return Math.max(
      minSize,
      Math.min(maxSize, minSize + ((value - minValue) / (maxValue - minValue)) * (maxSize - minSize))
    );
  };

  return (
    <div className="globe-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150 * zoom,
        }}
        width={800}
        height={500}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1c2e4a"
                stroke="#384c68"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#2a4065", outline: "none" },
                  pressed: { fill: "#1e3558", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {customers.map(({ id, name, coordinates, value }) => {
          const size = getMarkerSize(value) / zoom;
          return (
            <Marker key={id} coordinates={coordinates}>
              <g className="marker-3d">
                <circle r={size + 3} fill="#ff9100" opacity={0.2} className="pulse-circle" />
                <circle r={size + 1} fill="#ff9100" opacity={0.4} />
                <circle r={size} fill="#ff9100" fillOpacity={0.8} stroke="#fff" strokeWidth={0.5 / zoom} />
                <circle r={size / 2.5} fill="#fff" fillOpacity={0.9} />
                <text
                  textAnchor="middle"
                  y={-size - 6 / zoom}
                  style={{
                    fontFamily: "system-ui",
                    fontSize: `${8 / zoom}px`,
                    fontWeight: "bold",
                    fill: "#fff",
                    textShadow: "0px 0px 3px rgba(0,0,0,0.7)",
                    pointerEvents: "none",
                  }}
                >
                  {name}
                </text>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      <div className="globe-controls">
        <div className="control-row">
          <button onClick={() => setZoom((prev) => Math.max(prev - 0.2, 1))} className="control-button">
            −
          </button>
          <button onClick={() => setZoom((prev) => Math.min(prev + 0.2, 3))} className="control-button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Globe;