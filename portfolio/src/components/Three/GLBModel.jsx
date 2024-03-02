import { useEffect, useRef } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const { camera, scene } = useThree();
  const mixer = useRef();
  console.log(gltf.scene);

  useEffect(() => {
    // Configuración inicial de la cámara y la luz
    camera.position.set(0.3, 1.7, 1);
    camera.lookAt(0, 1.6, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    let pointLight = new THREE.PointLight(0x00cc8f, 25);
    pointLight.position.set(-1, 2, -1);
    scene.add(pointLight);

    pointLight = new THREE.PointLight(0xffffff, 5);
    pointLight.position.set(1, 2, 1);
    scene.add(pointLight);

    // Crear y configurar el mixer de animación
    mixer.current = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.current.clipAction(clip);
      action.play();
    });

    // Limpiar al desmontar
    return () => {
      mixer.current?.stopAllAction();
    };
  }, [camera, scene, gltf]);

  const radius = 7;
  const lookAtPosition = new THREE.Vector3(0, 1.6, 0);

  useFrame((state, delta) => {
    mixer.current?.update(delta);

    const time = state.clock.getElapsedTime();
    const velocity = 0.2
    const angleXZRange = Math.PI / 8;
    const angleYRange = Math.PI / 24;
    const angleXZ = Math.sin(time * velocity) * angleXZRange;
    const angleY = Math.sin(time * velocity) * angleYRange;
    camera.position.x = Math.sin(angleXZ) * radius / 10;
    camera.position.z = Math.cos(angleXZ) * radius / 10;
    camera.position.y = 1.7 + Math.sin(angleY) * radius / 13;

    camera.lookAt(lookAtPosition);
  });

  return <primitive object={gltf.scene} />;
};

const GLBModel = ({ url }) => {
  return (
    <Canvas style={{ position: "relative", width: "30rem", height: "30rem" }}>
      <Model url={url} />
    </Canvas>
  );
};

export default GLBModel;
