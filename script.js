    const timer = 0;
    const money = 0;
    const dishesPrepared = 0;

    let ingredients = ['chocolate', 'dough', 'sugar',
        'rice', 'fish', 'salt', 'water', 'cocoa powder',
        'coffee', 'bread', 'cheese', 'sausage', 'lettuce leaves',
        'carrots', 'butter', 'apple', 'snowflakes', 'ginger',' tea', 'cider'];

    let dishes = {
        'cookie' : 'Шоколадное печенье',
        'fishRice' : 'тарелку  рыбы с рисом',
        'cocoa' : 'стакан горячего какао',
        'coffee' : 'стакан горячего кофе',
        'water':  'стакан воды',
        'sandwich ': 'бутерброд',
        'saladCarrots':'салат с морковью',
        'pie' : 'кусочек пирога',
        'bowlOfSnowflakes' : 'миску снежинок',
        'gingerbread': 'имбирный пряник',
        'tea': 'чашку травяного чая',
        'cider': ' бокал игристого сидра'
    };

    let saladWithCarrots = ['Мне, пожалуйста, ', 'Мне ', 'Я ничего не хочу, но возьму ', 'Я с удовольствием съем ', 'Я возьму ', 'Я возьму только '];

    let namesOfTheBuyers = {
        1:{
            name : 'Эльф',
            url : 'путь',
            alt : 'character'
        },
        2:{
            name : 'Северный олень',
            url : 'путь',
            alt : 'character'
        },
        3:{
            name : 'Гринч',
            url : 'путь',
            alt : 'character'
        },
        4:{
            name : 'Снеговик Фрости',
            url : 'путь',
            alt : 'character'
        },
        5:{
            name : 'Просто олень',
            url : 'путь',
            alt : 'character'
        },
        6:{
            name : 'Незнокомец',
            url : 'путь',
            alt : 'character'
        }
    };
    function isCollide(...elements) {
        for (let i = 0; i < elements.length; i++) {
            for (let j = i + 1; j < elements.length; j++) {
                const rect1 = elements[i][0].getBoundingClientRect();
                const rect2 = elements[j][0].getBoundingClientRect();
    
                if (
                    !(rect1.top > rect2.bottom ||
                      rect1.bottom < rect2.top ||
                      rect1.left > rect2.right ||
                      rect1.right < rect2.left)
                ) {
                    return true; // Collision detected
                }
            }
        }
        return false; // No collisions
    }

$(document).ready(function() {
    
    $('.start-button').on('click', function() {
        startGame();
    });

    $('#exit-button').on('click', function() {
        exitGame();
    });

    function startGame() {
        $('.field-of-play').css('display', 'block');
        $('.start-window').css('display', 'none');
        $('.end-window').css('display', 'none');
        getDraggable()
        recipes()
    }

    function exitGame() {
        $('.end-window').css('display', 'block');
        $('.field-of-play').css('display', 'none');
    }

    function getDraggable() {
        $(".ingredient").draggable({ scroll: true });
    }

    function recipes() {
        if(isCollide($('.chocolate'), $('.dough'), $('.sugar'))) {
            alert('Тыбыдыщь! Хьюстон, у нас проблемы!');
            }
        
    }
    
});
