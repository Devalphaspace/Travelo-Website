/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.postimg.cc", "res.cloudinary.com" , 'ik.imagekit.io', 'images.pexels.com'], // Add the hostname of the image source here
  },
};

module.exports = nextConfig;
