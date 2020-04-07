//module.exports = {};

// const { createClient } = require('contentful');
// const config = require('./config.json');


// //Instantiate the app client
// const client = createClient({
//   space: config.space,
//   accessToken: config.accessToken
// });

module.exports = {
  exportTrailingSlash: true,
  // exportPathMap: async function () {
  //   // pages we know about beforehand
  //   const paths = {
  //     '/': { page: '/' }
  //   }

  //   const entries = await client.getEntries({
  //     content_type: "post",
  //     order: "-fields.publishDate"
  //   });
 
  //   entries.items && entries.items.map(post => {
  //     paths[`/post/${post.fields.slug}/${post.sys.id}`] = { page: '/post/[slug]/[contentful_id]', query: { contentful_id: post.sys.id, slug: post.fields.slug }}
  //   })

  //   return paths
  // }
}
