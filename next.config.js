/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["res.cloudinary.com"], 
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'dog.ceo.com',
        //       port: '',
        //       pathname: '/dog.ceo/**',
        //     },
        //   ],
    }
    
}

module.exports = nextConfig
