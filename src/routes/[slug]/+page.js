export async function load({ params }){
  const post = await import(`../../pages/${params.slug}.md`)
  const { title, id } = post.metadata
  const content = post.default

  return {
    content,
    title,
    id,
  }
}