module.exports = function (eleventyConfig) {
  

  // Pass-through files and folders
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Customize the output folder and input folder
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};