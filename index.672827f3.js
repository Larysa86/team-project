!function(){var e,t,o,n,c;$(".multiple-items").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-opn]"),closeModalBtn:document.querySelector("[data-modal-cls]"),modal:document.querySelector("[data-modal-wind]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelector(".mobile-menu-nav"),c=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",c),o.addEventListener("click",c),n.addEventListener("click",(function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.remove("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var l=document.querySelectorAll(".header__link[data-goto]");if(l.length>0){function d(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var o=document.querySelector(t.dataset.goto).getBoundingClientRect().top;window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault()}}l.forEach((function(e){e.addEventListener("click",d)}))}window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,o=document.getElementsByClassName("dropdown-content");for(t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&n.classList.remove("show")}}};var a=document.querySelector(".back-to-top"),r=document.querySelector(".progress-bar"),i=function(){return document.documentElement||document.body};document.addEventListener("scroll",(function(){console.log("Scroll Height: ",i().scrollHeight),console.log("Client Height: ",i().clientHeight);var e=i().scrollTop/(i().scrollHeight-i().clientHeight)*100;r.style.width="".concat(e,"%"),i().scrollTop>100?a.classList.remove("hidden"):a.classList.add("hidden")})),a.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth"})}))}();
//# sourceMappingURL=index.672827f3.js.map