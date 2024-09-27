var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var p=document.getElementById("display")
var i=0;
function mark(t)
{  
    if(t.innerText==="")
    {
      if(i%2==0)
      {
        turn(i);
        t.innerText="✖";
        t.style.color="#FF073A";
      }
      else
      {
        turn(i);
       t.innerText="〇";
       t.style.color="#00FFFF";
      }
      
    i++;
    }
     check();
}
function turn(i)
{
    if(i%2==0)
    {
        p.innerText="TURN FOR 〇!";
        p.style.color="#FFFFFF";  
    }
    else
    {
        p.innerText="TURN FOR ✖!";
       p.style.color="#FFFFFF";
    }
}
function check()
{
    if (
        (t1.innerText==="✖"&&t2.innerText==="✖"&&t3.innerText==="✖") ||
        (t4.innerText === "✖" && t5.innerText === "✖" && t6.innerText === "✖") ||
        (t7.innerText === "✖" && t8.innerText === "✖" && t9.innerText === "✖") ||
        (t1.innerText === "✖" && t4.innerText === "✖" && t7.innerText === "✖") ||
        (t2.innerText === "✖" && t5.innerText === "✖" && t8.innerText === "✖") ||
        (t3.innerText === "✖" && t6.innerText === "✖" && t9.innerText === "✖") ||
        (t1.innerText === "✖" && t5.innerText === "✖" && t9.innerText === "✖") ||
        (t3.innerText === "✖" && t5.innerText === "✖" && t7.innerText === "✖")
    ) {
       p.innerText="Player ✖ WINS!";
       p.style.color="#FFFFFF";
    } else if (
        (t1.innerText === "〇" && t2.innerText === "〇" && t3.innerText === "〇") ||
        (t4.innerText === "〇" && t5.innerText === "〇" && t6.innerText === "〇") ||
        (t7.innerText === "〇" && t8.innerText === "〇" && t9.innerText === "〇") ||
        (t1.innerText === "〇" && t4.innerText === "〇" && t7.innerText === "〇") ||
        (t2.innerText === "〇" && t5.innerText === "〇" && t8.innerText === "〇") ||
        (t3.innerText === "〇" && t6.innerText === "〇" && t9.innerText === "〇") ||
        (t1.innerText === "〇" && t5.innerText === "〇" && t9.innerText === "〇") ||
        (t3.innerText === "〇" && t5.innerText === "〇" && t7.innerText === "〇")
    ) {
        p.innerText="Player 〇 WINS!";
        p.style.color="#FFFFFF";
    }
    
}

function reset()
{
    p.innerText="";
    var value=document.querySelectorAll('.marking');
    for(var i=0;i<10;i++)
    {
        value[i].innerText='';
    }
}