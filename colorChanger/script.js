const tracker = document.querySelectorAll(".button")
tracker.forEach((btns)=>{
    btns.addEventListener("click",(e)=>{
        let clr=e.target.id;
        document.body.style.backgroundColor=clr
        //this code is working because the id is same as color name :)
    })
})
