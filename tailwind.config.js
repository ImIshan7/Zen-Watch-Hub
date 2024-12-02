/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    deepBlue: '#0A2540',
                    silver: '#C0C0C0',
                    gold: '#FFD700',
                },
                secondary: {
                    coolGray: '#E5E5E5',
                    charcoal: '#2B2B2B',
                },
                accent: {
                    crimson: '#D72638',
                    teal: '#008080',
                },
                neutral: {
                    DEFAULT: '#1A1A1A',
                    50: '#FFFFFF',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#1A1A1A',
                },
            },
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            spacing: {
                '18': '4.5rem',
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
            },
            fontSize: {
                'xxs': '0.625rem',
                'tiny': '0.75rem',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            animation: {
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'slide-left': 'slideLeft 0.5s ease-out',
                'slide-right': 'slideRight 0.5s ease-out',
                'scale-up': 'scaleUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(-100px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                slideRight: {
                    '0%': { transform: 'translateX(100px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                scaleUp: {
                    '0%': { transform: 'scale(0.8)', opacity: 0 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
                'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(192, 192, 192, 0.1) 50%, transparent 75%)',
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                },
                '.text-shadow-lg': {
                    textShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
                '.glass-effect': {
                    backgroundColor: 'rgba(10, 37, 64, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(192, 192, 192, 0.1)',
                },
                '.glass-effect-light': {
                    backgroundColor: 'rgba(229, 229, 229, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};