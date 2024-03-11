import{a as f,S as b,i as h}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function w(i,t,a){f.defaults.baseURL="https://pixabay.com/api/";const o={params:{key:"42790970-549b29792af5c5ee610ad8401",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t,q:`${i}`}};return(await f.get("",o)).data}function L(i){return i.map(t=>`<li class="gallery-item">
          <div class="gallery-image-tumb">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
            </a>
          </div>
            <ul class="image-info">
              <li class="image-info-item">
                <h4 class="image-info-item-title">Likes</h4>
                <p class="image-info-item-text">${t.likes}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Views</h4>
                <p class="image-info-item-text">${t.views}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Comments</h4>
                <p class="image-info-item-text">${t.comments}</p>
              </li>
              <li class="image-info-item">
                <h4 class="image-info-item-title">Downloads</h4>
                <p class="image-info-item-text">${t.downloads}</p>
              </li>
            </ul>
        </li>`).join("")}const g=document.querySelector(".form"),m=document.querySelector(".gallery"),u=document.querySelector(".loader"),n=document.querySelector("#load-more-btn"),F=new b(".gallery a",{captionsData:"alt",captionDelay:250});let c,d=15,r;function p(i){h.error({message:i,maxWidth:"432px",position:"topRight",messageSize:16,backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"})}async function y(i){if(n.style.display="none",i){u.style.display="grid";let t;try{const a=await w(i,r,d),o=a.hits;if(t=Math.ceil(a.totalHits/d),o.length){const e=await L(o);m.insertAdjacentHTML("beforeend",e),r!=1&&x(),F.refresh()}else p("Sorry, there are no images matching your search query. Please try again!")}catch(a){p(`${a}`)}finally{u.style.display="none",r<t&&(n.style.display="block"),r===t&&h.info({message:"We're sorry, but you've reached the end of search results.",maxWidth:"432px",position:"topRight",messageSize:16})}}}function x(){const i=m.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})}g.addEventListener("submit",i=>{i.preventDefault(),c=i.target.elements.search.value.trim(),g.reset(),m.innerHTML=null,r=1,y(c)});n.addEventListener("click",()=>{r+=1,y(c)});
//# sourceMappingURL=commonHelpers.js.map
