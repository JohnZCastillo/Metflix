let count = 0;

let ticketvalue = document.querySelector('#ticketvalue').value;

function buttonClick(order) 
{
    if(order == 1)
    {
        count += 1 
    }
    else if(order == 0 && count == 0)
    {
        count += 0;
    }
    else if(order == 1.1 )
    {
        count[1] += (-1)
    }
    ticketvalue = count;
}