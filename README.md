# Art Gallery Viewer

## Overview
This project is a dynamic **Art Gallery Viewer** that fetches artwork data from the **Art Institute of Chicago API** and displays it in an interactive web page. Users can browse a randomly selected set of artworks and click on individual pieces of artwork to view detailed information.

## Technologies Used
- **HTML** for structuring the webpage
- **CSS** for styling the gallery and artwork details
- **JavaScript** for fetching and handling API data
- **Art Institute of Chicago API** as the public data source

## Features
✅ **Fetch and display artwork data from a public API** 

✅ **Display at least 2 API endpoints**:
   - The **gallery page** fetches a list of artworks from the API.
   - The **details page** fetches specific information about an artwork when clicked.

✅ **Navigation between gallery and artwork details**

✅ **Lazy loading of images for performance optimization**

✅ **Responsive design for mobile-friendly browsing**


## How It Works
1. When the user opens the webpage, it fetches a **random page** of artwork data from the API and displays images in a grid layout.
2. Clicking an image updates the URL with the corresponding artwork's ID and loads a **detailed view** of the selected piece, including the title, artist, date, and a description if provided.
3. A **back button** allows users to return to the gallery view.

## Setup and Running Instructions
1. **Clone the repository**:
   ```sh
   git clone https://github.com/ellenalston/ctd-advanced-prework.git
   cd ctd-advanced-prework
   ```
2. **Open `index.html` in a browser**
3.      
4. **Interact with the gallery**:
   - Browse through the displayed artworks.
   - Click on an artwork to view details.
   - Use the "Back to Gallery" button to return to the main view.

## API Endpoints Used
- **Gallery View**: Fetches a list of artworks
  ```
  https://api.artic.edu/api/v1/artworks?page={randomPage}&limit=100
  ```
- **Artwork Details**: Fetches data for a specific artwork
  ```
  https://api.artic.edu/api/v1/artworks/{artworkId}
  ```
