const dropdown = (function () {
  const createEventListeners = function () {
    const menus = document.getElementsByClassName("menu-button");
    for (let menu of menus) {
      const dropdown = menu.getElementsByClassName("dropdown-menu");
      menu.addEventListener("click", function () {
        dropdown[0].classList.toggle("hidden");
      });
    }
  };

  return { createEventListeners };
})();
export default dropdown;
