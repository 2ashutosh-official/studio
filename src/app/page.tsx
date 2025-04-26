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
            <ambientLight intensity={0.5} />
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0.5}
                fade={true}
            />
        </>
    );
};

export default function Home() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const controls = useAnimation();
    const router = useRouter();
    useCursor();

    // Navigation pages
    const navPages = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Social", path: "/social" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ];

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
        router.push(navPages[1].path); // Navigate to projects page by default
    };

    const handleNavigation = (index) => {
        setActiveIndex(index);
        router.push(navPages[index].path);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
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
            
            <div className="container relative z-10 p-4 flex flex-col items-center">
                <section ref={ref} className="text-center mb-16">
                    <motion.h1
                        className="text-4xl font-bold text-white mb-4"
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
                        className="text-lg text-gray-200 mb-8"
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
                        className="bg-transparent text-white
                         border-white hover:bg-white hover:text-black 
                         transition-all relative overflow-hidden group"
                        onClick={handleStartJourney}
                    >
                         <span className="relative z-10">Start Journey</span>
                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500 
                         via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                       
                    </Button>
                </section>
                
                {/* Navigation Indicator Bar */}
                <motion.div 
                    className="flex space-x-6 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {navPages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigation(index)}
                            className="relative group flex flex-col items-center"
                            aria-label={page.name}
                        >
                            <div 
                                className={`h-1 w-6 rounded-full transition-all duration-300 ${
                                    activeIndex === index ? 'bg-purple-500' : 'bg-gray-600'
                                }`}
                            />
                            <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-purple-400">
                                {page.name}
                            </span>
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}