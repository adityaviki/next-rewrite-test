/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/us/:path*",
				destination: "https://us.davidoffgeneva.com/:path*",
			},
		];
	},
};

export default nextConfig;
