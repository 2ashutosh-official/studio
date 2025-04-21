'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from '@react-three/drei';
import { useCursor } from '@/hooks/use-cursor';

const Hyperspace = () => {
    return (
        <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade={true}
        />
    );
};

export default function Home() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();
    useCursor();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isIntersecting, controls]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Hyperspace />
        </Canvas>
      <div className="container relative z-10 p-4">
        <section className="text-center">
          <motion.h1
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ashu's Universe
          </motion.h1>
          <motion.p
            className="text-lg text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Kotlin Specialist | Android, Multiplatform, Backend
          </motion.p>
          <Button variant="outline">Start Journey</Button>
        </section>
      </div>
    </div>
  );
}
