$(document).ready(function () {
    $('.happy_clients_carousel').owlCarousel({
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    })
})

const handle_submit = (e) => {
    e.preventDefault();
    console.log('form-data==>', e)
}
// Glight
GLightbox({
    selector: 'glightbox'
});


function call(id) {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.map(function (item, index) {
        if (id === "all") {
            item.classList.remove('d-none');
            item.classList.add('fadeIn', 'glightbox');
            setTimeout(clean, 500);
        } else {
            const check = items[index].classList.contains(id);

            if (check) {
                item.classList.remove('d-none');
                item.classList.add('fadeIn', 'glightbox');
            } else {
                item.classList.add('d-none');
                item.classList.remove('fadeIn', 'glightbox');
            }
        }
    })
}

function clean() {
    const items = Array.from(document.getElementsByClassName("filter"));
    items.map(function (item, index) {
        item.classList.remove('fadeIn');
    })
}