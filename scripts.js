document.addEventListener("DOMContentLoaded", () => {
  // Check if the URL has an artwork ID
  const params = new URLSearchParams(window.location.search);
  const artworkId = params.get("id");

  if (artworkId) {
    // Show details view
    showArtworkDetails(artworkId);
  } else {
    // Show gallery view
    getGalleryData();
  }
});

// Fetch and display the gallery
async function getGalleryData() {
  const randomPage = Math.floor(Math.random() * 10) + 1;
  const url = `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=100`;
  const iiifBaseUrl = "https://www.artic.edu/iiif/2/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    displayArtworks(json.data, iiifBaseUrl);

  } catch (error) {
    console.error(error.message);
  }
}

// Renders the gallery with only images
function displayArtworks(artworks, iiifBaseUrl) {

  const container = document.getElementById("art-container");
  container.textContent = ""; // Clear previous content

  artworks.forEach(artwork => {
    if (artwork.image_id == null) return; // Skip artworks without an image

    // Image URL
    const imageUrl = `${iiifBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`;

    // Image Element
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = artwork.title;
    img.classList.add("art-image");
    img.loading = "lazy";

    // Clicking an image updates the URL
    img.addEventListener("click", () => {
      window.location.search = `id=${artwork.id}`;
    });

    // Append image to container
    container.appendChild(img);
  });
}

// Fetch and display details of a specific artwork
async function showArtworkDetails(artworkId) {
  const url = `https://api.artic.edu/api/v1/artworks/${artworkId}`;
  const iiifBaseUrl = "https://www.artic.edu/iiif/2/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const artwork = json.data;
    displayArtworkDetails(artwork, iiifBaseUrl);
  } catch (error) {
    console.error(error.message);
    document.getElementById("art-details").innerHTML = "<p>Error loading artwork details.</p>";
  }
}

// Renders artwork details, including the image
function displayArtworkDetails(artwork, iiifBaseUrl) {
  document.getElementById("gallery-view").style.display = "none";
  document.getElementById("details-view").style.display = "block";

  const container = document.getElementById("art-details");
  container.textContent = ""; // Clear previous content

  // Create title element
  const title = document.createElement("h1");
  title.textContent = artwork.title;

  // Create artist element
  const artist = document.createElement("p");
  artist.innerHTML = `<strong>Artist:</strong> ${artwork.artist_title || "Unknown"}`;

  // Create date element
  const date = document.createElement("p");
  date.innerHTML = `<strong>Date:</strong> ${artwork.date_display || "N/A"}`;

  // Create description element
  const description = document.createElement("p");
  description.textContent = artwork.short_description || "No description available.";

  // Append elements
  container.appendChild(title);
  container.appendChild(artist);
  container.appendChild(date);
  container.appendChild(description);

  // Construct image URL
  if (artwork.image_id) {
    const imageUrl = `${iiifBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`;
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = artwork.title;
    img.classList.add("art-detail-image");
    container.appendChild(img);
  }

  // Add event listener to back button
  document.getElementById("back-button").addEventListener("click", () => {
    window.location.search = ""; // Remove the ID from the URL to go back to gallery
  });
}
