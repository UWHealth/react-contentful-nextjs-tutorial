import { createClient } from "contentful";
import config from "../config.json";
// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

export async function getAllPosts() {
  // Call an external API endpoint to get posts.
  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.publishDate"
  });

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return { entries }
}
