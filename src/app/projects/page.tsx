'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

// Mock project data (replace with your actual data)
const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of Project 1. This project focuses on...very important future of earth",
        technologies: ["React", "Tailwind CSS", "Firebase"],
        imageUrl: "https://picsum.photos/400/225",
        projectLink: "#",
        repoLink: "#"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of Project 2. This project explores...",
        technologies: ["Kotlin", "Android", "Spring Boot"],
        imageUrl: "https://picsum.photos/400/225",
        projectLink: "#",
        repoLink: "#"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of Project 3.  A longer description to test the layout.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL"],
        imageUrl: "https://picsum.photos/400/225",
        projectLink: "#",
        repoLink: "#"
    },
    {
        id: 4,
        title: "Project 4",
        description: "Description of Project 4.",
        technologies: ["Python", "Django", "Vue.js"],
        imageUrl: "https://picsum.photos/400/225",
        projectLink: "#",
        repoLink: "#"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Description of Project 5. This project aims to...",
        technologies: ["Node.js", "Express", "MongoDB"],
        imageUrl: "https://picsum.photos/400/225",
        projectLink: "#",
        repoLink: "#"
    },
];

const ProjectsPage = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <ScrollArea className="h-[600px] w-full rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {projectsData.map((project) => (
                        <Card key={project.id} className="bg-[#e0e0e0] text-card-foreground shadow-sm">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <CardDescription className="text-sm text-muted-foreground mb-4">
                                    {project.description}
                                </CardDescription>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="rounded-md mb-4"
                                    width={400}
                                    height={225}
                                />
                               
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default ProjectsPage;
