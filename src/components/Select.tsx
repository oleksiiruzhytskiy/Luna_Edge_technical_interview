import { useState, useEffect } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  sprite: string;
}

export const Select = ({ onSelect }: { onSelect: (pokemon: Pokemon[]) => void }) => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selected, setSelected] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(res => {
        setPokemonList(res.data.results.map((p: any) => ({
          name: p.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split("/")[6]}.png`
        })));
      });
  }, []);

  const addPokemon = (p: Pokemon) => {
    if (selected.length >= 4) {
      setError("You can only select 4 Pokémon.");
      return;
    }
    if (selected.some(s => s.name === p.name)) {
      setError("This Pokémon is already selected.");
      return;
    }
    setSelected([...selected, p]);
    onSelect([...selected, p]);
    setError("");
  };

  return (
    <div className="p-4">
      <input 
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2"
      />
      <div className="mt-2">
        {pokemonList
          .filter(p => p.name.includes(search.toLowerCase()))
          .slice(0, 10)
          .map((p) => (
            <button 
              key={p.name} 
              onClick={() => addPokemon(p)}
              className="flex items-center gap-2 p-2 border rounded w-full text-left"
            >
              <img src={p.sprite} alt={p.name} className="w-8 h-8" />
              {p.name}
            </button>
          ))
        }
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <p>Selected Pokémon: {selected.map(p => p.name).join(", ")}</p>
    </div>
  );
};