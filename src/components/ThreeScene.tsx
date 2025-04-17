
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  theme: 'light' | 'dark';
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  
  // Mouse position state refs
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 30;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create a geometry with particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const positionArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      // Position (x, y, z)
      positionArray[i * 3] = (Math.random() - 0.5) * 70;
      positionArray[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 70;
      
      // Scale
      scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Material with theme-based color
    const getParticleColor = (theme: 'light' | 'dark') => {
      return theme === 'dark' ? '#ffffff' : '#4d97ff';
    };

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      color: new THREE.Color(getParticleColor(theme)),
      transparent: true,
      opacity: 0.8,
    });
    
    // Mesh
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);
    
    // Theme change handler
    const handleThemeChange = (event: CustomEvent<{ theme: 'light' | 'dark' }>) => {
      if (particlesRef.current) {
        (particlesRef.current.material as THREE.PointsMaterial).color.set(
          getParticleColor(event.detail.theme)
        );
      }
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse movement effect
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX - windowHalfX) / 100;
      mouseY.current = (event.clientY - windowHalfY) / 100;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      targetX.current = mouseX.current * 0.1;
      targetY.current = mouseY.current * 0.1;
      
      if (particles) {
        particles.rotation.y += 0.002;
        particles.rotation.x += (targetY.current - particles.rotation.x) * 0.02;
        particles.rotation.y += (targetX.current - particles.rotation.y) * 0.02;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('themechange', handleThemeChange as EventListener);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up Three.js resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default ThreeScene;
