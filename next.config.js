/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/p/:id",
        has: [
          {
            type: "query",
            key: "by",
            value: "digiter",
          },
        ],
        destination: "/p/:id?by=Hey",
        permanent: false,
      },
      {
        source: "/u/:handle",
        has: [
          {
            type: "query",
            key: "by",
            value: "digiter",
          },
        ],
        destination: "/u/:handle?by=Hey",
        permanent: false,
      },
      {
        source: "/p/:id",
        has: [
          {
            type: "query",
            key: "by",
            value: "digitube",
          },
        ],
        destination: "/p/:id?by=tape",
        permanent: false,
      },
      {
        source: "/u/:handle",
        has: [
          {
            type: "query",
            key: "by",
            value: "digitube",
          },
        ],
        destination: "/u/:handle?by=tape",
        permanent: false,
      },
      {
        source: "/p/:id",
        has: [
          {
            type: "query",
            key: "by",
            value: "collectz",
          },
        ],
        destination: "/p/:id?by=orna.art",
        permanent: false,
      },
      {
        source: "/u/:handle",
        has: [
          {
            type: "query",
            key: "by",
            value: "collectz",
          },
        ],
        destination: "/u/:handle?by=orna.art",
        permanent: false,
      },
      // v1 to v2 handle redirect
      {
        source: "/u/:handle.digi",
        destination: "/u/digi/:handle",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
