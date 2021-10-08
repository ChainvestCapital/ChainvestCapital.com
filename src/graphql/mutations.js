/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjekt = /* GraphQL */ `
  mutation CreateProjekt(
    $input: CreateProjektInput!
    $condition: ModelProjektConditionInput
  ) {
    createProjekt(input: $input, condition: $condition) {
      id
      name
      Kategorie
      Finanzierungsvolumen
      ErwRendite
      Mindestinvestition
      Typ
      Behoerde
      TitleLink
      LogoLink
      KategorieBildLink
      createdAt
      updatedAt
    }
  }
`;
export const updateProjekt = /* GraphQL */ `
  mutation UpdateProjekt(
    $input: UpdateProjektInput!
    $condition: ModelProjektConditionInput
  ) {
    updateProjekt(input: $input, condition: $condition) {
      id
      name
      Kategorie
      Finanzierungsvolumen
      ErwRendite
      Mindestinvestition
      Typ
      Behoerde
      TitleLink
      LogoLink
      KategorieBildLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjekt = /* GraphQL */ `
  mutation DeleteProjekt(
    $input: DeleteProjektInput!
    $condition: ModelProjektConditionInput
  ) {
    deleteProjekt(input: $input, condition: $condition) {
      id
      name
      Kategorie
      Finanzierungsvolumen
      ErwRendite
      Mindestinvestition
      Typ
      Behoerde
      TitleLink
      LogoLink
      KategorieBildLink
      createdAt
      updatedAt
    }
  }
`;
