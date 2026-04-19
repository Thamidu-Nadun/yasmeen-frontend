/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c3d66',
                },
                accent: {
                    50: '#f7f2ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                dark: '#1f2937',
                light: '#f9fafb',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
                'gradient-hover': 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
            },
            boxShadow: {
                'sm-lg': '0 4px 6px rgba(0, 0, 0, 0.07)',
                'md-lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
                'lg-lg': '0 12px 24px rgba(0, 0, 0, 0.12)',
                'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
                'glow-accent': '0 0 20px rgba(139, 92, 246, 0.3)',
            },
            fontFamily: {
                'google-sans': ['"googleSansRegular"', 'sans-serif'],
                'google-sans-bold': ['"googleSansBold"', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '.5' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            transitionDuration: {
                '250': '250ms',
                '350': '350ms',
            },
        },
    },
    plugins: [],
};
