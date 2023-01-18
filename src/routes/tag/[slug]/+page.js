import pages from '$lib/data/pages.json'

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
  
  return {
    tag,
    tagPages
  }
}