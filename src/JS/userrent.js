let div = document.querySelector(".list");

for (let i = 0; i < 3; i++) 
{
    for(let j = 0; j < 3; j++)
    {
        div.insertAdjacentHTML('afterbegin',
        `<div id = "movie"> 
            
        </div>`);
    }
}

