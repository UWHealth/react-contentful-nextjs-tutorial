import { useRouter } from 'next/router'
import React from 'react'
import  { createClient } from 'contentful'
import config from  '../../../config.json'


//Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

import Layout from '../../../components/Layout'
// import Hero from '../components/Hero'
import Container from '../../../components/Container'
import PageBody from '../../../components/PageBody'
// import TagList from '../components/TagList'
// import PostLinks from '../components/PostLinks'
import PostDetails from '../../../components/PostDetails'
// import SEO from '../components/SEO'


const PostSingle = ({ }) => {
  const router = useRouter()
  const { slug, contentful_id } = router.query

  return (
    <Layout>

      <Container>

        <PostDetails
          date={slug}
          timeToRead={contentful_id}
        />
        <PageBody body={`${contentful_id} ${slug}`} />
      </Container>

    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {

  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.publishDate",
    limit: 1000
  });

  const paths = entries.items.map(post => `/post/${post.fields.slug}/${post.sys.id}`)

  // Get the paths we want to pre-render based on posts
  // const paths = posts.map(post => `/posts/${post.id}`)


  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps() {

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //const res = await fetch(`https://.../posts/${params.id}`)
  //const post = await res.json()

  // Pass post data to the page via props
  return { props: {  } }
}

export default PostSingle