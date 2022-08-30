
const images = [...document.querySelectorAll('.image')];

//popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index =  0 ;  //will track the first image

images.forEach((item, i) => {
item.addEventListener('click', ()=>{
updateImage(i);
popup.classList.toggle('active');
})
})

const updateImage = (i) =>{
let path = `images/img${i+1}.jpg`;
largeImage.src = path ;
imageIndex.innerHTML = `0${i+1}`;
index = i;
}

closeBtn.addEventListener('click', () =>{
popup.classList.toggle('active');
document.getElementById("gallery1").style.filter = "blur(0px)";
})

leftArrow.addEventListener('click', () => {
if(index > 0){
updateImage(index-1);
}
else if(index == 0){
updateImage(index+(images.length-1))
}
})

rightArrow.addEventListener('click', () => {
if(index<images.length-1){
updateImage(index+1);
}
else if(index = images.length){
updateImage(index-images.length )
}
})
function toggle(){
document.getElementById('gallery1').style.filter = "blur(5px)";
}

function toggle(){
if (document.getElementById("gallery1").style.filter != "blur(5px)"){
document.getElementById("gallery1").style.filter = "blur(5px)"
}
else{
document.getElementById("gallery1").style.filter = "blur(0px)"
}
}
