const dice = document.querySelector('#dice');
const platform = document.querySelector('#platform');
const result = document.querySelector('#result');

function dado(){

    platform.classList.remove('stop');
    platform.classList.add('playing');

    setTimeout(function(){

        platform.classList.remove('playing');
        platform.classList.add('stop');

        let number = Math.floor(Math.random() * 6) + 1;
        let x = 0, y = 20, z = -20;

        switch(number){
            case 1:
            x = 0; y = 20; z = -20;
            break;
            case 2:
            x = -100; y = -150; z = 10;
            break;
            case 3:
            x = 0; y = -100; z = -10;
            break;
            case 4:
            x = 0; y = 100; z = -10;
            break;
            case 5:
            x = 80; y = 120; z = -10;
            break;
            case 6:
            x = 0; y = 200; x = 10;
            break;
        }
      
        dice.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)';
        
        platform.style.transform = 'translate3d(0,0, 0px)'
        ;
        
        result.innerHTML = number;
      
    }, 1120);
}

dice.addEventListener('click', () => {
    dado();
});

