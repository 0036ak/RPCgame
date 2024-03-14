
let win=0;
let loss=0;
let draw=0;

function fun( para)
{
    document.getElementById("your").innerHTML=para;
    let ran=Math.floor(Math.random()*3);
    if(para=="rock"){

    
    if(ran==1)
    {
        draw++;
        document.getElementById("com").innerHTML="rock";
        document.getElementById("draw").innerHTML=draw;
        document.getElementById("res").innerHTML="result is user draw";
     }
    else if(ran==2)
    { 
        loss++;
        document.getElementById("com").innerHTML="paper";
        document.getElementById("loss").innerHTML=loss;
        document.getElementById("res").innerHTML="result is user loss";
        

    }
    else{
        win++;
        document.getElementById("com").innerHTML="scissor";
        document.getElementById("win").innerHTML=win;
        document.getElementById("res").innerHTML="result is user win";
        
    }
}
else if(para=="paper")
{
    
    if(ran==1)
    {
        
        win++;
        document.getElementById("com").innerHTML="rock";
        document.getElementById("win").innerHTML=win;
        document.getElementById("res").innerHTML="result is user win";
     }
    else if(ran==2)
    { 
        
        draw++;
        document.getElementById("com").innerHTML="paper";
        document.getElementById("draw").innerHTML=draw;
        document.getElementById("res").innerHTML="result is user draw";
        

    }
    else{
        
        loss++;
        document.getElementById("com").innerHTML="scissor";
        document.getElementById("loss").innerHTML=loss;
        document.getElementById("res").innerHTML="result is user loss";
    }
}
else{
    if(ran==1)
    {
        
        loss++;
        document.getElementById("com").innerHTML="rock";
        document.getElementById("loss").innerHTML=loss;
        document.getElementById("res").innerHTML="result is user loss";
     }
    else if(ran==2)
    { 
        
        win++;
        document.getElementById("com").innerHTML="paper";
        document.getElementById("win").innerHTML=win;
        document.getElementById("res").innerHTML="result is user win";
        

    }
    else{
       
        draw++;
        document.getElementById("com").innerHTML="scissor";
        document.getElementById("draw").innerHTML=draw;
        document.getElementById("res").innerHTML="result is user draw";
        
    }

}

}