"use strict";

var burger = document.querySelector(".header__btn");
var menu = document.querySelector(".header__menu");
var container = document.querySelector(".custom-container");
var headerAccordionItems = document.querySelectorAll(".js-accordion-header");
var header = document.querySelector(".header");
var btnUp = document.querySelector('.button-up');
burger.addEventListener("click", function () {
  var windowWidth = window.innerWidth;
  var containerWidth = container.scrollWidth;

  if (windowWidth > containerWidth) {
    var widthForMenu = (windowWidth - containerWidth) / 2;
    menu.style.width = 725 + widthForMenu + 'px';
  } else {
    menu.style.width = '';
  }

  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
headerAccordionItems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);
    headerAccordionItems.forEach(function (el) {
      if (el.parentElement !== elem.parentElement) accordionNotActive(el);
    });
  });
});
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.style.width = '';
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
window.addEventListener('scroll', function () {
  if (window.scrollY > window.innerHeight) {
    btnUp.classList.remove('is-hidden');
  } else {
    btnUp.classList.add('is-hidden');
  }
});

if (window.scrollY > window.innerHeight) {
  btnUp.classList.remove('is-hidden');
} else {
  btnUp.classList.add('is-hidden');
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 767 && menu.classList.contains("active")) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});
btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

if (document.getElementById("index")) {
  new Swiper(".hero__left-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".hero__left-swiper-next",
      prevEl: ".hero__left-swiper-prev"
    },
    pagination: {
      el: ".hero__left-swiper-pagination",
      clickable: true
    }
  });
  new Swiper(".hero__right-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".hero__right-swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".hero__right-swiper-next",
      prevEl: ".hero__right-swiper-prev"
    }
  });
  var items = document.querySelectorAll(".after-hero__box");
  var btn = document.querySelector(".after-hero__btn");
  console.log(window.innerWidth);

  if (window.innerWidth < 827) {
    afterHeroMore(3, btn, items);
  } else if (window.innerWidth < 1140) {
    afterHeroMore(5, btn, items);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 827) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(3, btn, items);
      }
    } else if (window.innerWidth < 1140) {
      if (!btn.classList.contains("d-none")) {
        afterHeroMore(5, btn, items);
      }
    } else {
      items.forEach(function (item) {
        return item.classList.remove("d-none");
      });
    }
  });
  var swiper2 = new Swiper(".customers__swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".customers__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".customers__swiper-next",
      prevEl: ".customers__swiper-prev"
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1110: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
}

if (document.getElementById("work")) {
  var tabButtons = Array.from(document.querySelectorAll(".work__tab-head-btn"));
  var elements = Array.from(document.querySelectorAll(".work__tab-item"));
  var accordionItems = document.querySelectorAll('.vacancies__accordion-item-head');
  var form = document.querySelector('.internship__form-js');
  var myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));
  tabActive(tabButtons[0], 0, tabButtons, elements);
  tabButtons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      tabActive(btn, index, tabButtons, elements);
    });
  });
  accordionItems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);
      accordionItems.forEach(function (el) {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el);
      });
    });
  });
  var swiperLive = new Swiper(".live__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".live__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".live__swiper-next",
      prevEl: ".live__swiper-prev"
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    myModalOk.show();
  });
}

if (document.getElementById("qp")) {
  var modal = document.querySelector(".js-submit-modal");
  var btns = document.querySelectorAll(".qp__button");
  var myModal = new bootstrap.Modal(modal);

  var _form = document.querySelector(".qp__modal-form");

  var _myModalOk = new bootstrap.Modal(document.querySelector(".js-modal-ok"));

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      myModal.show();
    });
  });

  _form.addEventListener("submit", function (e) {
    e.preventDefault();
    myModal.hide();

    _myModalOk.show();
  });

  if (document.querySelectorAll(".qp__swiper")) {
    document.querySelectorAll(".qp__swiper").forEach(function (elem) {
      var swiperQP = new Swiper(".qp__swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".qp__pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".qp__swiper-next",
          prevEl: ".qp__swiper-prev"
        }
      });
    });
  }

  if (document.querySelectorAll('.qp__swiper-slide') && document.querySelectorAll('.qp__swiper-slide').length < 2) {
    document.querySelectorAll(".qp__swiper-navigation").forEach(function (elem) {
      elem.classList.add('d-none');
    });
  }
}

