import pages from '$lib/data/pages.json'
import { slugify, deslugify } from '$lib/utils/slugs.js'

export async function load({ params }){
  let tagPages = pages.filter(d => 
    slugify(d.t1) == params.slug ||
    slugify(d.m1) == params.slug ||
    slugify(d.t2) == params.slug ||
    slugify(d.m2) == params.slug
    )
  const metaTagPages = pages.filter(d => {
    if(d.metatags){
      return d.metatags.split(", ").map(d => slugify(d)).includes(params.slug)
    }
    else { return false}
  })
  tagPages = tagPages.concat(metaTagPages)

  const tag = deslugify(params.slug)

  let crumbs
  if([...new Set(pages.map(d => d.m1))].map(d => slugify(d)).includes(params.slug)){
    crumbs = {type: 'tag', t1: pages.find(d => d.m1 == deslugify(params.slug)).t1, m1: deslugify(params.slug)}
  }
  if([...new Set(pages.map(d => d.t1))].map(d => d).includes(deslugify(params.slug))){
    crumbs = {type: 'tag', t1: deslugify(params.slug), m1: null}
  }
  
  return {
    tag,
    tagPages,
    crumbs
  }
}