const link = $("#theme-link");
const normalTheme = "styles/greyTheme.css";
const darkTheme = "styles/darkTheme.css";
const colorTheme = "styles/colorTheme.css";


$(function() 
{
    const Theme = localStorage.getItem('theme');
    if(Theme == 'dark')
        link.attr("href", darkTheme);
    else if (Theme == 'normal')
        link.attr("href", normalTheme)
    else 
        link.attr("href", colorTheme)
    });


$('#theme-icon').on("click", toggleTheme );

// вешаем на кнопку обработчик и переключаем цвета
function toggleTheme ()
{
    let currentTheme = link.attr('href');
    let theme = '';

    
    if (currentTheme == normalTheme)
    {
        link.attr('href', darkTheme);
        theme = 'dark'
    }
    else if (currentTheme == darkTheme)
    {
        link.attr('href', colorTheme);
        theme = 'color'
    }
    else 
    {
        link.attr('href', normalTheme);
        theme = 'normal'
    }
    localStorage.setItem('theme', theme)
}

// сохраняем текущую тему