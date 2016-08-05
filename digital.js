var score = 0;
var lastpick;
function AnswerCorrect(userAnswer, rightAnswer) {
    if(userAnswer == rightAnswer){
        return true;
    } else {
        return false;
    }
}
function swapStyleSheet (sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}
function LoadNextArtist () {
    console.log("hello next artist");
    $("div.g").removeClass("confetti");
    $('.artist').css('-webkit-filter', 'blur(30px)');

    for (i = 0; i < 4; i++) { 
    
        var artistIndex = Math.floor(Math.random() * artists.length);
        var choosingArtist = artists[artistIndex].Name;
        $($(".d")[i]).text(choosingArtist);
        $($(".d")[i]).css("text-decoration", "");
    }
    var artistIndex = Math.floor(Math.random() * artists.length);
    console.log(artists[artistIndex].Name);
    var Index= Math.floor(Math.random() * 4);
    var choosingArtist = artists[artistIndex].Name;
    $($(".d")[Index]).text(choosingArtist);
    $("#description").text(artists[artistIndex].Hit);
    $('#music').attr('src','music/' + artists[artistIndex].Music);
    $("#artistimage").attr("src", "img/" + artists[artistIndex].Img);
    $(".time").text("Time warp to the " + (artists[artistIndex].Year) + "s");
        if (artists[artistIndex].Year==2000) {
            swapStyleSheet("00s.css");
    
        }
        else if (artists[artistIndex].Year==1970) {
            swapStyleSheet("70s.css");
        }
        else if (artists[artistIndex].Year==1980) {
            swapStyleSheet("80s.css");
        }
        else if (artists[artistIndex].Year==1990) {
            swapStyleSheet("90s.css");
        }
    $(".btn").click(function() {
        var pick = $(event.target).text();
        console.log(pick); 
        var result = AnswerCorrect (pick, choosingArtist); 
            if (result) {
                $("div.g").addClass("confetti");
                $('.artist').css('-webkit-filter', 'blur(0px)');
                    if (lastpick!=pick){score+=100};
                $('#score').text(score);
                lastpick = pick;
                setTimeout(LoadNextArtist, 3000);
            }
            else {
                $(event.target).css('text-decoration', 'line-through'); 
            }
    });
}

$(document).ready(function() {
    LoadNextArtist();
     //------------TImer---------//
    window.onload = function(){
        (function(){
            var counter = 90;
            setInterval(function() {
                counter--;
                if (counter >= 0) {
                    span = document.getElementById("count");
                    span.innerHTML = counter;
                }
                if (counter === 0) {
                    location.replace('gameover.html?score='+score);
        
                }
    
            }, 1000);
    
    })();
  
}
     

   
})