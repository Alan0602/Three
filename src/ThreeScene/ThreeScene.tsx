import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import saturn from '../assets/2k_earth_nightmap.jpg';



const ThreeScene: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;
    camera.position.y = 2;
    camera.zoom = 4.5;

    // Create a WebGLRenderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to the HTML element
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    // Load the texture
const textureLoader = new TextureLoader();
const texture = textureLoader.load(saturn,);

// Create a material with the texture


    // Create a cube
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
