import gql from "graphql-tag";

export default gql(`
mutation($id: ID!) {
  deleteCharacterTable(input: {id: $id}) {
    id
		name
		house
		actor
		status
  }
}`);