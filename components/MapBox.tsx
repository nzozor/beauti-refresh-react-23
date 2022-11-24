import Link from "next/link";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

(mapboxgl as any).accessToken =
  "pk.eyJ1IjoiZWxzYWJlbiIsImEiOiJjanZ4b2ZndDQwNnB5M3pyejNrZWQwaGVwIn0.T8MZoM6PJVvNkME819rAkw";

function HeaderNav() {
  const mapContainer = useRef(null);
  const map: any = useRef(null);
  const [lng, setLng] = useState(-0.11218034371890166);
  const [lat, setLat] = useState(51.47867898345809);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: "mapbox://styles/elsaben/ck2mfzocf0e271co95fjg4wry",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <section>
      <h3>Find Us</h3>
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </section>
  );
}

export default HeaderNav;
