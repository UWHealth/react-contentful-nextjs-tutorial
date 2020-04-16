import React from "react";
import Head from "next/head"

import Layout from '../components/Layout'
import Container from '../components/Container'
import CardList from '../components/CardList'
import Card from '../components/Card'
import SEO from '../components/SEO'
import { createClient } from "contentful"

{/* <SEO
  title={title}
  description={
    metaDescription
    ? metaDescription.internal.content
    : body.childMarkdownRemark.excerpt
  }
/> */}

//const contentfulService = new ContentfulService();

//Instantiate the app client
const client = createClient({
  space: process.env.space,
  accessToken: process.env.accessToken
});

// Our Homepage component, will receive props from contentful entries thanks to getInitialProps function below.
function HomePage({ entries }) {
  //const { humanPageNumber, basePath } = pageContext
  const isFirstPage = 1
  let featuredPost
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
      </Head>
      <SEO
        title='Woo!'
        description='There are no words to describe.'
      />
      <Container>
        {isFirstPage ? (
          <CardList>
            <Card {...entries.items[0].fields} featured contentful_id={entries.items[0].sys.id} />
            {entries.items && entries.items.slice(1).map(post => (
              <Card {...post.fields} key={post.sys.id} contentful_id={post.sys.id} />
            ))}
          </CardList>
        ) : (
            <CardList>
              {entries.items && entries.items.map(post => <Card {...post.fields} key={post.sys.id} contentful_id={post.sys.id} />)}
            </CardList>
          )}

      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  //const word = await contentfulServ.meth()
  //console.log(word)
  //console.time(`get index entries`)
  //const entries = await contentfulService.getAllPosts()
  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.publishDate",
    limit: 50
  })
  //console.timeEnd(`get index entries`)
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      entries,
    },
  }
}

// That's the default export (the page)
export default HomePage;
