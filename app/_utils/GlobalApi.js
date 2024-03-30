const { gql, request } = require("graphql-request");

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

const getAllCourseList = async () => {
  const query = gql`
  query MyQuery {
    courseLists(first: 10, orderBy: createdAt_DESC) {
      name
      id
      free
      description
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      totalChapters
      sourceCode
      tag
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
};

export default { getAllCourseList };
