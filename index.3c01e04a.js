var modalBNM=document.querySelector('[name="buy-now-menu-modal"]'),overlayBNM=document.querySelector('[name="buy-now-menu-overlay"]'),openModalBtnBNM=document.querySelector('[name="buy-now-menu-open"]'),closeModalBtnBNM=document.querySelector('[name="buy-now-menu-close"]'),openModalBNM=function(){modalBNM.classList.remove("is-hidden"),overlayBNM.classList.remove("is-hidden")};openModalBtnBNM.addEventListener("click",openModalBNM,{passive:!0});var closeModalBNM=function(){modalBNM.classList.add("is-hidden"),overlayBNM.classList.add("is-hidden")};closeModalBtnBNM.addEventListener("click",closeModalBNM,{passive:!0}),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modalBNM.classList.contains("is-hidden")||closeModalBNM()}),{passive:!0});
//# sourceMappingURL=index.3c01e04a.js.map
