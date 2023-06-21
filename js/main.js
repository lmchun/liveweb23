//change avatar menu pop up
function changeavatarimg(){
    // console.log("button pressed")
    let shown = document.getElementById("changeava");
    if( shown.style.display === "none"){
        shown.style.display = "block";
    }else {
        shown.style.display = "none";
    }
}
    
let avatarstatus = "cat";
function avatarswitch(){
    const useravatar = document.getElementById("useravataricon");
    // console.log("avatar switch");
    // useravatar.style.borderRadius =  "2px";
    // useravatar.style.border = "1em solid red";
    if(avatarstatus === "cat"){
           useravatar.src = "assets/dog-avatar.png";
            avatarstatus = "dog";
        } else if (avatarstatus === "dog"){
            useravatar.src = "assets/cat-avatar.png"
            avatarstatus = "cat";
    }   
}

//video 

