/* empty css                      */import{S as n,N as d,P as u,G as p}from"./assets/vendor-c762a03d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();n.use([d,u,p]);new n(".swiper_adv",{direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:2,slidesPerGroup:4,spaceBetween:24,grid:{rows:2,fill:"row"}}}});const g=document.querySelector(".burger-btn"),c=document.querySelector(".menu-window"),w=document.querySelector(".menu-close-btn");function a(){c.classList.remove("is-open")}function f(){c.classList.toggle("is-open")}g.addEventListener("click",f);w.addEventListener("click",a);document.addEventListener("keydown",o=>{o.key==="Escape"&&c.classList.contains("is-open")&&a()});document.addEventListener("click",o=>{o.composedPath().includes(c)&&a()});window.addEventListener("resize",()=>{window.innerWidth>=1200&&a()});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".play_heading div"),i=o.querySelector("#bottom"),r=document.querySelector(".card_list"),s=document.querySelectorAll(".card_item");let e=!1;gsap.set(r,{maxHeight:s[0].offsetHeight+"px",opacity:1}),gsap.set(s,{opacity:t=>t===0?1:0}),o.addEventListener("click",()=>{e?(gsap.to(r,{maxHeight:s[0].offsetHeight+"px",opacity:1,duration:.5,ease:"power2.in"}),gsap.to(s,{opacity:t=>t===0?1:0,duration:.5,ease:"power2.in",stagger:.1})):(gsap.to(r,{maxHeight:r.scrollHeight,opacity:1,duration:.5,ease:"power2.out"}),gsap.to(s,{opacity:1,duration:.5,ease:"power2.out",stagger:.1})),gsap.to(i,{rotate:e?0:180,duration:.3,ease:"power2.out"}),e=!e})});n.use([d,u,p]);new n(".reviews-swiper",{direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:8,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:1,grid:{rows:2,fill:"row"}}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".cookies-popup"),i=document.querySelector(".overlay");setTimeout(()=>{o.classList.add("show-cookies-popup"),i.classList.add("show-overlay")},1e3),document.querySelectorAll(".decline, .accept").forEach(r=>{r.addEventListener("click",()=>{o.classList.remove("show-cookies-popup"),i.classList.remove("show-overlay")})})});
//# sourceMappingURL=commonHelpers2.js.map
