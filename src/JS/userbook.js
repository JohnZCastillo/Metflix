let div = document.querySelector(".list");

fetch('../JS/data.json')
    .then(response => response.json())
    .then(data => 
    {
        data.forEach(movie => 
        {
            const { Number, Name, Description, ImagePath } = movie;

            div.insertAdjacentHTML('afterbegin',
            `<div id = "movie" style = "background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${ImagePath});"> 
                <div class = "moviedetails">
                    <h3 class = "moviename">${Name}</h3>
                    <p class = "moviedescription">${Description}</p>
                    <button class = "moviebook">Book</button>
                </div>
            </div>`);
        });
    })

let button = document.querySelector('#button');

button.addEventListener('click', function(event)
{
    window.location.href = "../User/book1.html";
});