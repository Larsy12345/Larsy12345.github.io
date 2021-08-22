setInterval(()=>{
	var d1=Date.now();
	var d2=new Date('2021/8/4 14:00:00');
	var d3=(d2-d1);
	var d= document.querySelector('.time1 .d').innerHTML=parseInt(d3/1000/60/60/24,10) + ' :'
	var h= document.querySelector('.time1 .h').innerHTML=parseInt(d3/1000/60/60%24,10) + ' :'
	var m=document.querySelector('.time1 .m').innerHTML=parseInt(d3/1000/60%60,10)+ ' :'
	var s=document.querySelector('.time1 .s').innerHTML=parseInt(d3/1000%60,10)
	var allSpan=document.querySelectorAll('.time1 span');
	for(let i=0;i<allSpan.length;i++){
		allSpan[i].style.fontSize='30px';
		allSpan[i].style.color='white'
	}
	// console.log(parseInt(d3/1000/60/60/24));
},1000)