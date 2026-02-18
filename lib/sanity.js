/**
 * Sanity CMS Configuration
 *
 * Pre-configured stub for a future Sanity integration.
 * When ready to connect:
 *
 * 1. Install dependencies:
 *    npm install next-sanity @sanity/image-url
 *
 * 2. Create a Sanity project at https://sanity.io/manage
 *
 * 3. Add environment variables to .env.local:
 *    NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
 *    NEXT_PUBLIC_SANITY_DATASET=production
 *
 * 4. Uncomment the client and helper exports below
 *
 * 5. Update lib/content.js — swap static returns with fetchSanity() GROQ queries
 *
 * 6. Uncomment the Sanity image URL resolution in components/SanityImage.js
 *
 * 7. Uncomment images.remotePatterns in next.config.mjs
 */

const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

export default sanityConfig;

// ── Uncomment everything below when next-sanity is installed ──

// import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
//
// export const client = createClient(sanityConfig);
//
// const builder = imageUrlBuilder(client);
//
// export function urlForImage(source) {
//   return builder.image(source);
// }
//
// export async function fetchSanity(query, params = {}) {
//   return client.fetch(query, params);
// }
