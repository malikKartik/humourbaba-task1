const scrollfunc = (e)=>{
	if(window.scrollY>=50){
		// document.getElementById('navbar').style.top = '0px'
		// document.getElementById('navbar').style.borderRadius = '160px/10px'
		// document.getElementById('navbar').style.borderTopLeftRadius = '0px'
		// document.getElementById('navbar').style.borderTopRightRadius = '0px'
		document.getElementById('right-nav').style.position = 'fixed'
		document.getElementById('right-nav').style.borderRadius = '160px/10px'
		document.getElementById('right-nav').style.borderTopLeftRadius = '0px'
		document.getElementById('right-nav').style.borderTopRightRadius = '0px'
		document.getElementById('right-nav').style.width = '100%'
	}
	if(window.scrollY<250){
		// document.getElementById('navbar').style.top = '-50px'
		document.getElementById('right-nav').style.borderRadius = '160px/60px'
		document.getElementById('right-nav').style.borderTopLeftRadius = '0px'
		document.getElementById('right-nav').style.borderTopRightRadius = '0px'
		document.getElementById('right-nav').style.borderBottomLeftRadius = '0px'
		document.getElementById('right-nav').style.width = '40%'
	}
}
window.addEventListener('scroll',scrollfunc)

