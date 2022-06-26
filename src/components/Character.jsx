import React from "react";

const Character = ({ character }) => {
  return (
    <div className="col-md-3 text-center p-4">
      <h3>{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <small>{character?.description}</small>
    </div>
  );
};

export default Character;
