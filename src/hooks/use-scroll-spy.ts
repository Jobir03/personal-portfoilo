import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 0) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset + 50; // Added small buffer

            // Find the candidate active section
            for (const id of ids) {
                const element = document.getElementById(id);
                if (!element) continue;

                const { offsetTop, offsetHeight } = element;

                // Check if the current scroll position is within the element's bounds
                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveId(id);
                    return; // Stop after finding the first match
                }
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ids, offset]);

    return activeId;
}
