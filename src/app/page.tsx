'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";

const Hyperspace = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#111' }}>
      <Stars fade={true} />
    </Canvas>
  );
};

export default function Home() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();

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
       <Hyperspace />
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

        <section ref={ref} className="mt-12">
            <motion.div
                className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>About Me</CardTitle>
                            <CardDescription>A brief introduction about myself.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>I am passionate about building high-quality software...</p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills</CardTitle>
                            <CardDescription>Technologies and tools I am proficient in.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>Kotlin</li>
                                <li>Android</li>
                                <li>Compose</li>
                                {/* Add more skills here */}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Experience</CardTitle>
                            <CardDescription>My professional journey and key roles.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Software Engineer at XYZ Corp...</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </section>
      </div>
    </div>
  );
}
