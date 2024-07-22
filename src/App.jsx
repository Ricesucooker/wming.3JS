import React, { useRef, useState, Suspense} from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Projects, Contact } from './pages';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import Scene from './Scene';
import { PerspectiveCamera, Environment, ContactShadows,OrbitControls } from '@react-three/drei'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const App = () => {
  return (
    <main >
      <Router className="bg-slate-300/20">
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Projects' element={<Projects />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>   
    </Router>  
      <section className=' grid grid-flow-col gap-4 place-content-center'>
       <div>
          
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
  

     
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Scene />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
        </Canvas>
       


        </div>


    </section>
   </main>
  )
}

export default App

