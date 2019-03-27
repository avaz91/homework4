    var herfler = "abcdefghijklmnopqrstuvwxyz".split("")
    var secim1=[]
    var secim2=null
    var qalan=9
    var win=0
    var lose=0

    var updateQalan=function(){
        document.querySelector(".sans").innerHTML=qalan
    }
    var updateSecim=function(){
        var rand = Math.floor(Math.random() * herfler.length);
        
        secim2=herfler[rand]
       
    }
       
    var updateSecim1= function(){
        document.querySelector(".herfler").innerHTML=secim1.join(", ")
    }
    var reset = function() {
        qalan = 9
        secim1= [];
        updateSecim()
        updateQalan()
        updateSecim1()
      }

    updateSecim()

    updateQalan()

    document.onkeyup=function(event){
        qalan--
    
    var herf=String.fromCharCode(event.keyCode).toLowerCase()
    secim1.push(herf)
    
    
    updateQalan()
    updateSecim1()

    if(herf==secim2){
        win++
        document.querySelector(".hesab1").innerHTML=win
        reset()
    }

    if(qalan==0){
        lose++
        document.querySelector(".hesab2").innerHTML=lose
        reset()
    }
    }