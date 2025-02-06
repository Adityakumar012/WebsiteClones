const tabItem=document.querySelectorAll(".tab-item");
const tabContentItem=document.querySelectorAll(".tab-content-item");
function removeB(){
    tabItem.forEach(item=>item.classList.remove("tab-border"));
}
function removeS(){
    tabContentItem.forEach(item=>item.classList.remove("show"));
}
function selectItem(e){
    removeB();
    removeS();
    this.classList.add("tab-border");
    const tabNum=document.querySelector(`#${this.id}-content`);
    tabNum.classList.add('show');
}
tabItem.forEach(item=>item.addEventListener("click",selectItem));