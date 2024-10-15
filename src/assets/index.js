// ===============Selection====================
var ul = $("#ul");
var bar = $(".fa-bars");
var closeBtn = $(".fa-xmark");
var counter1 = $(".counter1");
var counter1_Value = counter1.attr("data-counte");
var counter2 = $(".counter2");
var counter2_Value = counter2.attr("data-counte");
var counter3 = $(".counter3");
var counter3_Value = counter3.attr("data-counte");
var counter4 = $(".counter4");
var counter4_Value = counter4.attr("data-counte");
var counter = 0;

// Toggle ber for small Device..............

closeBtn.hide();
bar.click(()=>{
   ul.slideDown();
   closeBtn.slideDown();
   bar.hide();
});
closeBtn.click(()=>{
    ul.slideUp(500);
    closeBtn.hide();
    bar.show();
 });


//Counter.............................

var Func1 = setInterval(FuCounter1, 10);

function FuCounter1(){
   counter ++;
   counter1.html(counter);
   if (counter == counter1_Value) {
      clearInterval(Func1);
   }
   
}

var Func2 = setInterval(FuCounter2, 10);

function FuCounter2(){
   counter ++;
   counter2.html(counter);
   if (counter == counter2_Value) {
      clearInterval(Func2);
   }
   
}

var Func3 = setInterval(FuCounter3, 10);

function FuCounter3(){
   counter ++;
   counter3.html(counter);
   if (counter == counter3_Value) {
      clearInterval(Func3);
   }
   else{
      counter -- ;
   }
}

var Func4 = setInterval(FuCounter4, 10);

function FuCounter4(){
   counter ++;
   counter4.html(counter);
   if (counter == counter4_Value) {
      clearInterval(Func4);
   }
   
}

