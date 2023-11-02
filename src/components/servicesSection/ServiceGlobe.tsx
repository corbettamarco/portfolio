
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function ServiceGlobe() {
  const canvasRef = useRef({} as HTMLCanvasElement);

  useEffect(() => {
    let phi = 4;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 200 * 2,
      height:200 * 2,
      phi: 3.30,
      theta: 0.32,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 2, 3],
      markers: [
        // latitude longitude
        { location: [45.7091375, 9.3089085], size: 0.06 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    
      <canvas
        ref={canvasRef}
        style={{ width:200, height:200, maxWidth: "100%", aspectRatio: 1}}
      />

  );
}
