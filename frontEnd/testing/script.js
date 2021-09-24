// getting all required elements
const searchWrapper =document.querySelector(".searchBarBox");
const inputBox =searchWrapper.querySelector("input");
const suggBox =searchWrapper.querySelector(".searchResults");

// if user presses any key and release 
inputBox.onkeyup=(e)=>{
    let userdata=e.target.value;
    let emptyArray=[];
    if(userdata){
        emptyArray=suggestions.filter(()=>{
           return  data.toLocaleLowerCase();
           console.log(emptyArray);
        })
    }

}