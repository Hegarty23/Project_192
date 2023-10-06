AFRAME.registerComponent("moveBullet", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.querySelector("#ins1");
          bullet.setAttribute("visible", true)
          
  
        }
      })
}
})