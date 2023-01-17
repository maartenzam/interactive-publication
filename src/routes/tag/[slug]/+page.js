import pages from '$lib/data/pages.js'

const slugify = str => {
  if(str){
    return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  }
  else {
    return ''
  }
}

const deslugify = str => str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ');

export async function load({ params }){
  const tagPages = pages.filter(d => 
    slugify(d.t1) == params.slug ||
    slugify(d.m1) == params.slug ||
    slugify(d.t2) == params.slug ||
    slugify(d.m2) == params.slug ||
    d.metatags.split(", ").map(d => slugify(d)).includes(params.slug)
    )
  const tag = deslugify(params.slug)
  return {
    tag,
    tagPages
  }
}