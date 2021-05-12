
(()=>
{
    let text = $('.header_intro_title > h1'); // Элемент в который будет записывать текст 
    let blink = $('.text-icon');    // Анимированный курсор
    let newText = "Discover Amazing places in Japan";   // Текст который будет печататься
    const MAX_LENGTH = 64;          // Максимальная длинна строки с учетом ширины 'header'
    let timeUpdate = 1500000;          // Общее время цикла
    let timeWrite = 200;            // Время печатания одного символа(скорость)
    if(newText.length > MAX_LENGTH)
        newText = newText.slice(MAX_LENGTH);
    if(timeUpdate < timeWrite * newText.length)
        timeUpdate = timeWrite * newText.length + 3000;

    setTimeout(()=>
    {
        cleanAndWriteText(newText); 
        setInterval( ()=> cleanAndWriteText(newText) , timeUpdate);
    } , 500);

    function cleanAndWriteText(newText)
    {
        $(blink).removeClass('icon-anim');
        $(text).text(' ');
        let letter = 0;
        let interval = setInterval(()=>
        {
            $(text).text( $(text).text() + newText[letter] );
            letter++;
            if(letter === newText.length) 
            {
                $(blink).addClass('icon-anim');
                clearInterval(interval);
            }
        } , timeWrite);
    }
})();

// benefits_card

let doIt = false;
let steps = $('.benefits_card');
steps.hide();
$(window).on('scroll' , function(e){
    if( $(window).scrollTop() > 300 )
        if(!doIt)
        {
            doIt = true;
            let time = 200;
            $(steps).each( function(index , element) {
                time += 350;
                $(element).slideDown(time);
            });
        }
});

// tours_cards

(()=>
{
    let DontShow = true;
    let DontShowOpacity = true;
    let DontShowSlide = true;
    // (нужны для одноразовости действия)

    $(window).on('scroll' , ()=>
    {
        let scroll_y = $(window).scrollTop();  

        if (scroll_y > 50)
            $('.header').addClass('header_active');
        else 
            $('.header').removeClass('header_active');
        
        if(scroll_y > 1500 && DontShow)
        {
            DontShow = false;
            let time = 1500;
            $('.left').show(0 , function()
            {
                $(this).animate({
                    right: 0
                } , time)
            })
            $('.right').show(0 , function()
            {
                $(this).animate({
                    left: 0
                } , time)
            })
        }

        if(scroll_y > 2000 && DontShowOpacity)
        {
            DontShowOpacity = false;
            $('.opacity-left').fadeIn(1500);
            $('.opacity-right').fadeIn(1500);
        }

        if(scroll_y > 2500 && DontShowSlide)
        {
            DontShowSlide = false;
            $('.slide-left').slideDown(1000);
            $('.slide-right').slideDown(1000);
        }
    })
})();

