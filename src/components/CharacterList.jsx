import React from "react";
import Character from "./Character";

const CharacterList = ({ characterList }) => {
  return (
    <div className="row">
      {characterList.map((character) => {
        return <Character character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
