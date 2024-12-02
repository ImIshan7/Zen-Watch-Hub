import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    id?: string;
}

const Container: React.FC<ContainerProps> = ({
                                                 children,
                                                 className = '',
                                                 as: Component = 'div',
                                                 id
                                             }) => {
    return (
        <Component
            id={id}
            className={`w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </Component>
    );
};

export const AnimatedContainer: React.FC<ContainerProps & {
    animation?: 'fadeIn' | 'slideUp' | 'slideDown';
    delay?: number;
}> = ({
          children,
          className = '',
          as: Component = 'div',
          id,
          animation = 'fadeIn',
          delay = 0
      }) => {
    const animations = {
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5, delay }
        },
        slideUp: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay }
        },
        slideDown: {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay }
        }
    };

    return (
        <motion.div
            id={id}
            className={`w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
            {...animations[animation]}
        >
            {children}
        </motion.div>
    );
};

export default Container;