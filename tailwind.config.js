/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /^(col-start|col-end|row-start|row-end)-([1-9]|1[0-3])$/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        }
    ],
    plugins: [],
};