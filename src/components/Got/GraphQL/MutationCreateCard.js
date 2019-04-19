import gql from "graphql-tag";

export default gql(`
mutation($image: String $name: String $house: String $actor: String $status: String $weapon: String $pet: String $spouse: String $spousestatus: String $age: Int $birthplace: String $bestfriend: String $quote: String $nickname: String $allegiance: String) {
  CreateCharacterInput(
    image: $image
    name: $name
    house: $house
    actor: $actor
    status: $status
    weapon: $weapon
    pet: $pet
    spouse: $spouse
    spousestatus: $spousestatus
    age: $age
    birthplace: $birthplace
    bestfriend: $bestfriend
    quote: $quote
    nickname: $nickname
    allegiance: $allegiance
  ) {
    image
    name
    house
    actor
    status
    weapon
    pet
    spouse
    spousestatus
    age
    birthplace
    bestfriend
    quote
    nickname
    allegiance
  }
}`);
