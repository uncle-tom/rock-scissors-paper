var userChoice;
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

$('.user h2').click(function(){   
    userChoiсe = $(this).data('clk');
    $('.user h2').animate({"opacity":"0"});
    $('.user'+' '+'.'+userChoiсe).animate({"opacity":"0.99"});
    $('.computer h2').animate({"opacity":"0"});
    $('.computer'+' '+'.'+computerChoice).animate({"opacity":"0.99"},{complete:function(){
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
    }});
});
