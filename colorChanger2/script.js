// let bgcChanger=document.getElementsByClassName("changer")
let btn=document.querySelector("button")
 const colorGenerator=function(){
    let hex="0123456789ABCDEF"
    let hash="#"
    for(let i=0;i<6;i++){
        hash=hash+hex[Math.floor(Math.random()*16)]
    }
    // console.log(hash);
    return hash
}

const bodyColorChanger=function(){
    document.body.style.backgroundColor=colorGenerator()
} 
btn.addEventListener("click",bodyColorChanger)
