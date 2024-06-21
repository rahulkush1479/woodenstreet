

function myFunction(x) {
    $('#toggleiconbar,#toggleiconx').toggleClass("fa-xmark");
}


function addclass() {
    $('#togglepart').toggleClass('toggleshow')
}


$('.owl-imgslideno').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        900: {
            items: 4
        },
        1400: {
            items: 4
        }
    }
})

$('.owl-img').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})
$('.owl-imgslidenod5').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1100: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
})