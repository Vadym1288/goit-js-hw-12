import{S as f,i as g}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function u(i){const e=new URLSearchParams({key:"42790970-549b29792af5c5ee610ad8401",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${e}&q=${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function h(i){return i.map(e=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${e.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${e.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${e.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${e.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=new f(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){g.error({message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}function p(i){i&&(m.reset(),l.innerHTML="",n.style.display="grid",u(i).then(e=>{const s=e.hits;s.length?(l.innerHTML=h(s),d.refresh()):c("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>c(e)).finally(()=>n.style.display="none"))}m.addEventListener("submit",i=>{i.preventDefault();const e=i.target.elements.search.value;p(e)});
//# sourceMappingURL=commonHelpers.js.map
