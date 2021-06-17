module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                azure: "#3a86ff",
                fopal: "#DB5A42",
                indigod: "#133C55",
                pyblue: "#306998",
                rustorange: "#f74c00",
                tsblue: "#007acc",
                pyyel: "#FFD43B"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
