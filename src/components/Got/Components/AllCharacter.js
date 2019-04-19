import React, { Component } from "react";
import "./card.css";

import Card from "./Card";
import NewCard from "./NewCard";

import { graphql, compose, withApollo } from "react-apollo";
import QueryAllCharacters from "../GraphQL/QueryAllCharacters";
import MutationCreateCard from "../GraphQL/MutationCreateCard";

class AllCharacters extends Component {

  render() {
    return (
      <div>
        <header className="got-header">
          <p>GAME OF THRONES PLAYING CARDS</p>
          <p className="got-subheader">Click on a card to see the back!</p>
        </header>
        
        <NewCard />
        <div className="card-container">
          {this.props.cards.map((card, i) => (
            <Card 
                key={i}
                id={card.id}
                image={card.image}
                name={card.name}
                house={card.house}
                actor={card.actor}
                status={card.status}
                weapon={card.weapon}
                pet={card.pet}
                spouse={card.spouse}
                spousestatus={card.spousestatus}
                age={card.age}
                birthplace={card.birthplace}
                bestfriend={card.bestfriend}
                quote={card.quote}
                nickname={card.nickname}
                allegiance={card.allegiance}
                />
          ))}
        </div>
      </div>
    );
  }
}

export default withApollo(
  compose(
    graphql(
      MutationCreateCard, {

      }
    ),
    graphql(QueryAllCharacters, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: ({ data: { listCharacters = { items: [] } } }) => ({
        cards: listCharacters.items
      })
    })
  )(AllCharacters)
);
