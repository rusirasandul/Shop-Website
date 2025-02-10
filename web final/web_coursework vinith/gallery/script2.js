function funcPopup(textId) {
    var container = document.querySelector('.container');
    var popup = document.getElementById('popup');
    var popupText1 = document.getElementById('popupText1');
    var popupText2 = document.getElementById('popupText2');
    var popupText3 = document.getElementById('popupText3');
    var popupText4 = document.getElementById('popupText4');
    var popupText5 = document.getElementById('popupText5');
    var popupText6 = document.getElementById('popupText6');
    var popupText7 = document.getElementById('popupText7');
    var popupText8 = document.getElementById('popupText8');
    var popupImg1 = document.getElementById('popupImg1');
    var popupImg2 = document.getElementById('popupImg2');
    var popupImg3 = document.getElementById('popupImg3');
    var popupImg4 = document.getElementById('popupImg4');
    var popupImg5 = document.getElementById('popupImg5');
    var popupImg6 = document.getElementById('popupImg6');
    var popupImg7 = document.getElementById('popupImg7');
    var popupImg8 = document.getElementById('popupImg8');
     
    
    // Hide all popup texts and images
    popupText1.style.display = 'none';
    popupText2.style.display = 'none';
    popupText3.style.display = 'none';
    popupText4.style.display = 'none';
    popupText5.style.display = 'none';
    popupText6.style.display = 'none';
    popupText7.style.display = 'none';
    popupText8.style.display = 'none';
    popupImg1.style.display = 'none';
    popupImg2.style.display = 'none';
    popupImg3.style.display = 'none';
    popupImg4.style.display = 'none';
    popupImg5.style.display = 'none';
    popupImg6.style.display = 'none';
    popupImg7.style.display = 'none';
    popupImg8.style.display = 'none';
    
    // Toggle active class for popup and container
    container.classList.toggle('active');
    popup.classList.toggle('active');
    
    // Show the selected popup text and image based on the parameter
    if (textId === 'text1') {
        popupText1.style.display = 'block';
        popupImg1.style.display = 'block';
    } else if (textId === 'text2') {
        popupText2.style.display = 'block';
        popupImg2.style.display = 'block';
    } else if (textId === 'text3') {
        popupText3.style.display = 'block';
        popupImg3.style.display = 'block';
    } else if (textId === 'text4') {
        popupText4.style.display = 'block';
        popupImg4.style.display = 'block';
    } else if (textId === 'text5') {
        popupText5.style.display = 'block';
        popupImg5.style.display = 'block';
    }else if (textId === 'text6') {
        popupText6.style.display = 'block';
        popupImg6.style.display = 'block';
    }else if (textId === 'text7') {
        popupText7.style.display = 'block';
        popupImg7.style.display = 'block';
    }else if (textId === 'text8') {
        popupText8.style.display = 'block';
        popupImg8.style.display = 'block';
    }
}

const initSlider=()=>{
    const imageList=document.querySelector(".imageList");
    const slideButtons = document.querySelectorAll(".button");

    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction=button.id==="leftButton" ? -1:1;
            const scrollAmount=imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"});
        });
    });
}

window.addEventListener("load",initSlider);
// JavaScript to apply custom styles
const backgroundColorSelect = document.getElementById('background-color');
const fontFamilySelect = document.getElementById('font-family');

backgroundColorSelect.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

fontFamilySelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
    const selectedFontFamily = fontFamilySelect.value;

     // Get the "Web Gallery" element
    const webGallery = document.getElementById('webGallery');

    // Set the font family of the "Web Gallery" element
    webGallery.style.fontFamily = selectedFontFamily;
});


        
        
           