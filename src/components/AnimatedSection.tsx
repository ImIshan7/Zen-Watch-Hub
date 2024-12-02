import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-up';
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                             children,
                                                             className = '',
                                                             animation = 'slide-up',
                                                             delay = 0,
                                                         }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;