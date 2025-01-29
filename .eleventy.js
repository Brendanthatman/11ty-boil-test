
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  //eleventyConfig.addPassthroughCopy("**/*.png"); take any png we put in the repo and move it to _site after running the npx command 
};