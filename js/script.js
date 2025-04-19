const divElement = document.querySelector('div'); // Replace 'div' with the ID or class of your actual div element

divElement

// Define the word you want to search for
const searchTerm = 1;

// Fetch words that match the searchTerm from the API
fetch(`https://portfolio.soterasdev.com/projects/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Assuming you have a div with id 'wordList' where you want to populate the words
    const galeriaListDiv = document.getElementById('grandeParte');

    // Clear existing content (if any)
    galeriaListDiv.innerHTML = '';

    // Iterate through the data array and create div elements for each word
    data.forEach(item => {
      const title = document.createElement('h2');
      const content = document.createElement('p');
      const img = document.createElement('img');
      const info = document.createElement('div');
      const galeriaDiv = document.createElement('div');
    
      title.className = 'subtitulo';
      content.className = 'conteudo';
      img.className = 'imgdiv';
      info.className = "info";
      galeriaDiv.className = "galeria";
      

      title.textContent = item.title;
      content.textContent = item.content;
      img.src = item.imgname;
      info.appendChild(title)
      info.appendChild(content)
      galeriaDiv.appendChild(img)
      galeriaDiv.appendChild(info)
      galeriaDiv.onclick = function () {
        window.location.href = item.link;
      };
      galeriaDiv.addEventListener('click', function() {
        window.location.href = item.link; // Replace 'https://www.example.com' with the URL of your desired page
      });
      galeriaListDiv.appendChild(galeriaDiv);
    })
    .catch(error => console.error('Error fetching words:', error));


})
