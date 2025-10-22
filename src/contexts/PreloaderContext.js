'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PreloaderContext = createContext();

export const usePreloader = () => {
    const context = useContext(PreloaderContext);
    if (!context) {
        throw new Error('usePreloader must be used within a PreloaderProvider');
    }
    return context;
};

export const PreloaderProvider = ({ children }) => {
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
    const [isAOSReady, setIsAOSReady] = useState(false);

    const hidePreloader = () => {
        setIsPreloaderVisible(false);
        // AOS будет готов через 800ms после скрытия прелоадера
        setTimeout(() => {
            setIsAOSReady(true);
        }, 800);
    };

    return (
        <PreloaderContext.Provider value={{ 
            isPreloaderVisible, 
            hidePreloader, 
            isAOSReady 
        }}>
            {children}
        </PreloaderContext.Provider>
    );
};
