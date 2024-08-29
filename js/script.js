const divElement = document.querySelector('div'); // Replace 'div' with the ID or class of your actual div element

divElement.addEventListener('click', function() {
  window.location.href = 'https://www.soterasdev.com:8080'; // Replace 'https://www.example.com' with the URL of your desired page
});

// Define the word you want to search for
const searchTerm = 1;

// Fetch words that match the searchTerm from the API
fetch(`http://localhost:3000/api/words?word=${searchTerm}`)
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
      
      galeriaListDiv.appendChild(galeriaDiv);
    })
    .catch(error => console.error('Error fetching words:', error));


})