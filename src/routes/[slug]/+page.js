import pages from '$lib/data/pages.js'

export async function load({ params }){
  const post = await import(`../../pages/${params.slug}.md`)
  const { title, id } = post.metadata
  const content = post.default

  const previous = id > 1 ? pages.find(d => d.id == id - 1).slug : null
  const next = id < pages.length ? pages.find(d => d.id == id + 1).slug : null

  return {
    content,
    title,
    id,
    previous,
    next
  }
}