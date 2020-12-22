function clock(){
  let countDown= new Date("Dec 25, 2020 24:00:00").getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('clock').innerHTML= days + " "+"Days,"+" " + hours +" "+"Hours,"+" "+minutes+" "+"minutes"+" and "+seconds+" seconds";
    if(distance<0){
      clearInterval(x);
      document.getElementById('clock').innerHTML="HAPPY CHRISTMASS!";
    }
  },1000);

}
