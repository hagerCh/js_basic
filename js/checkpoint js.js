function turnBold() {
	var str= document.getElementById("paragraph")
	str.style.fontWeight='bold'
	console.log(str)
}

function color(){
	var c=prompt("Please enter a color")
	var str= document.getElementById("paragraph")
	str.style.color=c
}

function sentence(){
	var str=prompt("Please enter a sentence")
	document.getElementById("paragraph").innerHTML=str
}

function del(){ 
	if(confirm("Do you want to delete this text?"))
		{
			document.getElementById("paragraph").innerHTML=''
			window.alert("deleted!")
		}
	else window.alert("cancelled!")
}

function changeSec(){
	var date= new Date()
	var sec= date.getSeconds()
	document.getElementById("paragraph").innerHTML=sec
	setTimeout(changeSec,1000)
}

function disappear(){
	document.getElementById("pic").style.display='none'
}

changeSec()