if (document.getElementById("history")) {
  var block = document.querySelector(".history__block");
  var historyStrip = document.querySelector(".history__strip");
  var historyTimeline = document.querySelectorAll(".history__timeline");
  var more = document.querySelector(".history__more");
  var btnMore = document.querySelector(".history__more-btn");

  if (historyTimeline.length < 5) {
    more.classList.add("d-none");
    block.style.maxHeight = "none";

    if (window.innerWidth < 768) {
      bottomAbsolute(historyTimeline, historyStrip, 18);
    } else {
      bottomAbsolute(historyTimeline, historyStrip, 40);
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18);
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40);
      }
    });
  } else {
    var heightBlockForWindow = function heightBlockForWindow() {
      if (window.innerWidth < 768) {
        heightBlock(block, historyTimeline, 4, 58);
      } else {
        heightBlock(block, historyTimeline, 4, 80);
      }
    };

    heightBlockForWindow();
    more.classList.remove("d-none");
    window.addEventListener("resize", function () {
      return heightBlockForWindow;
    });
    btnMore.addEventListener("click", function () {
      window.removeEventListener("resize", function () {
        return heightBlockForWindow;
      });
      more.classList.add("d-none");
      block.style.maxHeight = "none";

      if (window.innerWidth < 768) {
        bottomAbsolute(historyTimeline, historyStrip, 18);
      } else {
        bottomAbsolute(historyTimeline, historyStrip, 40);
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
          bottomAbsolute(historyTimeline, historyStrip, 18);
        } else {
          bottomAbsolute(historyTimeline, historyStrip, 40);
        }
      });
    });
  }

  if (window.innerWidth < 768) {}
}

if (document.getElementById("licenses")) {
  var checkbox = document.querySelectorAll(".licenses__filter-input");
  var checkedAll = document.querySelector(".licenses__filter-btn-all");
  var checkedReset = document.querySelector(".licenses__filter-btn-reset");

  var areAllChecked = function areAllChecked() {
    return Array.from(checkbox).every(function (elem) {
      return elem.checked;
    });
  };

  var areCheckedOne = function areCheckedOne() {
    return Array.from(checkbox).some(function (elem) {
      return elem.checked;
    });
  };

  checkedAll.addEventListener("click", function () {
    checkbox.forEach(function (elem) {
      return elem.checked = true;
    });
    checkedReset.disabled = false;
    checkedAll.disabled = true;
  });
  checkedReset.addEventListener("click", function () {
    checkbox.forEach(function (elem) {
      return elem.checked = false;
    });
    checkedReset.disabled = true;
    checkedAll.disabled = false;
  });
  checkbox.forEach(function (elem) {
    elem.addEventListener("change", function () {
      checkedAll.disabled = areAllChecked();
      checkedReset.disabled = !areCheckedOne();
    });
  });
}

if (document.getElementById("contacts")) {
  var initMapContacts = function initMapContacts() {
    var myMap = new ymaps.Map("contacts__map-penza", {
      center: [53.184451071233134, 45.007014999999924],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13
    });
    var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
    var circlePlacemark = new ymaps.Placemark([53.184451071233134, 45.007014999999924], {}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    });
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  };

  var initMapContactsMoscow = function initMapContactsMoscow() {
    var myMap = new ymaps.Map("contacts__map-moscow", {
      center: [55.7869050689375, 37.67187549999997],
      zoom: 13,
      minZoom: 13,
      controls: []
    }, {
      minZoom: 13
    });
    var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
    var circlePlacemark = new ymaps.Placemark([55.7869050689375, 37.67187549999997], {}, {
      iconLayout: placemarkDiv,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 30
      }
    });
    myMap.geoObjects.add(circlePlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
  };

  ymaps.ready(initMapContacts);
  ymaps.ready(initMapContactsMoscow);
}

if (document.getElementById("events")) {
  var _accordionItems = document.querySelectorAll('.events__accordion-item-head');

  _accordionItems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elem.parentElement.classList.contains("is-show") ? accordionNotActive(elem) : accordionActive(elem);

      _accordionItems.forEach(function (el) {
        if (el.parentElement !== elem.parentElement) accordionNotActive(el);
      });
    });
  });
}

function heightBlock(block, items, count, gap) {
  var height = 0;

  for (var i = 0; i < count; i++) {
    height += items[i].getBoundingClientRect().height;
  }

  block.style.maxHeight = height + gap * (count - 1) + "px";
}

