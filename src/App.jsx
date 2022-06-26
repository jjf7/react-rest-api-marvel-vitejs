import React, { useEffect, useState } from "react";
import axios from "axios";
import { params } from "./config";
import CharacterList from "./components/CharacterList";
import Nav from "./components/Nav";

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchQuery() {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters",
        {
          params: { ...params, offset: page },
        }
      );
      setCharacterList(response.data.data.results);
    }

    fetchQuery();
  }, [page]);

  return (
    <div className="text-dark py-5 bg-custom">
      <div className="container">
        <h1 className="text-center">MARVEL REST API</h1>
        <p className="text-center">By JfdeSousa</p>
        <Nav page={page} setPage={setPage} />
        <CharacterList characterList={characterList} />
        <Nav page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default App;
