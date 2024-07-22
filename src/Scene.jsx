import React, { useRef, useState, useEffect } from 'react'
import { Environment, useGLTF, ContactShadows, OrbitControls  } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/



   
export function Scene(props) {
    const myRoom = useRef ()

  const { nodes, materials } = useGLTF('/Bedroom.glb')
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Floor.geometry} material={materials.floor} />
      <mesh
        geometry={nodes.Floor_Planks.geometry}
        material={materials.floor}
        position={[-0.857, 0.038, 0]}
        scale={[1, 1, 0.992]}
      />
      <group position={[0, 0.81, 0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Wall Dark']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Wall light']} />
      </group>
      <group position={[0.033, 0.81, 0]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials['Wall Dark']} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.White} />
      </group>
      <mesh
        geometry={nodes.Carpet.geometry}
        material={materials['Wall Dark']}
        position={[-0.304, 0.038, 0.241]}
        scale={[0.11, 0.11, 0.215]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.White}
        position={[0, -0.403, 0]}
        scale={7.192}
      />
      <mesh
        geometry={nodes.Bedside_cupboard.geometry}
        material={materials.White}
        position={[-0.591, 0.035, -0.344]}
        scale={[0.169, 0.257, 0.169]}
      />
      <mesh
        geometry={nodes.Bedside_cupboard_legs.geometry}
        material={materials['light wood']}
        position={[-0.591, 0.012, -0.344]}
        scale={[0.169, 0.257, 0.169]}
      />
      <mesh
        geometry={nodes.Handles.geometry}
        material={materials['light wood']}
        position={[-0.591, 0.152, -0.087]}
        scale={0.021}
      />
      <group position={[-0.591, 0.426, -0.344]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['light wood']} />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials['light blue']} />
      </group>
      <mesh
        geometry={nodes.Bed_middle.geometry}
        material={materials['light wood']}
        position={[0, 0.234, 0.019]}
        scale={[0.853, 1, 0.974]}
      />
      <mesh
        geometry={nodes.Bed_poles_left.geometry}
        material={materials['dark wood']}
        position={[-0.152, 0.028, 0.627]}
        scale={[0.057, 0.044, 0.044]}
      />
      <mesh
        geometry={nodes.Bed_poles_right.geometry}
        material={materials['dark wood']}
        position={[0.676, 0.028, 0.633]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.057, 0.044, 0.044]}
      />
      <mesh
        geometry={nodes.Head_board.geometry}
        material={materials['light wood']}
        position={[0, 0.365, 0]}
        scale={[0.853, 1, 1]}
      />
      <mesh
        geometry={nodes.Matress.geometry}
        material={materials.White}
        position={[0, 0.313, 0.037]}
      />
      <mesh geometry={nodes.Blanket.geometry} material={materials['light blue']} />
      <mesh
        geometry={nodes.Pillow.geometry}
        material={materials.White}
        position={[0.154, 0.383, -0.382]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.454, -0.901, -0.134]}
      />
      <mesh
        geometry={nodes.Cactus.geometry}
        material={materials['light wood']}
        position={[0.293, 1.109, -0.661]}
        scale={0.046}>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials.cactus}
          position={[-0.027, 2.069, 0.108]}
          scale={[1.474, 2.658, 1.474]}
        />
      </mesh>
      <group position={[0.936, 0.768, 0.136]} scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['red book']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.123, 1.13, -0.687]}
        rotation={[0, -0.314, 0]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials['yellow book']} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.627, 1.178, -0.687]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.813, 2.037, 1.218]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['book pink']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.552, 1.176, -0.687]}
        rotation={[Math.PI / 2, 0.296, -Math.PI / 2]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['red book']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.512, 1.176, -0.687]}
        rotation={[Math.PI / 2, 0.296, -Math.PI / 2]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['blue book']} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.472, 1.175, -0.687]}
        rotation={[Math.PI / 2, 0.296, -Math.PI / 2]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube009.geometry} material={materials['yellow book']} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.433, 1.176, -0.687]}
        rotation={[Math.PI / 2, 0.296, -Math.PI / 2]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials['yellow book']} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.White} />
      </group>
      <group
        position={[-0.393, 1.175, -0.687]}
        rotation={[Math.PI / 2, 0.296, -Math.PI / 2]}
        scale={[1.813, 1.218, 1.218]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['yellow book']} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.White} />
      </group>
      <mesh
        geometry={nodes.Shelf.geometry}
        material={materials.White}
        position={[0.936, 0.693, 0.136]}
        scale={[1.813, 1.218, 1.218]}
      />
    </group>
  )
}


export default Scene