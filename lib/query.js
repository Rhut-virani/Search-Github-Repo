import { gql } from '@apollo/client';

export const searchRepoQuery = (search) => {
  return gql`
query {
  search(first: 1, type: USER, query: "${search}") {
        edges {
          cursor
          node {
            ... on User {
              id
              bio
              avatarUrl
              name
              email
              url
              repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
                totalCount
                nodes {
                  id
                  name
                  createdAt
                  description
                  forkCount
                  stargazerCount
                  isPrivate
                  url
                  languages(first: 1) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
              followers {
                totalCount
              }
              websiteUrl
              location
            }
          }
        }
      }
    }
`;
};
