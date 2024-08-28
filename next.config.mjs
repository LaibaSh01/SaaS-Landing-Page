/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output to 'export' for static site export
  output: 'export',

  webpack(config) {
    // Find the existing rule for handling SVG files
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Add new rules for handling SVGs
    config.module.rules.push(
      // Apply the existing file loader rule for SVGs with ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other SVG imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to exclude SVGs
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Other configurations can go here
};

export default nextConfig;
