// Function to fetch Pokémon data
function getPokemonInfo(pokemonName) {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const pokemonInfo = {
          name: data.name,
          weight: data.weight,
          abilities: data.abilities.map((ability) => ({
            ability: { name: ability.ability.name, url: ability.ability.url },
            is_hidden: ability.is_hidden,
            slot: ability.slot,
          })),
        };
        resolve(pokemonInfo);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Favorite Pokémon
const favoritePokemon = "squirtle"; // Change this to your favorite Pokémon

// Calling the API and printing Pokémon information
getPokemonInfo(favoritePokemon)
  .then((pokemon) => {
    console.log(`Name:\n${pokemon.name}\n`);
    console.log(`Height:\n${pokemon.weight}\n`);
    console.log("Abilities:");
    console.log(JSON.stringify(pokemon.abilities, null, 4));
  })
  .catch((error) => {
    console.error("Error fetching Pokémon data:", error);
  });
