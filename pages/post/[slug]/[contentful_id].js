import { useRouter } from 'next/router'
import React from 'react'
import  { createClient } from 'contentful'

var marked = require('marked');
marked.setOptions({
  smartLists: true,
  smartypants: true
});
const client = createClient({
  space: process.env.space,
  accessToken: process.env.accessToken
});

import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Hero from '../../../components/Hero'
import TagList from '../../../components/TagList'
import PostDetails from '../../../components/PostDetails'
import PageBody from '../../../components/PageBody'
import PostLinks from '../../../components/PostLinks'
// import SEO from '../components/SEO'


const PostSingle = ({ current, previous, next }) => {
  const router = useRouter()
  const isFallback = router.isFallback
  const fields = current.fields

  return (
    <Layout>
      
      <Hero title={fields.title} image={fields.heroImage} height={'50vh'} />
      <Container>
        {fields.tags && <TagList tags={fields.tags} />}
        <PostDetails date={fields.publishDate} />
        <PageBody body={marked(fields.body)} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  console.time('client.getEntries: post')
  
  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.publishDate",
    limit: 1000
  });
  console.timeEnd('client.getEntries: post')
  // Get the paths we want to pre-render based on posts
  //const paths = entries.items.map(post => `/post/${post.fields.slug}/${post.sys.id}`)
  const paths = entries.items.map(post => ({ params: { slug: post.fields.slug, contentful_id: post.sys.id }}))


  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
// This also gets called at build time
export async function getStaticProps({params}) {

  // const entries = await client.getEntries({
  //   content_type: "post",
  //   order: "-fields.publishDate",
  //   limit: 1000
  // });

  const { contentful_id } = params
  //console.time(`getEntry: ${contentful_id}`)
  const current = await client.getEntry(contentful_id)
  //console.timeEnd(`getEntry: ${contentful_id}`)
  // find location of currect selection
  // let current = entries.items.find(current => current.sys.id == contentful_id)
  // let currentIndex = entries.items.indexOf(current)
  // const total = entries.items.length

  let previous = null //currentIndex <= total - 1 && currentIndex > 0 ? entries.items[currentIndex - 1] : null
  let next = null //currentIndex < total -1 && currentIndex >= 0 ? entries.items[currentIndex + 1] : null

  //const post = await client.getEntry(contentful_id)
  //console.log(`currentIndex:${currentIndex}, total:${total} `);

  return { props: { current, previous, next } }
}

export default PostSingle