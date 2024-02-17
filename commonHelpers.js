import{i as a,S as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const h={key:"42275795-67b08ec4cba837c0f5cc84374",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""};g.addEventListener("submit",s=>{s.preventDefault(),l.style.display="block";const t=s.target.elements.input.value;h.q=t,p().then(i=>u(i)).catch(i=>{console.log(i),a.show({message:"An error occurred while retrieving images. Please try again.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"})}),s.target.reset()});function p(){const s=new URLSearchParams(h);return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(t.ok)return t.json();throw new Error(t.status)}).catch(t=>{console.log(t),a.show({message:"An error occurred while fetching images. Please try again.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"})})}function u(s){if(s.hits.length===0)a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),c.innerHTML="";else{const i=s.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
      </a>
      <div class="img-content">
      <div>
      <h3>Likes</h3>
      <p>${r.likes}</p>
      </div>

      <div>
      <h3>Views</h3>
      <p>${r.views}</p>
      </div>

      <div>
      <h3>Comments</h3>
      <p>${r.comments}</p>
      </div>

      <div>
      <h3>Downloads</h3>
      <p>${r.downloads}</p>
      </div>
      </div>
      `).join("");c.innerHTML=i}new d(".gallery-link").refresh(),l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
