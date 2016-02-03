var userChoiсe;
var computerChoice;

function init() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  } 
}
init();

var userRes = 0;
var pcRes = 0;

var reset = function(){
    $('.win , .lose , .tie').fadeOut();
    $('img').css({"display":"block"});
    userChoiсe = undefined;
    init();
}

$('.user img').click(function name(){   
    userChoiсe = $(this).data('clk');
    $('.user img').css({"display":"none"});
    $('.user'+' '+'.'+userChoiсe+' '+'img').css({"display":"block"});
    $('.computer img').css({"display":"none"});
    $('.computer'+' '+'.'+computerChoice+' '+'img').css({"display":"block"}).animate({"display":"block"},{complete:function(){
        if(userChoiсe === computerChoice) {
            $('.tie').fadeIn({complete:reset});
        } 
        else if (userChoiсe === "rock") {
            if (computerChoice === "scissors") {
                $('.win').fadeIn();
                userRes += 1;
                $('.user-res').text(userRes);
                setTimeout(reset, 1300);
            }   
            else {
                $('.lose').fadeIn();  
                pcRes += 1;
                $('.pc-res').text(pcRes); 
                setTimeout(reset, 1300);
            }
        }
        else if (userChoiсe === "scissors") {
            if (computerChoice === "paper") {
                $('.win').fadeIn();
                userRes += 1;
                $('.user-res').text(userRes);
                setTimeout(reset, 1300);
            }   
            else {
                $('.lose').fadeIn();
                pcRes += 1;
                $('.pc-res').text(pcRes);
                setTimeout(reset, 1300);
            }
        } 
        else if (userChoiсe === "paper") {
            if (computerChoice === "rock") {
                $('.win').fadeIn();
                userRes += 1;
                $('.user-res').text(userRes);
                setTimeout(reset, 1000);
            }
            else {
                $('.lose').fadeIn();
                pcRes += 1;
                $('.pc-res').text(pcRes);
                setTimeout(reset, 1000);
            }
        }
        console.log(userRes);
        if (userRes > pcRes) {
            $('.user-res').css({"color":"lightgreen"});
            $('.pc-res').css({"color":"black"});
        } else if(userRes < pcRes) {
            $('.pc-res').css({"color":"red"});
            $('.user-res').css({"color":"black"});
        } else {
            $('.user-res').css({"color":"black"});
            $('.pc-res').css({"color":"black"});
        }
        ;
    }});    
});
