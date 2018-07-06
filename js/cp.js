function changeFontFamily(){
	var sbox= document.getElementById("font")
	var s= sbox.options[sbox.selectedIndex].value
	document.getElementById("paragraph").style.fontFamily=s
}

function changeFontSize(){
	var sbox= document.getElementById("size")
	var s= sbox.options[sbox.selectedIndex].value
	document.getElementById("paragraph").style.fontSize=parseInt(s)+"px"
}

function bold(){
	var p= document.getElementById("paragraph")
	if(p.style.fontWeight=="bold")
		p.style.fontWeight="normal"
	else
	p.style.fontWeight="bold"
}

function underline(){
	var p= document.getElementById("paragraph")
	if(p.style.textDecoration=="underline")
		p.style.textDecoration="none"
	else
	p.style.textDecoration="underline"
}

function italic(){
	var p= document.getElementById("paragraph")
	if(p.style.fontStyle=="italic")
		p.style.fontStyle="normal"
	else
	p.style.fontStyle="italic"
}