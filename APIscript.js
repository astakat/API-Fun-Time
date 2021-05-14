async function getPokemon() {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/mewtwo`;
  try {
    // Get info
    let res = await fetch(apiUrl).then((res) => res.json());
    console.log(res);
    // order usefull text and image info
    const { name, order } = res;
    window.picture = res;
    // Toevoegen van text; hoort bij "Poke-info"
    const addText = function () {
      document.getElementById("poke_name").textContent = name;
      document.getElementById("poke_order").textContent = order;
    };
    // Button shizzel
    const nameAndOrder = document.getElementById("poke-info");
    nameAndOrder.addEventListener("click", addText);
    // Toevoegen van image; hoort bij "Poke-button"
    const addImage = function () {
      const parentImage = document.getElementById("pokepic");
      parentImage.setAttribute(
        "src",
        picture.sprites.other["official-artwork"].front_default
      );
    };
    //  Button shizzel voor img
    const imageButton = document.getElementById("pokemon");
    imageButton.addEventListener("click", addImage);
  } catch {
    console.log("error");
  }
}
getPokemon();

// fetch("https://pokeapi.co/api/v2/pokemon/mewtwo") // doe request
//   .then((response) => response.json())
//   .then((data) => console.log("fetch data:", data))
//   .catch((err) => {
//     console.log(err);
//   });

// sprites.other.official-artwork.front_default
