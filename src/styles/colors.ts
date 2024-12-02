export const colors = {
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
        white: '#FFFFFF',
        black: '#1A1A1A',
    },
} as const;

export type ColorKey = keyof typeof colors;