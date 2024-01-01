import { React, useState } from "react";
import "./api_call_style.css";
const ApiCall = () => {
  const [respons, setResponse] = useState([]);

  return (
    <>
      <div className="row">
        <div className="text-center">
          <button
            onClick={() => {}}
            className="btn btn-primary text-center"
          >
            call Api
          </button>
        </div>
      </div>
      <div className="api-call text-center m-3 p-3">
        <div className="">
          <header className="post-header">
            <h2>the last moon</h2>
            <p className="">author : date :</p>
          </header>
          <img
            className="image"
            src="https://apod.nasa.gov/apod/image/2312/2023_12_27-fullmoon1024.jpg"
            alt="moon"
          />
          <p>
            Known to some in the northern hemisphere as December's Cold Moon or
            the Long Night Moon, the last full moon of 2023 is rising in this
            surreal mountain and skyscape. The Daliesque scene was captured in a
            single exposure with a camera and long telephoto lens near Monte
            Grappa, Italy. The full moon is not melting, though. Its stretched
            and distorted appearance near the horizon is caused as refraction
            along the line of sight changes and creates shifting images or
            mirages of the bright lunar disk. The changes in atmospheric
            refraction correspond to atmospheric layers with sharply different
            temperatures and densities. Other effects of atmospheric refraction
            produced by the long sight-line to this full moon rising include the
            thin red rim seen faintly on the distorted lower edge of the Moon
            and a thin green rim along the top.
          </p>
          <button className="btn btn-primary">HD picture</button>
        </div>
      </div>
    </>
  );
};

// handleCallApi = () => {};

export default ApiCall;