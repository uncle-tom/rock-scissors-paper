var userChoiсe;
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

$('.user img').click(function name(){   
    userChoiсe = $(this).data('clk');
    $('.user img').css({"display":"none"});
    $('.user'+' '+'.'+userChoiсe+' '+'img').css({"display":"block"});
    $('.computer img').css({"display":"none"});
    $('.computer'+' '+'.'+computerChoice+' '+'img').css({"display":"block"}).animate({"display":"block"},{complete:function(){
        if(userChoiсe === computerChoice) {
            $('.tie').fadeIn();
        } 
        else if (userChoiсe === "rock") {
            if (computerChoice === "scissors") {
                $('.win').fadeIn();
            }   
            else {
                $('.lose').fadeIn();   
            }
        }
        else if (userChoiсe === "scissors") {
            if (computerChoice === "paper") {
                $('.win').fadeIn();
            }   
            else {
                $('.lose').fadeIn();
            }
        } 
        else if (userChoiсe === "paper") {
            if (computerChoice === "rock") {
                $('.win').fadeIn();
            }
            else {
                $('.lose').fadeIn();
            }
        } 
        $('.button-reset').fadeIn();
    }});

});
