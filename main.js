(() => {
  "use strict";
  (function () {
    const e = document.getElementsByClassName("image-carousel"),
      t = document.getElementsByClassName("selector-button");
    let n = 1;
    const s = function () {
        setTimeout(function () {
          c(9 == n ? 1 : n + 1), s();
        }, 8e3);
      },
      c = function (s) {
        e[0].setAttribute("class", `image-carousel _${s}`),
          t[n].classList.toggle("selected"),
          (n = s),
          t[n].classList.toggle("selected");
      };
    return {
      load: function () {
        var e;
        for (e = 0; e < 11; e++)
          0 == e
            ? t[e].addEventListener("click", function () {
                c(1 == n ? 9 : n - 1);
              })
            : 10 == e
            ? t[e].addEventListener("click", function () {
                c(9 == n ? 1 : n + 1);
              })
            : t[e].addEventListener("click", c.bind(null, e));
        s();
      },
    };
  })().load();
})();
