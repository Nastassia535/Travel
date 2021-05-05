const advert = document.querySelector('.advertisement');
setTimeout( ()=>
{
    advert.style.display = 'flex';
    advert.style.flexDirection = 'column';
    // advert.style.fontFamily = 'Lato';
} , 5000);

const block_for_close = document.querySelector('.block_for_close');
block_for_close.onclick = close;
function close()
{
    advert.style.display = 'none';
}

email.onblur = check_email;
submit1.onclick = clk_button;

function check_email(event)
{
    emailIsTrue = (/[\w\W](@gmail.com|@mail.ru)/).test(event.target.value);
    console.log(emailIsTrue);
    if(emailIsTrue)
    {
        email.classList.add('success');
        email.classList.remove('error');
    }  
    else
    {
        email.classList.add('error');
        email.classList.remove('success');
    }    
}

function clk_button(event)
{
    event.preventDefault();
    var radio = forma.register.value;
    if(emailIsTrue)
    {
        advert.style.display = 'none';
        alert('Введено успешно!');
    }
    else
        alert('Вы ввели неверный email');
}

