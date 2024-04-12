import { sanityClient } from "sanity:client";
import groq from "groq";

const sanityAuthClient = sanityClient.withConfig(
  {
    token: import.meta.env.SANITY_API_TOKEN,
    useCdn: false
  }
)

const postFields = `
   _id,
   _type,
   _createdAt,
   title,
   "slug": slug.current,
   body,
   excerpt,
   featuredImage
`

export async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
      ${postFields}
    }`,
  );
}

export async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ${postFields}
    }`,
    {
      slug,
    },
  );
}

export async function getPages() {
  return await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getPage(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getDraft(draftId) {
  return await sanityAuthClient.fetch(
    groq`*[_id == $draftId][0]`,
    {
      draftId,
    }
  );
}

export async function getSettings() {
  return await sanityClient.fetch(
    groq`*[_type == 'settings'][0] {
      _type,
      seo,
      footer {
        copyrightLineText
      },
      header {
        headerNavigation->{
          title,
          "navId": navId.current,
          "links": links[] {
            ...,
            "reference": reference->{
              _type,
              title,
              "slug": slug.current
            }
          }
        }
      }
    }`,
  );
}

export async function getPaginatedPostsByTerms(terms, page = 1, pageSize = 2) {
  const offset = (page - 1) * pageSize;
  const end = page * pageSize;

  return await sanityClient.fetch(
    groq`*[_type in ["post"] && defined(slug.current) && (title match $terms || body[].children[].text match $terms || excerpt match $terms)] | order(_createdAt desc)[$offset...$end] {
      ${postFields}
    }`,
    {
      terms,
      offset,
      end,
    },
  );
}

export async function getPaginatedPosts(page = 1, pageSize = 2) {
  const offset = (page - 1) * pageSize;
  const end = page * pageSize;

  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)[$offset...$end] {
      ${postFields}
    }`,
    {
      offset,
      end,
    },
  );
}
