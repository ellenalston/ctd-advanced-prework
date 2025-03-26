# Art Gallery Viewer

## Overview
This project is a dynamic **Art Gallery Viewer** that fetches artwork data from the **Art Institute of Chicago API** and displays it in an interactive web interface. Users can browse a randomly selected set of artworks and click on individual pieces to view detailed information. The project consists of an **HTML document**, a **CSS stylesheet**, a **JavaScript file** that fetches data from a public API, and this **README file** providing instructions on setup and usage.

## Repository Structure
This project is hosted in a **public GitHub repository** with the following structure:
```
📁 project-root
 ├── 📄 index.html       # Main HTML page
 ├── 📄 styles.css       # CSS file for styling the gallery
 ├── 📄 scripts.js       # JavaScript file for API interaction and dynamic rendering
 ├── 📄 README.md        # Project documentation (this file)
```

## Technologies Used
- **HTML5** for structuring the webpage
- **CSS3** for styling the gallery and artwork details
- **JavaScript (ES6)** for fetching and handling API data
- **Art Institute of Chicago API** as the public data source

## Features
✅ **Fetch and display artwork data from a public API**  
✅ **Display at least 2 API endpoints**:
   - The **gallery page** fetches a list of artworks from the API.
   - The **details page** fetches specific information about an artwork when clicked.
✅ **Navigation between gallery and artwork details**
✅ **Issue new GET requests dynamically when navigating between pages**
✅ **Lazy loading of images for performance optimization**
✅ **Responsive design for mobile-friendly browsing**

## How It Works
1. When the user opens the webpage, the JavaScript file fetches a **random page** of artwork data from the API and displays images in a grid layout.
2. Clicking an image updates the URL with the corresponding artwork's ID and loads a **detailed view** of the selected piece, including the title, artist, date, and a description if provided.
3. A **back button** allows users to return to the gallery view.

## Setup and Running Instructions
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/art-gallery-viewer.git
   cd art-gallery-viewer
   ```
2. **Open `index.html` in a browser**:
   - Double-click `index.html` to open it in your default browser.
   - Or, if using a local server (recommended for API requests), run:
     ```sh
     npx http-server
     ```
3. **Interact with the gallery**:
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

## Responsive Design
- Uses **flexbox** for a dynamic gallery layout.
- **Media queries** adjust styles for smaller screens.
- **Lazy loading** optimizes image performance on slow networks.

## Future Improvements
🔹 Add filtering options (e.g., by artist, time period)  
🔹 Implement infinite scrolling for continuous browsing  
🔹 Enhance accessibility with ARIA attributes  

## License
This project is open-source and available under the MIT License.

