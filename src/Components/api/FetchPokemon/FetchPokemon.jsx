import React, { useState, useEffect } from "react";

function FetchPokemon() {
  //Current é o estado inicial que carrega a API
  //O NEXT e o PREV usam o link interno da API pra mudar a pagina
  const [pokemons, setPokemons] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(currentUrl);
      const data = await response.json();
//Atualiza os valores "dinamicamente" atravez dos botoes NEXT e PREV
      setPokemons(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    }

    fetchPokemonData();
  }, [currentUrl]); 

  return (

    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Lista de Pokémons
      </h1>

      <div className="grid grid-cols-4 gap-6 ">
        {pokemons.map((poke, index) => {

          // o ID pega dinamicamente o numero da url da API:
          // EXEMPLO:
          // name: "bulbasaur",
          // url: "https://pokeapi.co/api/v2/pokemon/1/"

          const id = poke.url.split("/").filter(Boolean).pop();
          return (
            <div
              key={poke.name}
              className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md"
            >
              <img
              // Aqui é onde o ID é usado pra carregar a imagem dinamicamente
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={poke.name}
                className="w-20 h-20"
              />
              <p className="text-lg capitalize mt-2 w-30 ">{poke.name}</p>
            </div>
          );
        })}
      </div>

      {/* Botoes de NEXT e PREV */}
      <div className="flex gap-4 mt-6">
        {prevUrl && (
          <button
            onClick={() => setCurrentUrl(prevUrl)}
            className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            PREV
          </button>
        )}
        {nextUrl && (
          <button
            onClick={() => setCurrentUrl(nextUrl)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            NEXST
          </button>
        )}
      </div>
    </div>
  );
}

export default FetchPokemon;
