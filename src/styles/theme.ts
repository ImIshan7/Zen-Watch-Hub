import { colors } from './colors';

export const theme = {
    fonts: {
        heading: '"Playfair Display", serif',
        body: '"Inter", sans-serif',
    },
    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    },
    gradients: {
        primary: `linear-gradient(to right, ${colors.primary.deepBlue}, ${colors.accent.teal})`,
        gold: `linear-gradient(to right, ${colors.primary.gold}, ${colors.primary.silver})`,
        dark: `linear-gradient(to bottom, ${colors.neutral.black}, ${colors.primary.deepBlue})`,
    },
    transitions: {
        fast: '150ms ease-in-out',
        medium: '300ms ease-in-out',
        slow: '500ms ease-in-out',
    },
} as const;

export type Theme = typeof theme;