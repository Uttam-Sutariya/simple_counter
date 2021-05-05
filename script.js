// accessing value & buttons
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
var count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        var style = e.currentTarget.classList;
        if(style.contains('decrease'))
            count--;
        else if(style.contains('increase'))
            count++;
        else
            count = 0;
        if(count > 0)
            value.style.color = "#238017";
        else if(count < 0)
            value.style.color = "#e91313";
        else
            value.style.color = "white";
            
        value.innerText = count;
    })
})