function bottomAbsolute(timelines, block, gap) {
  if (timelines) {
    var lastTimeline = timelines[timelines.length - 1].offsetHeight;
    block.style.bottom = "".concat(lastTimeline - gap, "px");
  }
}

function tabActive(btn, index, btns, elements) {
  btns.forEach(function (el) {
    return el.parentElement.classList.remove("active");
  });
  elements.forEach(function (el) {
    return el.classList.remove("active");
  });
  setTimeout(function () {
    elements.forEach(function (el) {
      return el.style.display = "none";
    });
    elements[index].style.display = 'block';
    elements[index].classList.add('active');
  }, 300);
  btn.parentElement.classList.add("active");
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  var panel = item.nextElementSibling;

  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  var panel = item.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  }
}

function resizeForHeroLeft(block) {
  var windowWidth = window.innerWidth;
  var containerWidth = container.scrollWidth;

  if (windowWidth > containerWidth) {
    var widthForMenu = (windowWidth - containerWidth) / 2;
    block.style.marginLeft = widthForMenu + 'px';
    console.log(widthForMenu);
  } else {
    block.style.marginLeft = '0';
  }
}

function afterHeroMore(count, btn, items) {
  if (items.length > count) {
    items.forEach(function (item, index) {
      if (index > count) {
        item.classList.add("d-none");
      }
    });
    btn.addEventListener("click", function () {
      items.forEach(function (item, index) {
        item.classList.remove("d-none");
      });
      btn.classList.add("d-none");
    });
  }
}

function initMap() {
  var myMap = new ymaps.Map("js-map-penza", {
    center: [53.184451071233134, 45.007014999999924],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13
  });
  var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
  var circlePlacemark = new ymaps.Placemark([53.184451071233134, 45.007014999999924], {}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  });
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMap);

