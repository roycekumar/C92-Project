player1_name="null";
player2_name="null";
function change(player1_name){
    player1_name=document.getElementById("player1_name_input").value;
    if(player1_name!=" "){
        localStorage.setItem("Player 1",player1_name);
        document.getElementById("divi1").style.display="none";
        document.getElementById("divi2").style.display="inline-block";
    }
}
function login(player2_name){
    player2_name=document.getElementById("player2_name_input").value;
    if(player2_name!=" "){
        localStorage.setItem("Player 2",player2_name);

        window.location="Play_area.html"
    }
}
function loading(){
    document.getElementById("player1_name").innerHTML=localStorage.getItem("Player 1")+" : ";
    document.getElementById("player2_name").innerHTML=localStorage.getItem("Player 2")+" : ";
    document.getElementById("player_question").innerHTML="Question Turn - "+localStorage.getItem("Player 1")
    document.getElementById("player_answer").innerHTML="Answer Turn  - "+localStorage.getItem("Player 2")
    document.getElementById("output_span").style.display="none";
    document.getElementById("answer_input").style.display="none";
    document.getElementById("ques").style.display="none";
    document.getElementById("checking").style.display="none"
}
