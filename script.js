/*Banner corousel */

var banner = document.getElementById('content1');

var prev1= document.getElementById('prev1');
var next1= document.getElementById('next1');
var prev2= document.getElementById('prev2');
var next2= document.getElementById('next2');
var count=0;
var banner1= document.getElementById('banner1');
var banner2= document.getElementById('banner2');

next1.addEventListener('click',function(){
    if(count!==1)
    {
        count=1;
        console.log(count);
        banner1.style.display='none';
        banner2.style.display='contents';
    }
});

prev2.addEventListener('click', function(){
    if(count!==0)
    {
        console.log(count);
        banner2.style.display='none';
        banner1.style.display='contents';
        count=0;
    }
});

/*Best offer corousel*/

function display(count1)
{
    var c1img= document.getElementById('c1_img');
    var name=document.getElementById('i_name');
    var price=document.getElementById('i_price');
    var stock=document.getElementById('i_stock');
    if(count1===0)
    {
        // c1img.src="./Images/img2.jpeg";
        name.innerHTML='Butter Murukku';
        stock.innerHTML='In Stock';
        price.innerHTML='₹180.00';

    }

    if(count1===1)
    {
        // c1img.src="./Images/img1.jpeg";
        name.innerHTML='Ring Murukku';
        stock.innerHTML='In Stock';
        price.innerHTML='₹120.00';
        
    }

    if(count1===2)
    {
        // c1img.src="./Images/img3.jpeg";
        name.innerHTML='Jalebi';
        stock.innerHTML='In Stock';
        price.innerHTML='₹140.00';
    }

    if(count1===3)
    {
        // c1img.src="./Images/img4.png";
        name.innerHTML='Mixture';
        stock.innerHTML='In Stock';
        price.innerHTML='₹100.00';

    }
}

var c1=document.getElementById('c1');
var count1=0;
var next1=document.getElementById('next3');
var prev1=document.getElementById('prev3');

prev1.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('yes');
    if(count1>0)
    {
        count1--;
        console.log(count1);
        display(count1);
    }
});

next1.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('yes');
    if(count1<3 && count>=0)
    {
        console.log(count1);
        count1++;
        display(count1);  
    }
});








