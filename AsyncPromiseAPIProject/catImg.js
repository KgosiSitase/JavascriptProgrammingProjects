async function fetchRandomCatGif() {
  fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error("Failed to fetch cat GIF"));
      }
      return response.url; // Extracting the URL from the response
    })
    .then((imageURL) => {
      console.log(imageURL); // Outputting the URL
    })
    .catch((error) => {
      console.error("Error fetching cat GIF:", error.message);
    });
}

// Call the function to fetch and output a random cat GIF URL
fetchRandomCatGif();
