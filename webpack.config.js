const HubSpotAutoUploadPlugin = require("@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ account, autoupload }) => ({
    entry: "./src/index.js",
    output: {
        filename: "assets/js/main.js",
        clean: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ["@babel/preset-env"],
            //         },
            //     },
            // },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
        ],
    },
    // optimization: {
    //     minimizer: [
    //         new OptimizeCssAssetsWebpackPlugin(),
    //         new TerserWebpackPlugin(),
    //     ],
    // },
    plugins: [
        new HubSpotAutoUploadPlugin({
            account,
            autoupload,
            src: "dist",
            dest: "v-theme",
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { from: "src/theme.json", to: "theme.json" },
                // { from: "src/fields.json", to: "fields.json" },
                { from: "src/css", to: "css" },
                { from: "src/js", to: "js" },
                { from: "src/modules", to: "modules" },
                { from: "src/templates", to: "templates" },
                { from: "src/layouts", to: "layouts" },
                { from: "src/partials", to: "partials" },
                { from: "src/sections", to: "sections" },
                { from: "src/images", to: "images" },

            ],
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css",
        }),
    ],
});
