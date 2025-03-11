import{A as p,S as v,i as b,a as g}from"./assets/vendor-BjHzPlUh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".nav-menu"),t=document.querySelector(".nav-item"),o=document.getElementById("submenu");e&&t&&o&&e.addEventListener("click",function(r){r.preventDefault();const i=t.classList.toggle("active");e.setAttribute("aria-expanded",i),i?o.removeAttribute("hidden"):o.setAttribute("hidden","true")}),document.querySelectorAll(".submenu a").forEach(r=>{r.addEventListener("click",function(){t.classList.remove("active"),o.setAttribute("hidden","true"),e.setAttribute("aria-expanded","false")})});const s=document.getElementById("scroll-to-footer"),n=document.getElementById("footer");s&&s.addEventListener("click",function(r){r.preventDefault(),n?window.scrollTo({top:n.offsetTop,behavior:"smooth"}):console.error("Footer section not found!")})});const y=document.querySelector(".burger"),h=document.querySelector(".close"),l=document.querySelector(".mobile-box"),d=document.body;y.addEventListener("click",function(){document.documentElement.classList.add("menu-open"),l.style.left="0",d.classList.add("no-scroll")});h.addEventListener("click",function(){document.documentElement.classList.remove("menu-open"),l.style.left="-100%",d.classList.remove("no-scroll")});document.querySelectorAll(".mob-nav a").forEach(e=>{e.addEventListener("click",function(){document.documentElement.classList.remove("menu-open"),l.style.left="-100%",d.classList.remove("no-scroll");const t=this.getAttribute("href").substring(1),o=document.getElementById(t);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})});document.getElementById("mobile-order").addEventListener("click",function(){document.documentElement.classList.remove("menu-open"),l.style.left="-100%",d.classList.remove("no-scroll");const e=document.getElementById("footer");e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",function(){new p(".about-me-info-list",{duration:400,openOnInit:[0],showMultiple:!0,onOpen:t=>{setTimeout(()=>{e(t,"open")},0)},onClose:t=>{setTimeout(()=>{e(t,"close")},0)}});function e(t,o){const s=t.querySelector(".accordion-close-icon use");s&&s.setAttribute("href",o==="open"?"/img/icons.svg#icon-accordion-opensvg":"/img/icons.svg#icon-accordion-closesvg")}document.querySelectorAll(".about-me-info-item").forEach((t,o)=>{e(t,o===0?"open":"close")})});//! === swiper ===
new v(".projects-slider",{loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".next-slide",prevEl:".prev-slide"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",()=>{new p(".list-qestions",{duration:500,showMultiple:!0}),document.querySelectorAll(".button-accordion").forEach(t=>{const o=t.closest(".topic-button"),s=o==null?void 0:o.nextElementSibling,n=t.querySelector("use");s&&t.addEventListener("click",()=>{s.classList.toggle("open"),s.classList.contains("open")?n.setAttribute("href","/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg"):n.setAttribute("href","/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg")})})});async function w(){try{const{data:e}=await g.get("https://portfolio-js.b.goit.study/api/reviews");return e}catch(e){console.error("Error: ",e)}}function E(e){return e.map(({_id:t,author:o,avatar_url:s,review:n})=>`
		<li class="swiper-slide review-card">
		  <img src="${s}" alt="${o}"/>
			<div class="review-info">
			  <h4>${o}</h4>
				<p>${n}</p>
			</div>
		</li>
		`).join("")}const L=document.querySelector(".reviews-container"),S=document.querySelector(".reviews-list"),u=document.querySelector(".reviews-error"),q=document.querySelector(".reviews-button-prev"),m=document.querySelector(".reviews-button-next"),A=document.querySelector(".reviews-can-see");let a=!1;document.addEventListener("DOMContentLoaded",async()=>{try{let o=function(){q.toggleAttribute("disabled",t.isBeginning),m.toggleAttribute("disabled",t.isEnd)};const e=await w();if(!e||e.length===0){u.classList.remove("hidden"),u.classList.add("css-err-mes"),m.setAttribute("disabled","true"),a=!0;return}S.innerHTML=E(e);const t=new v(A,{direction:"horizontal",loop:!1,spaceBetween:16,navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},resizeObserver:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});t.on("slideChange",o),o()}catch(e){a=!0,console.error(e)}});const B=new IntersectionObserver(e=>{e.forEach(t=>{a&&t.isIntersecting&&b.error({title:"Error",message:"No feedback data about reviews. We are solving the problem",position:"topRight"})})},{threshold:.2});B.observe(L);const f=document.querySelector(".footer-form"),I=document.querySelector(".btn-close-res"),c=document.querySelector(".modal-window"),O=document.querySelector("body"),P="https://portfolio-js.b.goit.study/api",T="/requests";f.addEventListener("submit",async e=>{e.preventDefault();try{const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim(),s=JSON.stringify({email:t,comment:o}),n=P+T,r=await g.post(n,s,{headers:{accept:"application/json","Content-Type":"application/json"}});c.classList.add("show"),f.reset(),k(),c.addEventListener("click",i=>{i.target===i.currentTarget&&(console.log(i.target),c.classList.remove("show"))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&c.classList.remove("show")}),I.addEventListener("click",i=>{c.classList.remove("show")})}catch{b.show({backgroundColor:"RGBA(237, 59, 68, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"false",position:"topRight",message:"Error. Please, try again later"})}});function k(){O.classList.add(".disable-scroll")}"scrollBehavior"in document.documentElement.style||document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&(o.scrollIntoView({behavior:"smooth"}),history.pushState(null,null,this.getAttribute("href")))})});
//# sourceMappingURL=index.js.map
