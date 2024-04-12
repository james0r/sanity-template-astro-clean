import type { APIRoute } from 'astro'
import queryString from 'query-string'
import { getPaginatedPostsByTerms } from '@/utils/sanity'

export const prerender = false

export const GET: APIRoute = async ({ params, request }) => {

  const queryParams = queryString.parse(request.url.split('?')[1])

  if (!queryParams.s) {
    return new Response(JSON.stringify({
      error: 'No query provided'
    }), {
      status: 400
    })
  }

  const results = await getPaginatedPostsByTerms(queryParams.s as string)
  
  return new Response(JSON.stringify({
    results: results
  }), {
    headers: {
      'content-type': 'application/json'
    },
    status: 200
  })
}