function initMapMoscow() {
  var myMap = new ymaps.Map("js-map-moscow", {
    center: [55.7869050689375, 37.67187549999997],
    zoom: 13,
    minZoom: 13,
    controls: []
  }, {
    minZoom: 13
  });
  var placemarkDiv = ymaps.templateLayoutFactory.createClass("\n  <div class=\"placemark-custom\">\n    <span class=\"placemark__layout\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15.645 7.54741C15.645 8.93117 14.8282 10.8548 13.6386 12.8497C12.5829 14.6203 11.2788 16.374 10.1427 17.7311C8.94696 16.3197 7.63756 14.5599 6.59452 12.7978C5.42654 10.8246 4.64502 8.93422 4.64502 7.54741C4.64502 4.79601 7.06981 2.5 10.145 2.5C13.2202 2.5 15.645 4.79601 15.645 7.54741Z\" fill=\"#009A6D\" stroke=\"#009A6D\"/>\n        <circle cx=\"10.145\" cy=\"8\" r=\"2.5\" fill=\"white\" stroke=\"#009A6D\"/>\n      </svg>\n    </span>\n  </div>\n  ");
  var circlePlacemark = new ymaps.Placemark([55.7869050689375, 37.67187549999997], {}, {
    iconLayout: placemarkDiv,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 30
    }
  });
  myMap.geoObjects.add(circlePlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

ymaps.ready(initMapMoscow);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNvbnRhaW5lciIsImhlYWRlckFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlciIsImJ0blVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJ3aWR0aEZvck1lbnUiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlbCIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJhZGQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJnZXRFbGVtZW50QnlJZCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIml0ZW1zIiwiYnRuIiwiY29uc29sZSIsImxvZyIsImFmdGVySGVyb01vcmUiLCJpdGVtIiwic3dpcGVyMiIsImJyZWFrcG9pbnRzIiwidGFiQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiYWNjb3JkaW9uSXRlbXMiLCJmb3JtIiwibXlNb2RhbE9rIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJ0YWJBY3RpdmUiLCJpbmRleCIsInN3aXBlckxpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJtb2RhbCIsImJ0bnMiLCJteU1vZGFsIiwiaGlkZSIsInN3aXBlclFQIiwibGVuZ3RoIiwiYmxvY2siLCJoaXN0b3J5U3RyaXAiLCJoaXN0b3J5VGltZWxpbmUiLCJtb3JlIiwiYnRuTW9yZSIsIm1heEhlaWdodCIsImJvdHRvbUFic29sdXRlIiwiaGVpZ2h0QmxvY2tGb3JXaW5kb3ciLCJoZWlnaHRCbG9jayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja2JveCIsImNoZWNrZWRBbGwiLCJjaGVja2VkUmVzZXQiLCJhcmVBbGxDaGVja2VkIiwiZXZlcnkiLCJjaGVja2VkIiwiYXJlQ2hlY2tlZE9uZSIsInNvbWUiLCJkaXNhYmxlZCIsImluaXRNYXBDb250YWN0cyIsIm15TWFwIiwieW1hcHMiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsImNvbnRyb2xzIiwicGxhY2VtYXJrRGl2IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImluaXRNYXBDb250YWN0c01vc2NvdyIsInJlYWR5IiwiY291bnQiLCJnYXAiLCJoZWlnaHQiLCJpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZWxpbmVzIiwibGFzdFRpbWVsaW5lIiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEhlaWdodCIsInJlc2l6ZUZvckhlcm9MZWZ0IiwibWFyZ2luTGVmdCIsImluaXRNYXAiLCJpbml0TWFwTW9zY293Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FB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SUFHekNDLE9BQU8sRUFBRSxFQUhnQztJQUl6Q0MsUUFBUSxFQUFFO0VBSitCLENBQS9CLEVBS1Q7SUFDREQsT0FBTyxFQUFFO0VBRFIsQ0FMUyxDQUFaO0VBVUEsSUFBSUUsWUFBWSxHQUFHTixLQUFLLENBQUNPLHFCQUFOLENBQTRCQyxXQUE1QiwycEJBQW5CO0VBV0EsSUFBSUMsZUFBZSxHQUFHLElBQUlULEtBQUssQ0FBQ1UsU0FBVixDQUFvQixDQUFDLGdCQUFELEVBQWtCLGlCQUFsQixDQUFwQixFQUF5RCxFQUF6RCxFQUE2RDtJQUNqRkMsVUFBVSxFQUFFTCxZQURxRTtJQUVqRk0sU0FBUyxFQUFFO01BQ1RDLElBQUksRUFBRSxRQURHO01BRVRDLFdBQVcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRko7TUFHVEMsTUFBTSxFQUFFO0lBSEM7RUFGc0UsQ0FBN0QsQ0FBdEI7RUFRQWhCLEtBQUssQ0FBQ2lCLFVBQU4sQ0FBaUIvRSxHQUFqQixDQUFxQndFLGVBQXJCO0VBQ0FWLEtBQUssQ0FBQ00sUUFBTixDQUFldkUsTUFBZixDQUFzQixlQUF0QjtFQUNBaUUsS0FBSyxDQUFDTSxRQUFOLENBQWV2RSxNQUFmLENBQXNCLGdCQUF0QjtFQUNBaUUsS0FBSyxDQUFDTSxRQUFOLENBQWV2RSxNQUFmLENBQXNCLGNBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsbUJBQXRCO0VBQ0FpRSxLQUFLLENBQUNNLFFBQU4sQ0FBZXZFLE1BQWYsQ0FBc0IsY0FBdEI7QUFDRDs7QUFFRGtFLEtBQUssQ0FBQ2tCLEtBQU4sQ0FBWWtCLGFBQVoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idG5cIilcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tY29udGFpbmVyXCIpO1xuY29uc3QgaGVhZGVyQWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWFjY29yZGlvbi1oZWFkZXJcIilcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuY29uc3QgYnRuVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXVwJyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuXG4gIGlmICh3aW5kb3dXaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG5cbiAgICBjb25zdCB3aWR0aEZvck1lbnUgPSAod2luZG93V2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyXG4gICAgbWVudS5zdHlsZS53aWR0aCA9IDcyNSArIHdpZHRoRm9yTWVudSArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgbWVudS5zdHlsZS53aWR0aCA9ICcnO1xuICB9XG5cbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufSlcblxuaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgaGVhZGVyQWNjb3JkaW9uSXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnVyZ2VyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIG1lbnUuc3R5bGUud2lkdGggPSAnJztcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cbiAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDEwMCkge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9IGVsc2Uge1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICBpZiAod2luZG93LnNjcm9sbFkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxuICB9IGVsc2Uge1xuICAgIGJ0blVwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gIH1cbn0pXG5cbmlmICh3aW5kb3cuc2Nyb2xsWSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICBidG5VcC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKVxufSBlbHNlIHtcbiAgYnRuVXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3ICYmIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59KVxuXG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBuZXcgU3dpcGVyKFwiLmhlcm9fX2xlZnQtc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmhlcm9fX2xlZnQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuaGVyb19fbGVmdC1zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgfSlcblxuICBuZXcgU3dpcGVyKFwiLmhlcm9fX3JpZ2h0LXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmhlcm9fX3JpZ2h0LXN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuaGVyb19fcmlnaHQtc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFmdGVyLWhlcm9fX2JveFwiKVxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFmdGVyLWhlcm9fX2J0blwiKVxuICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aClcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODI3KSB7XG4gICAgYWZ0ZXJIZXJvTW9yZSgzLCBidG4sIGl0ZW1zKVxuICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE0MCkge1xuICAgIGFmdGVySGVyb01vcmUoNSwgYnRuLCBpdGVtcylcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MjcpIHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICBhZnRlckhlcm9Nb3JlKDMsIGJ0biwgaXRlbXMpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExNDApIHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICBhZnRlckhlcm9Nb3JlKDUsIGJ0biwgaXRlbXMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpXG5cbiAgICB9XG4gIH0pXG5cbiAgbGV0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmN1c3RvbWVyc19fc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLmN1c3RvbWVyc19fcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLmN1c3RvbWVyc19fc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuY3VzdG9tZXJzX19zd2lwZXItcHJldlwiXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNTY3OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9LFxuICAgICAgMTExMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKSkge1xuICBjb25zdCB0YWJCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmtfX3RhYi1oZWFkLWJ0blwiKSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmtfX3RhYi1pdGVtXCIpKTtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFjYW5jaWVzX19hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJuc2hpcF9fZm9ybS1qcycpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG4gIHRhYkFjdGl2ZSh0YWJCdXR0b25zWzBdLCAwLCB0YWJCdXR0b25zLCBlbGVtZW50cylcblxuICB0YWJCdXR0b25zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt0YWJBY3RpdmUoYnRuLCBpbmRleCx0YWJCdXR0b25zLCBlbGVtZW50cyl9KVxuICB9KVxuXG4gIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoZWxlbSkgOiBhY2NvcmRpb25BY3RpdmUoZWxlbSlcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSBhY2NvcmRpb25Ob3RBY3RpdmUoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHN3aXBlckxpdmUgPSBuZXcgU3dpcGVyKFwiLmxpdmVfX3N3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5saXZlX19wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIubGl2ZV9fc3dpcGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIubGl2ZV9fc3dpcGVyLXByZXZcIlxuICAgIH0sXG4gIH0pXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxcFwiKSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3VibWl0LW1vZGFsXCIpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xcF9fYnV0dG9uXCIpO1xuICBjb25zdCBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChtb2RhbCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFwX19tb2RhbC1mb3JtXCIpXG4gIGNvbnN0IG15TW9kYWxPayA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1va1wiKSk7XG5cbiAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteU1vZGFsLnNob3coKTtcbiAgICB9KVxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBteU1vZGFsLmhpZGUoKTtcbiAgICBteU1vZGFsT2suc2hvdygpO1xuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXJcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXJcIikuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGxldCBzd2lwZXJRUCA9IG5ldyBTd2lwZXIoXCIucXBfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogXCIucXBfX3BhZ2luYXRpb25cIixcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgIG5leHRFbDogXCIucXBfX3N3aXBlci1uZXh0XCIsXG4gICAgICAgICAgcHJldkVsOiBcIi5xcF9fc3dpcGVyLXByZXZcIlxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFwX19zd2lwZXItc2xpZGUnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXBfX3N3aXBlci1zbGlkZScpLmxlbmd0aCA8IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnFwX19zd2lwZXItbmF2aWdhdGlvblwiKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgIH0pXG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpKSB7XG4gIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19ibG9ja1wiKTtcbiAgY29uc3QgaGlzdG9yeVN0cmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5X19zdHJpcFwiKVxuICBjb25zdCBoaXN0b3J5VGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpc3RvcnlfX3RpbWVsaW5lXCIpXG4gIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlfX21vcmVcIilcbiAgY29uc3QgYnRuTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbW9yZS1idG5cIilcblxuICBpZiAoaGlzdG9yeVRpbWVsaW5lLmxlbmd0aCA8IDUpIHtcbiAgICBtb3JlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBibG9jay5zdHlsZS5tYXhIZWlnaHQgPSBcIm5vbmVcIlxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgYm90dG9tQWJzb2x1dGUoaGlzdG9yeVRpbWVsaW5lLCBoaXN0b3J5U3RyaXAsIDE4KVxuICAgIH0gZWxzZSB7XG4gICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCA0MClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0gZWxzZSB7XG4gICAgZnVuY3Rpb24gaGVpZ2h0QmxvY2tGb3JXaW5kb3cgKCkge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgICAgIGhlaWdodEJsb2NrKGJsb2NrLCBoaXN0b3J5VGltZWxpbmUsIDQsIDU4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0QmxvY2soYmxvY2ssIGhpc3RvcnlUaW1lbGluZSwgNCwgODApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVpZ2h0QmxvY2tGb3JXaW5kb3coKVxuXG4gICAgbW9yZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gaGVpZ2h0QmxvY2tGb3JXaW5kb3cpXG5cbiAgICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBoZWlnaHRCbG9ja0ZvcldpbmRvdylcbiAgICAgIG1vcmUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgYmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgMTgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICAgIGJvdHRvbUFic29sdXRlKGhpc3RvcnlUaW1lbGluZSwgaGlzdG9yeVN0cmlwLCAxOClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3R0b21BYnNvbHV0ZShoaXN0b3J5VGltZWxpbmUsIGhpc3RvcnlTdHJpcCwgNDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuXG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaWNlbnNlc1wiKSkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGljZW5zZXNfX2ZpbHRlci1pbnB1dFwiKVxuICBjb25zdCBjaGVja2VkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1hbGxcIilcbiAgY29uc3QgY2hlY2tlZFJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saWNlbnNlc19fZmlsdGVyLWJ0bi1yZXNldFwiKVxuXG4gIGNvbnN0IGFyZUFsbENoZWNrZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oY2hlY2tib3gpLmV2ZXJ5KGVsZW0gPT4gZWxlbS5jaGVja2VkKVxuICB9XG5cbiAgY29uc3QgYXJlQ2hlY2tlZE9uZSA9ICgpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjaGVja2JveCkuc29tZShlbGVtID0+IGVsZW0uY2hlY2tlZClcbiAgfVxuXG4gIGNoZWNrZWRBbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jaGVja2VkID0gdHJ1ZSlcbiAgICBjaGVja2VkUmVzZXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgIGNoZWNrZWRBbGwuZGlzYWJsZWQgPSB0cnVlXG4gIH0pXG5cbiAgY2hlY2tlZFJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hlY2tib3guZm9yRWFjaChlbGVtID0+IGVsZW0uY2hlY2tlZCA9IGZhbHNlKVxuICAgIGNoZWNrZWRSZXNldC5kaXNhYmxlZCA9IHRydWVcbiAgICBjaGVja2VkQWxsLmRpc2FibGVkID0gZmFsc2VcbiAgfSlcblxuICBjaGVja2JveC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjaGVja2VkQWxsLmRpc2FibGVkID0gYXJlQWxsQ2hlY2tlZCgpXG4gICAgICBjaGVja2VkUmVzZXQuZGlzYWJsZWQgPSAhYXJlQ2hlY2tlZE9uZSgpXG4gICAgfSlcbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdHNcIikpIHtcbiAgZnVuY3Rpb24gaW5pdE1hcENvbnRhY3RzKCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJjb250YWN0c19fbWFwLXBlbnphXCIsIHtcbiAgICAgIGNlbnRlcjogWzUzLjE4NDQ1MTA3MTIzMzEzNCw0NS4wMDcwMTQ5OTk5OTk5MjRdLFxuICAgICAgem9vbTogMTMsXG4gICAgICBtaW5ab29tOiAxMyxcbiAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0sIHtcbiAgICAgIG1pblpvb206IDEzLFxuICAgIH0pXG5cblxuICAgIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0se30sIHtcbiAgICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICAgIGljb25TaGFwZToge1xuICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgcmFkaXVzOiAzMFxuICAgICAgfVxuICAgIH0pXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0TWFwQ29udGFjdHNNb3Njb3coKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImNvbnRhY3RzX19tYXAtbW9zY293XCIsIHtcbiAgICAgIGNlbnRlcjogWzU1Ljc4NjkwNTA2ODkzNzUsMzcuNjcxODc1NDk5OTk5OTddLFxuICAgICAgem9vbTogMTMsXG4gICAgICBtaW5ab29tOiAxMyxcbiAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0sIHtcbiAgICAgIG1pblpvb206IDEzLFxuICAgIH0pXG5cblxuICAgIHZhciBwbGFjZW1hcmtEaXYgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrLWN1c3RvbVwiPlxuICAgIDxzcGFuIGNsYXNzPVwicGxhY2VtYXJrX19sYXlvdXRcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY0NSA3LjU0NzQxQzE1LjY0NSA4LjkzMTE3IDE0LjgyODIgMTAuODU0OCAxMy42Mzg2IDEyLjg0OTdDMTIuNTgyOSAxNC42MjAzIDExLjI3ODggMTYuMzc0IDEwLjE0MjcgMTcuNzMxMUM4Ljk0Njk2IDE2LjMxOTcgNy42Mzc1NiAxNC41NTk5IDYuNTk0NTIgMTIuNzk3OEM1LjQyNjU0IDEwLjgyNDYgNC42NDUwMiA4LjkzNDIyIDQuNjQ1MDIgNy41NDc0MUM0LjY0NTAyIDQuNzk2MDEgNy4wNjk4MSAyLjUgMTAuMTQ1IDIuNUMxMy4yMjAyIDIuNSAxNS42NDUgNC43OTYwMSAxNS42NDUgNy41NDc0MVpcIiBmaWxsPVwiIzAwOUE2RFwiIHN0cm9rZT1cIiMwMDlBNkRcIi8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMC4xNDVcIiBjeT1cIjhcIiByPVwiMi41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGApXG5cbiAgICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10se30sIHtcbiAgICAgIGljb25MYXlvdXQ6IHBsYWNlbWFya0RpdixcbiAgICAgIGljb25TaGFwZToge1xuICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgcmFkaXVzOiAzMFxuICAgICAgfVxuICAgIH0pXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgfVxuICB5bWFwcy5yZWFkeShpbml0TWFwQ29udGFjdHMpXG4gIHltYXBzLnJlYWR5KGluaXRNYXBDb250YWN0c01vc2Nvdylcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRzXCIpKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50c19fYWNjb3JkaW9uLWl0ZW0taGVhZCcpO1xuICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGVsZW0pIDogYWNjb3JkaW9uQWN0aXZlKGVsZW0pXG4gICAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQgIT09IGVsZW0ucGFyZW50RWxlbWVudCkgYWNjb3JkaW9uTm90QWN0aXZlKGVsKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBoZWlnaHRCbG9jayAoYmxvY2ssIGl0ZW1zLCBjb3VudCwgZ2FwKSB7XG4gIGxldCBoZWlnaHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGhlaWdodCArPSBpdGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIGJsb2NrLnN0eWxlLm1heEhlaWdodCA9IChoZWlnaHQgKyAoZ2FwICogKGNvdW50IC0gMSkpKSArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gYm90dG9tQWJzb2x1dGUodGltZWxpbmVzLCBibG9jaywgZ2FwKSB7XG5cbiAgaWYgKHRpbWVsaW5lcykge1xuICAgIGNvbnN0IGxhc3RUaW1lbGluZSA9IHRpbWVsaW5lc1t0aW1lbGluZXMubGVuZ3RoIC0gMV0ub2Zmc2V0SGVpZ2h0XG5cbiAgICBibG9jay5zdHlsZS5ib3R0b20gPSBgJHtsYXN0VGltZWxpbmUgLSBnYXB9cHhgXG4gIH1cblxufVxuXG5mdW5jdGlvbiB0YWJBY3RpdmUoYnRuLCBpbmRleCwgYnRucywgZWxlbWVudHMpIHtcbiAgYnRucy5mb3JFYWNoKChlbCkgPT4gZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXG4gICAgZWxlbWVudHNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICB9LCAzMDApXG5cbiAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVGb3JIZXJvTGVmdCAoYmxvY2spIHtcbiAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5zY3JvbGxXaWR0aFxuXG4gIGlmICh3aW5kb3dXaWR0aCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhGb3JNZW51ID0gKHdpbmRvd1dpZHRoIC0gY29udGFpbmVyV2lkdGgpIC8gMlxuICAgIGJsb2NrLnN0eWxlLm1hcmdpbkxlZnQgPSB3aWR0aEZvck1lbnUgKyAncHgnXG4gICAgY29uc29sZS5sb2cod2lkdGhGb3JNZW51KVxuICB9IGVsc2Uge1xuICAgIGJsb2NrLnN0eWxlLm1hcmdpbkxlZnQgPSAnMCdcbiAgfVxufVxuXG5mdW5jdGlvbiBhZnRlckhlcm9Nb3JlIChjb3VudCwgYnRuLCBpdGVtcykge1xuICBpZiAoaXRlbXMubGVuZ3RoID4gY291bnQpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gY291bnQpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgfSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwianMtbWFwLXBlbnphXCIsIHtcbiAgICBjZW50ZXI6IFs1My4xODQ0NTEwNzEyMzMxMzQsNDUuMDA3MDE0OTk5OTk5OTI0XSxcbiAgICB6b29tOiAxMyxcbiAgICBtaW5ab29tOiAxMyxcbiAgICBjb250cm9sczogW11cbiAgfSwge1xuICAgIG1pblpvb206IDEzLFxuICB9KVxuXG5cbiAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTMuMTg0NDUxMDcxMjMzMTM0LDQ1LjAwNzAxNDk5OTk5OTkyNF0se30sIHtcbiAgICBpY29uTGF5b3V0OiBwbGFjZW1hcmtEaXYsXG4gICAgaWNvblNoYXBlOiB7XG4gICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0sXG4gICAgICByYWRpdXM6IDMwXG4gICAgfVxuICB9KVxuICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG59XG5cbnltYXBzLnJlYWR5KGluaXRNYXApXG5cbmZ1bmN0aW9uIGluaXRNYXBNb3Njb3coKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJqcy1tYXAtbW9zY293XCIsIHtcbiAgICBjZW50ZXI6IFs1NS43ODY5MDUwNjg5Mzc1LDM3LjY3MTg3NTQ5OTk5OTk3XSxcbiAgICB6b29tOiAxMyxcbiAgICBtaW5ab29tOiAxMyxcbiAgICBjb250cm9sczogW11cbiAgfSwge1xuICAgIG1pblpvb206IDEzLFxuICB9KVxuXG5cbiAgdmFyIHBsYWNlbWFya0RpdiA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gIDxkaXYgY2xhc3M9XCJwbGFjZW1hcmstY3VzdG9tXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZW1hcmtfX2xheW91dFwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjQ1IDcuNTQ3NDFDMTUuNjQ1IDguOTMxMTcgMTQuODI4MiAxMC44NTQ4IDEzLjYzODYgMTIuODQ5N0MxMi41ODI5IDE0LjYyMDMgMTEuMjc4OCAxNi4zNzQgMTAuMTQyNyAxNy43MzExQzguOTQ2OTYgMTYuMzE5NyA3LjYzNzU2IDE0LjU1OTkgNi41OTQ1MiAxMi43OTc4QzUuNDI2NTQgMTAuODI0NiA0LjY0NTAyIDguOTM0MjIgNC42NDUwMiA3LjU0NzQxQzQuNjQ1MDIgNC43OTYwMSA3LjA2OTgxIDIuNSAxMC4xNDUgMi41QzEzLjIyMDIgMi41IDE1LjY0NSA0Ljc5NjAxIDE1LjY0NSA3LjU0NzQxWlwiIGZpbGw9XCIjMDA5QTZEXCIgc3Ryb2tlPVwiIzAwOUE2RFwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEwLjE0NVwiIGN5PVwiOFwiIHI9XCIyLjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMDA5QTZEXCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYClcblxuICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzg2OTA1MDY4OTM3NSwzNy42NzE4NzU0OTk5OTk5N10se30sIHtcbiAgICBpY29uTGF5b3V0OiBwbGFjZW1hcmtEaXYsXG4gICAgaWNvblNoYXBlOiB7XG4gICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0sXG4gICAgICByYWRpdXM6IDMwXG4gICAgfVxuICB9KVxuICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG59XG5cbnltYXBzLnJlYWR5KGluaXRNYXBNb3Njb3cpIl19
