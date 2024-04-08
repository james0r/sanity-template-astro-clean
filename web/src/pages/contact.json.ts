const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID
const datasetName = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET
const token = import.meta.env.SANITY_API_TOKEN

export const prerender = false

import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {

  console.log(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`)

  const data = await request.formData()
  const name = data.get("name")
  const email = data.get("email")
  const message = data.get("message")

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
        success: false
      }),
      { status: 400 }
    )
  }

  const mutations = [{
    createOrReplace: {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
  }]

  fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ mutations })
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))

  return new Response(
    JSON.stringify({
      message: "Success!",
      success: true
    }),
    { status: 200 }
  )
}