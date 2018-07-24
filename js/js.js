//global variables
let old_card = [];
let new_card = [];
let clicked_num = 0,
    cardNum = 0,
    matchCount = 0;

// list of cards
let cards = ['heart',
             'heart',
             'bicycle',
             'bicycle',
             'motorcycle',
             'motorcycle',
             'stethoscope',
             'stethoscope',
             'fighter-jet',
             'fighter-jet',
             'camera-retro',
             'camera-retro',
             'arrow-circle-left',
             'arrow-circle-left',
             'arrow-circle-right',
             'arrow-circle-right'];

// shuffle function:- take array of cards an return the same array with randum order.
function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;
};

cards = shuffle(cards);

// distribute cards in .cardsBox.
cards.forEach(function(card){
    $('.cardsBox').append('<div class="flip '+cardNum+'"><span class="front"></span><span class="back"><i class="fa fa-'+card+' fa-fw fa-3x" aria-hidden="true"></i></span></div>');
    cardNum++;
});

// change auto trigger to manual.
$(".flip").flip({trigger: 'manual'});

// allow each card to flip when cliced.
var clickedObject;
$('.flip').click(function(){
    if(($(this).attr('class'))!==clickedObject){
        clickedObject = $(this).attr('class');
        clicked_num++;
        $('.counter').text('CLICKED NO. : '+clicked_num);
        $(this).flip(true);
        if(!(clicked_num % 2)){
            new_card = [ $(this).find('i').attr('class'),
                         $(this).attr('class').split(' ')[1]
                       ]
        }else{
            old_card = [ $(this).find('i').attr('class'),
                         $(this).attr('class').split(' ')[1]
                       ]
        }
        if(!(clicked_num % 2)){
            setTimeout(function(){
                if(new_card[0] != old_card[0]){
                    $("."+old_card[1]).flip(false);
                    $("."+new_card[1]).flip(false);
                    old_card = [];
                    new_card = [];
                }else{
                    old_card = [];
                    new_card = [];
                    matchCount++;
                    if(matchCount === 8){
                        clearInterval(t);
                        clearInterval(star);
                        var playAgain = confirm('congatulation you have win  , your game take : ' +time+ ' second, ' + 'you have clicked : ' +clicked_num+ ' time, ' + 'your rate is : ' + (4-starNum) +' star,  Play again ?!');
                        if(playAgain){
                            location.reload(true);
                        }
                    }
                }
            }, 450);
        }
    }
});

//code of timer
var time = 0;
var timer = function(){if(clicked_num >=1){$('.timer').text('TIMER : ' + ++time +'       ')}};
var t = setInterval(timer, 1000);

// coe of star rating
var starNum = 0;
var star = setInterval(function(){
    if(starNum <3){starNum++;}
    var b ='<i class="fa fa-star" aria-hidden="true"></i>';
    for(var a=starNum; a<2;a++){
        b += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    $('.star-rating').html(b);
},19000);

// restart functions
function restart() {
    location.reload(true);
}