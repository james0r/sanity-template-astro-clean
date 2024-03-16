import { sanityClient } from "sanity:client";
import groq from "groq";
export async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  );
}
export async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getSettings() {
  return await sanityClient.fetch(
    groq`*[_type == 'settings'][0] {
      "headerNavigationItems": header.headerNavigation->items[] {
        "title": title,
        "slug": select(internalLink != null => internalLink->slug.current),
        "url": select(externalLink != null => externalLink->url)
      }
    }`,
  );
}
