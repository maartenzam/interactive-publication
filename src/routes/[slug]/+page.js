import pages from '$lib/data/pages.json'

const done = 300

export async function load({ params }){
  const post = await import(`../../pages/${params.slug}.md`)
  const content = post.default

  const currentPage = pages.find(d => d.slug == params.slug)
  const id = currentPage.id
  const title = currentPage.title
  const t1 = currentPage.t1
  const m1 = currentPage.m1
  const t2 = currentPage.t2 ? currentPage.t2 : null
  const m2 = currentPage.m2 ? currentPage.m2 : null
  const metatags = currentPage.metatags ? currentPage.metatags.split(", ") : []
  
  const previousPage = pages.find(d => d.id == id - 1)
  const nextPage = pages.find(d => d.id == id + 1)
  const previous = id > 1 ? previousPage.slug : null
  const next = id < pages.length ? nextPage.slug : null
  const previousTitle = id > 1 ? previousPage.title : null
  const nextTitle = id < pages.length ? nextPage.title : null
  const nextID = id < done -1 ? nextPage.id : null

  return {
    content,
    title,
    id,
    t1,
    m1,
    t2,
    m2,
    metatags,
    previous,
    previousTitle,
    next,
    nextTitle,
    nextID
  }
}