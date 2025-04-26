'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from '@react-three/drei';
import { useCursor } from '@/hooks/use-cursor';
import { useRouter } from 'next/navigation';

const Hyperspace = () => {
    return (
        <>
            {/* Add ambient light so stars are visible */}
            <ambientLight intensity={0.5} />
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0.5} // Increased saturation to make stars more visible
                fade={true}
            />
        </>
    );
};

export default function Home() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();
    const router = useRouter();
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

    const handleStartJourney = () => {
        router.push('/projects'); // Navigate to projects page
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
            {/* Make canvas fill the entire screen and adjust z-index */}
            <Canvas 
                className="absolute inset-0"
                camera={{ position: [0, 0, 1] }}
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    zIndex: 0 
                }}
            >
                <Hyperspace />
            </Canvas>
            
            <div className="container relative z-10 p-4">
                <section ref={ref} className="text-center">
                    <motion.h1
                        className="text-4xl font-bold text-white mb-4" // Changed to white for better visibility on dark background
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Ashutosh Pattanaik
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-200 mb-8" // Changed to light gray for better visibility
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Kotlin Specialist | Android, Multiplatform, Backend
                    </motion.p>
                    <Button 
                        variant="outline" 
                        className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all"
                        onClick={handleStartJourney}
                    >
                        Start Journey
                    </Button>
                </section>
            </div>
        </div>
    );
}

