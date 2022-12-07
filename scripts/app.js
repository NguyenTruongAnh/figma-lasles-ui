$('.customer-list').slick({
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-previous.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-next.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
      }
    },
  ]
})

const menu = $('.menu')
const menuToggle = $('.menu-toggle')
const menuClose = $('.menu-close')
const bgModecheckbox = $('.header-mode input[type="checkbox"]')

bgModecheckbox.click(function() {
  bgModecheckbox[0].checked = this.checked;
  bgModecheckbox[1].checked = this.checked;
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', '')
  }
})

menuToggle.click(function () {
  menu.toggleClass('is-show')
})

menuClose.click(function () {
  menu.removeClass('is-show')
})

$(document).click(function (event) {
  let target = $(event.target)

  if (!target.closest('.menu-toggle').length) {
    if (!target.closest('.menu').length && menu.hasClass('is-show')) {
      menu.removeClass('is-show')
    }
  }
})

