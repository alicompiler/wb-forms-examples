import {useEffect} from 'react';

export const useTailwindStylesheet = (isTailwind = true) => {
    useEffect(() => {
        if (!isTailwind) {
            return;
        }
        addTailwindStylesheet();
        return () => removeTailwindStylesheet();
    });
};

export const addTailwindStylesheet = () => {
    const tailwindLink = document.getElementById('tailwind-link');
    if (tailwindLink) {
        return;
    }

    const tailwindStylesheetLink = document.createElement('link');
    tailwindStylesheetLink.rel = 'stylesheet';
    tailwindStylesheetLink.href = '/tailwind.css';
    tailwindStylesheetLink.id = 'tailwind-link';
    document.head.appendChild(tailwindStylesheetLink);
};

export const removeTailwindStylesheet = () => {
    const tailwindLink = document.getElementById('tailwind-link');
    if (tailwindLink) {
        document.head.removeChild(tailwindLink);
    }
};
