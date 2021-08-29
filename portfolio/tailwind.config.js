module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                azure: "#3a86ff",
                fopal: "#DB5A42",
                indigod: "#133C55",
                pyblue: "#306998",
                rustorange: "#f74c00",
                tsblue: "#007acc",
                pyyel: "#E5C07B",
                oneblue: "#61AFEF",
                oneblack: "#282C34",
                onered: "#E06C75",
                onegreen: "#98C389",
                oneyellow: "#E5C07B",
                onemagenta: "#C678DD",
                onecyan: "#56B6C2",
                onegrey: "#ABB2BF",
                contrastgrey: "#30343c",
                onelblack: "#b6bdca"
            },
        },
    },
    variants: {
        extend: {
            fill: ["hover", "focus"],
        },
    },
    plugins: [],
};
