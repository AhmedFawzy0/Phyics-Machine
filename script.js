function start()
{
var m1= document.getElementById("i").value; 
var v1= document.getElementById("i2").value;
var m2= document.getElementById("i3").value;
var v2= document.getElementById("i4").value;
var ee = document.getElementById("checker").checked;



if(m1<=0 || m2<=0  || v1<0  || v2<0)
{
	alert("Input values are out of range !");
	restart();
	
}

else {run1(m1,m2,v1,v2,ee);}



}



function restart()
{

/*document.getElementById("i").value = '';
document.getElementById("i2").value = '';
document.getElementById("i3").value = '';
document.getElementById("i4").value = '';
document.getElementById("checker").value=false;*/

history.go();

return false;


}

function run1(m1,m2,v1,v2,ee)
{
var box1 = document.getElementById('obj1');
var box2 = document.getElementById('obj2');
var anim=setInterval(animate,15);
v2=v2*-1;
var t=1;



function animate()
{

if(box1.offsetLeft>=(screen.width-100) || box1.offsetLeft<=100 || box2.offsetLeft>=(screen.width-100) || box1.offsetLeft<=100)
{	
	clearInterval(anim);
 	box1.style.left= 20 + "%";
 	box2.style.left= 80 + "%";
 	

}

 box1.style.left = +box1.offsetLeft + +v1 + "px";
 box2.style.left= +box2.offsetLeft + +v2 + "px";
  

 if( (box1.offsetLeft +  box1.offsetWidth) >= box2.offsetLeft && t==1)
 {

	t=0;

	var e1 = 0.5*m1*v1*v1 + 0.5*m2*v2*v2;

 	
 	if(ee)
 	{
 		
 	 var v1n=v1; 
 		v1=(m1*v1- m2*v1 + +2*m2*v2)/(+m1+ +m2);
 		v2=(m2*v2- m1*v2 + +2*m1*v1n)/(+m1+ +m2);
 	}

 	else
 	{
 		
 		v1=(m1*v1 + m2*v2)/(+m1+ +m2);
 		
 		v2=v1;
 	}

 	var ef = 0.5*m1*v1*v1 + 0.5*m2*v2*v2;
 	var dir1="";
 	var dir2="";
 	if(v1>0) dir1="[R]";
 	if(v1<0) dir1="[L]";
 	if(v2>0) dir2="[R]";
 	if(v2<0) dir2="[L]";
 	var loss=(+1 - (ef/e1))*100;
 	document.getElementById("new1").innerHTML = "New Velocity 1: " + (Math.abs(v1)).toFixed(4) + "m/s " + dir1;
 	document.getElementById("new2").innerHTML = "New Velocity 2: " + (Math.abs(v2)).toFixed(4) +  "m/s " + dir2;
 	document.getElementById("new3").innerHTML = "% Energy lost : " + (Math.abs(loss)).toFixed(4);
 }




}

}

 
