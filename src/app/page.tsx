'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion";
import { Icons } from '@/components/icons';
import SocialFeed from '@/components/social-feed';

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
                            <p>I am Ashu, a passionate Kotlin specialist focusing on Android, Multiplatform (Compose), and backend development using Ktor and Spring Boot. I strive to build high-quality, performant, and user-friendly applications.</p>
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
                                <li><Icons.circle className="mr-2 inline-block" /> Kotlin</li>
                                <li><Icons.circle className="mr-2 inline-block" /> Android</li>
                                <li><Icons.circle className="mr-2 inline-block" /> Compose Multiplatform</li>
                                <li><Icons.circle className="mr-2 inline-block" /> Ktor</li>
                                <li><Icons.circle className="mr-2 inline-block" /> Spring Boot</li>
                                <li><Icons.circle className="mr-2 inline-block" /> Firebase</li>
                                
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
                            <p>Currently, I work as a Software Engineer. My responsibilities include developing and maintaining Android applications, creating cross-platform solutions using Compose Multiplatform, and building backend services with Ktor and Spring Boot.</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </section>

        <section className="mt-12">
            <SocialFeed
                youtubeChannelId="UC_x5XG1OV2P6uZZ5FSM9Ttw"
                twitterUsername="elonmusk"
                linkedinUserId="dummy-linkedin-user-id"
                maxResults={3}
            />
        </section>
      </div>
    </div>
  );
}

