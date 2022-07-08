let myImage=document.querySelector('img')
myImage.onclick=()=>{
    let mySrc=myImage.getAttribute('src');
    if(mySrc==="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"){
        myImage.setAttribute('src','img/chrome.webp')
    }else{
        myImage.setAttribute('src','https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg')
    }
}
let myButton=document.querySelector('button')
let myHeading=document.querySelector('h1')
function setUserName(){
    let myName=prompt('Plz enter your name')
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName)
    myHeading.textContent='Mozilla is cool, '+myName
    }
}
if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storedName=localStorage.getItem('name')
    myHeading.textContent='Mozilla is cool, '+storedName
}
myButton.onclick=setUserName;