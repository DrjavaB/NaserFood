function slickSliderReview(containerId){
    if(!document.querySelector('#'+containerId)){
        return false;
    }
    // let nextButton = document.querySelector('#'+containerId+' .slick-next');
    // let prevButton = document.querySelector('#'+containerId+' .slick-prev');
    let dots = document.querySelectorAll('#'+containerId+' .slick-dots> li> button');
    let dots_li = document.querySelectorAll('#'+containerId+' .slick-dots> li');
    let slides = document.querySelectorAll('#'+containerId+' .offer-image');
    for(let i = 0; i < dots.length; i ++){
        let image_src = "";
        let image_title = "";
        let node = '';
        for(let j = 0; j < dots.length; j ++){
            if (i == slides[j].getAttribute('data-order')){
                if(i == 0){ image_src = slides[j].getAttribute('data-th-hover');}else{ image_src = slides[j].getAttribute('data-th');}

                image_title = slides[j].getAttribute('data-title');
                node = document.createElement("H3");
                node.appendChild(document.createTextNode(image_title))
            }
        }
        dots[i].innerHTML = `<img src='${image_src}' alt='' >`;
        dots_li[i].appendChild(node);
    }
    // nextButton.innerHTML = '<i class="chevron right icon"></i>';
    // nextButton.classList='slick-next slick-arrow ui icon button';
    //
    // prevButton.innerHTML = '<i class="chevron left icon"></i>';
    // prevButton.classList='slick-prev slick-arrow ui icon button';
    if (document.body.offsetWidth < 500){
        // for(let i = 0; i < dots.length; i ++){
        //     dots[i].innerHTML = `<i class="icon circle"></i>`;
        // }
        let buttons = document.querySelectorAll('#product-slider-container .slick-dots> li> button');
        let icon_width = ( document.body.offsetWidth - 100 ) / dots.length;
        for ( let q = 0; q < buttons.length; q++){
            buttons[q].style.width = icon_width +"px";
        }
    }else if(document.body.offsetWidth < 1200 && document.body.offsetWidth > 500 ){
        let buttons = document.querySelectorAll('#product-slider-container .slick-dots> li> button');
        let icon_width = ( document.body.offsetWidth - 380 ) / dots.length;
        for ( let q = 0; q < buttons.length; q++){
            buttons[q].style.width = icon_width +"px";
        }
    }
    // nextButton.classList.add('ui');
    // nextButton.classList.add('icon');
    // nextButton.classList.add('button');
}
function slickSliderReview2(containerId){
    if(!document.querySelector('#'+containerId)){
        return false;
    }

    let dots = document.querySelectorAll('#'+containerId+' .slick-dots> li> button');
    let dots_li = document.querySelectorAll('#'+containerId+' .slick-dots> li');
    let slides = document.querySelectorAll('#'+containerId+' .offer-image');
    if (document.body.offsetWidth < 500){
        // for(let i = 0; i < dots.length; i ++){
        //     dots[i].innerHTML = `<i class="icon circle"></i>`;
        // }
        let buttons = document.querySelectorAll('#product-slider-container .slick-dots> li> button');
        let icon_width = ( document.body.offsetWidth - 100 ) / dots.length;
        for ( let q = 0; q < buttons.length; q++){
            buttons[q].style.width = icon_width +"px";
        }
    }else if(document.body.offsetWidth < 1200 && document.body.offsetWidth > 500 ){
        let buttons = document.querySelectorAll('#product-slider-container .slick-dots> li> button');
        let icon_width = ( document.body.offsetWidth - 380 ) / dots.length;
        for ( let q = 0; q < buttons.length; q++){
            buttons[q].style.width = icon_width +"px";
        }
    }
    // nextButton.classList.add('ui');
    // nextButton.classList.add('icon');
    // nextButton.classList.add('button');
}
function heartRate(){
    let heart = document.querySelector('#footer .heart-rate i');
     heart.classList.toggle('outline');
}
function readMore() {
    event.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = $("#more");
    var btnText = document.getElementById("moreBtn");

    if (dots.style.display === "none") {
        moreText.transition('fade down');
        dots.style.display = "inline";
        btnText.innerHTML = "مطالعه بیشتر";
    } else {
        moreText.transition('fade down');
        dots.style.display = "none";
        btnText.innerHTML = "خلاصه متن";
    }
}
function scrollStickyMenu(){
// Get the navbar
    var navbar = document.getElementById('top-menu');
    var pusher = document.querySelector('.pusher');
    var logo_container = document.querySelector('#top-menu .left-logo');
    var logo_src = logo_container.getAttribute('data-src');
// Get the offset position of the navbar
//     var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    $('.pusher').scroll(function () {
        if (pusher.scrollTop >= 103) {
            navbar.classList.add("sticky");
            logo_container.innerHTML = "<h3 class='ui header'>ELLSE</h3>";
        } else {
            logo_container.innerHTML = `<img src='${logo_src}'>`;
            navbar.classList.remove("sticky");
        }
    });

}
function mainSliderHeight(){
    let document_height =  document.body.offsetHeight;
    let mainSlider = document.querySelector('#main-slider');
    if(mainSlider){
        if(document.body.offsetWidth > 844){
            mainSlider.style.height =document_height+'px';
        }else{
            mainSlider.style.height = 'auto';
        }
    }
}
function openModal (modalId,url) {
    event.preventDefault();
    $.ajax({
        url: url ,
        type: 'get',
        beforeSend: function(){
            $('#'+modalId+'-dimmer').dimmer('show');
        },
        success: function(response){
        },
        complete:function(data){
            // $('#'+modalId+'-dimmer').dimmer('hide');
            // $('#'+modalId+'-result').html(data.responseText);
            // addFontClassFormInputs('iransans');
            // ajaxRepairSemantic();
            $('#'+modalId).modal({
                // transition:'slide left',
                transition:'horizontal flip',
                onApprove:function () {
                },
                onDeny : function () {
                },
                onHide:function () {

                }
            }).modal('show');
        }
    });
}
$(document).ready(function () {
    $('#product-slider-container').slick({
        arrows:false,
        fade:true,
        // vertical : true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplaySpeed: 6000,
        autoplay: true,
        speed: 650,
        lazyLoad: 'ondemand',
    });
    $('#product-slider-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let next_slide_image = document.querySelectorAll('#product-slider-container .offer-image')[nextSlide];
        let next_slide_img_th = document.querySelectorAll('#product-slider-container .slick-dots> li> button > img')[nextSlide];
        next_slide_img_th.setAttribute('src',next_slide_image.getAttribute('data-th-hover'));

        let prev_slide_image = document.querySelectorAll('#product-slider-container .offer-image')[currentSlide];
        let prev_slide_img_th = document.querySelectorAll('#product-slider-container .slick-dots> li> button > img')[currentSlide];
        prev_slide_img_th.setAttribute('src',prev_slide_image.getAttribute('data-th'));
    });
    slickSliderReview('product-slider-container');
    setInterval(heartRate,1200);
    $('.ui.sidebar').first().sidebar('attach events', '#top-menu-responsive-toggle .toggle-icon', 'show');
    // scrollStickyMenu();
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    mainSliderHeight();
    $(window).resize(function () {
        mainSliderHeight();
        slickSliderReview2('product-slider-container');
    });

});

