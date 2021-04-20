module.exports = function (eleventyConfig) {

	eleventyConfig.setBrowserSyncConfig({ watch: true });

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			data: '_data'
		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'		
	};
};