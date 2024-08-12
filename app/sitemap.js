export default async function sitemap(){

    return[{
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/#home`,
        // changefreq: 'daily',
        // priority: 1.0
    },{
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/#services`,
        // changefreq: 'weekly',
        // priority: 0.8
    },{
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/#ContactUs`,
        // changefreq: 'daily',
        // priority: 0.7
    }]
}