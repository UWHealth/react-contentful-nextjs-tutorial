export const useSiteMetadata = () => {
  const { site } = {
      "site": {
        "siteMetadata": {
          "title": "UW Health Marketing Tech Dev",
          "description": "You are the future, and the future has not happened yet.",
          "siteUrl": "https://www.uwhealth.dev",
          "image": "/images/share.jpg",
          "menuLinks": [
            {
              "name": "Home",
              "slug": "/"
            },
            {
              "name": "About",
              "slug": "/about/"
            },
            {
              "name": "Contact",
              "slug": "/contact/"
            }
          ]
        }
      }
  }
  return site.siteMetadata
}







