require(`dotenv`).config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        siteTitle: `Andy`,
        siteTitleAlt: `Andy - Gatsby Starter Portfolio`,
        siteHeadline: `Andy - Gatsby Theme from @lekoarts`,
        siteUrl: `https://foxwerk.de`,
        siteDescription: `Wunderbare Dinge`,
        siteLanguage: `de`,
        siteImage: `/banner.jpg`,
        author: `@tiptronic`
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-cara`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `YDNA - @lekoarts/gatsby-theme-cara`,
                short_name: `Cara`,
                description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
    ],
};
