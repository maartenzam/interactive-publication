import pages from '$lib/data/pages.json'
import toc from '$lib/data/toc.json'
import { slugify } from '$lib/utils/slugs.js'

export async function load({ params }){
  // Find the title of the current slug in the TOC tree data, set title and breadcrumbs
  let title
  let crumbs

  if(toc.find(d => d.slug == params.slug)) {
    title = toc.find(d => d.slug == params.slug).title
    crumbs = {type: 'tag', t1: title, m1: null}
  }
  else {
    toc.forEach(t1 => {
      if(t1.children.find(d => d.slug == params.slug)){
        title = t1.children.find(d => d.slug == params.slug).title
        crumbs = {type: 'tag', t1: t1.title, m1: title}
      }
    })
  }

  let tagPages = pages.filter(d => 
    d.t1 == title ||
    d.m1 == title /*||
    d.t2 == title ||
    d.m2 == title*/
    )

  const metaTagPages = pages.filter(d => {
    if(d.metatags){
      return d.metatags.split(", ").map(d => slugify(d)).includes(params.slug)
    }
    else { return false}
  })
  tagPages = tagPages.concat(metaTagPages)
  
  return {
    title,
    tagPages,
    crumbs
  }
}