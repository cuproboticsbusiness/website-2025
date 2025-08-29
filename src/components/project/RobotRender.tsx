"use client";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { cn } from "@/lib/utils";
import {
  Scene,
  DirectionalLight,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";
import TargetSelect from "../TargetSelect";

const lightIntensity = 1.75;
const directions = [
  [100, 70, 0],
  [-100, 70, 0],
  [70, 100, 0],
  [70, -100, 0],
  [0, 70, 100],
  [0, 70, -100],
];

type RobotRenderProp = {
  name: string;
  render: string;
  cameraPos?: number[];
  className?: string;
};
const RobotRender = ({
  name,
  render,
  cameraPos,
  className,
}: RobotRenderProp) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new Scene();
    directions.forEach(([x, y, z]) => {
      const light = new DirectionalLight(0xeeeeee, lightIntensity);
      light.position.set(x, y, z);
      scene.add(light);
    });

    const camera = new PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    if (cameraPos) {
      camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
    } else camera.position.set(200, 50, 25);

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    // controls.addEventListener("change", () => console.log(camera.position));

    const loadingDiv = document.createElement("div");
    loadingDiv.innerText = `Loading ${name}...`;
    loadingDiv.style.position = "absolute";
    loadingDiv.style.top = "50%";
    loadingDiv.style.left = "50%";
    loadingDiv.style.transform = "translate(-50%, -50%)";
    loadingDiv.style.color = "#aaa";
    loadingDiv.style.fontSize = "1.25rem";

    const loader = new GLTFLoader();
    loader.load(
      render,
      (gltf) => {
        scene.add(gltf.scene);
        if (container.contains(loadingDiv)) container.removeChild(loadingDiv);
        else container.appendChild(renderer.domElement);
      },
      () => container.appendChild(loadingDiv),
      (error) => console.error("Error loading glTF:", error)
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [cameraPos]);

  return (
    <TargetSelect>
      <div
        ref={containerRef}
        id="robot-render"
        className={cn("w-full h-[50vh]", className)}
      />
    </TargetSelect>
  );
};

export default RobotRender;
