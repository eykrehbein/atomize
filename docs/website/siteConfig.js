/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: "Atomize", // Title for your website.
    tagline: "Boost your React workflow",
    url: "https://github.com/atomizeorg/atomize", // Your website URL
    baseUrl: "/", // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: "atomize",
    organizationName: "atomizeorg",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: "overview", label: "Docs" },
        { href: "https://github.com/atomizeorg/atomize", label: "GitHub" },
    ],

    /* path to images for header/footer */
    headerIcon: "img/atomize_logo.png",
    footerIcon: "img/atomize_logo.png",
    favicon: "img/favicon.ico",

    /* Colors for website */
    colors: {
        primaryColor: "#24292e",
        secondaryColor: "#61DAFB",
    },

    /* Custom fonts for website */
    fonts: {
        defaultFont: ["Rubik", "-apple-system", "system-ui"],
        codeFont: ["Source Code Pro"],
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Eyk Rehbein`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: "dracula",
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ["https://buttons.github.io/buttons.js"],

    stylesheets: [
        "https://fonts.googleapis.com/css?family=Rubik:400,500,700",
        "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap",
    ],

    // On page navigation for the current documentation page.
    onPageNav: "separate",
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    // docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    repoUrl: "https://github.com/atomizeorg/atomize",
};

module.exports = siteConfig;
