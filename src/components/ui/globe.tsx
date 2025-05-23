"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../../data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}
 
extend({ ThreeGlobe: ThreeGlobe });
 
const RING_PROPAGATION_SPEED = 3;
const aspect = 1;
const cameraZ = 450;
 
type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};
 
export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};
 
interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}
 
let numbersOfRings = [0];
 
export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>();
  const [isInitialized, setIsInitialized] = useState(false);
 
  const defaultProps = {
    pointSize: 1.5,
    atmosphereColor: "#1e90ff",
    showAtmosphere: true,
    atmosphereAltitude: 0.07,
    polygonColor: "rgba(200,220,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#220033",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 1500,
    arcLength: 0.8,
    rings: 2,
    maxRings: 3,
    ...globeConfig,
  };
 
  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current as any).add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);
 
  // Build material when globe is initialized or when relevant props change
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
 
    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);
 
  // Build data when globe is initialized or when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;
 
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }
 
    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"],
          ),
        ) === i,
    );
 
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);
 
    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => (e as { arcAlt: number }).arcAlt * 1)
      .arcStroke(() => [0.35, 0.3, 0.4][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 0.5)
      .arcDashGap(10)
      .arcDashAnimateTime(() => defaultProps.arcTime);
 
    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);
 
    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      );
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);
 
  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;
 
    const interval = setInterval(() => {
      if (!globeRef.current) return;
 
      const newNumbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.min(6, Math.floor(data.length / 3)),
      );
 
      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));
 
      globeRef.current.ringsData(ringsData);
    }, 1500);
 
    return () => {
      clearInterval(interval);
    };
  }, [isInitialized, data]);
 
  return <group ref={groupRef} />;
}
 
export function WebGLRendererConfig() {
  const { gl, size } = useThree();
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gl.setPixelRatio(window.devicePixelRatio);
      gl.setSize(size.width, size.height, false);
      gl.setClearColor(0x000000, 0);
    }
  }, [gl, size]);
 
  return null;
}
 
export function World(props: WorldProps) {
  return (
    <Canvas camera={{ position: [0, 0, cameraZ], near: 1, far: 2000, fov: 45 }}>
      <ambientLight color={props.globeConfig.ambientLight || "#ffffff"} intensity={0.2} />
      <WebGLRendererConfig />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={200}
        maxDistance={500}
        autoRotate={props.globeConfig.autoRotate}
        autoRotateSpeed={props.globeConfig.autoRotateSpeed || 0.3}
        enableRotate={true}
      />
      <directionalLight
        position={[-400, 100, 400]}
        color={props.globeConfig.directionalLeftLight || "#ffffff"}
        intensity={0.2}
      />
      <directionalLight
        position={[-200, 500, 200]}
        color={props.globeConfig.directionalTopLight || "#ffffff"}
        intensity={0.2}
      />
      <pointLight
        position={[200, 400, 200]}
        color={props.globeConfig.pointLight || "#ffffff"}
        intensity={0.2}
      />
      <Globe {...props} />
    </Canvas>
  );
}
 
export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
 
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
 
export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
} 