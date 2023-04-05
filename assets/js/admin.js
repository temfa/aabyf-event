window.addEventListener("DOMContentLoaded", () => {
  let sideNavbar = document.getElementById("side-nav");

  if (sideNavbar)
    sideNavbar.innerHTML += `
  <div id="mySidenav" class="sidenav">
        <span id="close" class="fas fa-times"></span>
        <img src="./assets/images/logo.png" alt="" />
      <a
        href="dashboard.html"
        class="links"
        ><span class="fas fa-igloo"></span>
        <p>Dashboard</p></a
      >
      <a
        href="add-product.html"
        class="links"
        ><span class="fas fa-shopping-cart"></span>
        <p>New Products</p></a
      >
      <!-- <a href="sell.php" class="links"><span class="fa fa-cart-plus"></span><p>  Make Sale</p></a> -->
      <a
        href="remove.html"
        class="links"
        ><span class="fas fa-trash"></span>
        <p>Remove Product</p></a
      >
      <a
        href="inventory.html"
        class="links"
        ><span class="fas fa-clipboard-list"></span>
        <p>Inventory</p></a
      >
     
      <!-- <a href="messages.php" class="links <?php if($page =='messages'){ echo 'active'; }?>"><span class="fas fa-envelope"></span><p>  Messages</p></a> -->
      <a href="#" id="logout" class="links"
        ><span class="fas fa-sign-out-alt"></span>
        <p>Logout</p></a
      >
    </div>
  `;
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("a");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].classList.add("active");
    }
  }
  let closeAction = document.getElementById("close");
  closeAction.addEventListener("click", () => {
    document.getElementById("main").classList.remove("show-sidebarmain");
    document.getElementById("mySidenav").classList.remove("show-sidebar");
    document.querySelectorAll(".links").forEach((link) => {
      link.classList.remove = "show-sidebar";
    });
  });
});

function openNav() {
  document.getElementById("main").classList.add("show-sidebarmain");
  document.getElementById("mySidenav").classList.add("show-sidebar");
  document.querySelectorAll(".links").forEach((link) => {
    link.classList.add = "show-sidebar";
  });
}
