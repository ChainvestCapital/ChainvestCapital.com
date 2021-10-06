/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjekt = /* GraphQL */ `
  query GetProjekt($id: ID!) {
    getProjekt(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listProjekts = /* GraphQL */ `
  query ListProjekts(
    $filter: ModelProjektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjekts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
