'use client';
import { useEffect } from 'react';

export const useCursor = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const addHoverEffect = () => {
            cursor.classList.add('hovering');
        };

        const removeHoverEffect = () => {
            cursor.classList.remove('hovering');
        };

        document.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseover', addHoverEffect);
            el.addEventListener('mouseout', removeHoverEffect);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseover', addHoverEffect);
                el.removeEventListener('mouseout', removeHoverEffect);
            });
            document.body.removeChild(cursor);
        };
    }, []);
};
