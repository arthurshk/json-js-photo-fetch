window.addEventListener('DOMContentLoaded', function() {
    let photosContainer = document.getElementById('photos');

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(photo) {
                let photoElement = document.createElement('div');
                photoElement.className = 'photo';
                let imgElement = document.createElement('img');
                imgElement.src = photo.thumbnailUrl;
                imgElement.alt = photo.title;
                photoElement.appendChild(imgElement);
                photosContainer.appendChild(photoElement);
            });
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
});
