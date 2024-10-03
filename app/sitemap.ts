import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://humana-services.ch',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://humana-services.ch/a-propos',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://humana-services.ch/contact',
            lastModified: new Date(),
            priority: 0.8,
        }
    ]

}