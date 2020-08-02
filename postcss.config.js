module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/*.js", "./src/*.jsx", "./public/index.html"],
      defaultExtractor: (content) =>
        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    }),
  ],
};
