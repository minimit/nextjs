export default class ContentfulApi {
  /* Call the Contentful GraphQL API using fetch. */
  static async callContentful(query, variables = {}) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }

  /* Get assets */
  static async getAssets() {
    const query = `query {
      assets: assetCollection {
        items {
          title
          url
        }
      }
    }`;

    const response = await this.callContentful(query);
    const assets = response.data
    return assets;
  }
}