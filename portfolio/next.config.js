module.exports = {
    images: { domains: ["github-readme-stats.vercel.app"] },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};
