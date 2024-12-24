import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollToElement = () => {
    const navigate = useNavigate();

    const scrollToElement = useCallback((elementId, path = '/') => {
        const handleScroll = () => {
            const element = document.getElementById(elementId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100); // Extra delay voor betrouwbare scroll
            }
        };

        if (window.location.pathname === path) {
            handleScroll();
        } else {
            navigate(path);
            // Langere wachttijd voor navigatie + render
            setTimeout(handleScroll, 300);
        }
    }, [navigate]);

    return scrollToElement;
};

export default useScrollToElement; 