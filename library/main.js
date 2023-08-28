document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("burger").addEventListener("click",function()
  {
    document.querySelector(".header").classList.toggle("open")
  })

  document.getElementById("profile").addEventListener("click",function()
  {
    document.querySelector(".ModalProfile_noAuth").classList.toggle("noAuth")
  })
})