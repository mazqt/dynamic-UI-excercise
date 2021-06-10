const carousel = (function () {
  const ele = document.getElementsByClassName("image-carousel");
  const buttons = document.getElementsByClassName("selector-button");
  let currentImg = 1;

  const _timer = function () {
    setTimeout(function () {
      if (currentImg == 9) {
        _swapImage(1);
      } else {
        _swapImage(currentImg + 1);
      }
      _timer();
    }, 8000);
  };

  const _swapImage = function (num) {
    ele[0].setAttribute("class", `image-carousel _${num}`);
    buttons[currentImg].classList.toggle("selected");
    currentImg = num;
    buttons[currentImg].classList.toggle("selected");
  };

  const load = function () {
    var i;
    for (i = 0; i < 11; i++) {
      if (i == 0) {
        buttons[i].addEventListener("click", function () {
          if (currentImg == 1) {
            _swapImage(9);
          } else {
            _swapImage(currentImg - 1);
          }
        });
      } else if (i == 10) {
        buttons[i].addEventListener("click", function () {
          if (currentImg == 9) {
            _swapImage(1);
          } else {
            _swapImage(currentImg + 1);
          }
        });
      } else {
        buttons[i].addEventListener("click", _swapImage.bind(null, i));
      }
    }
    _timer();
  };

  return { load };
})();

export default carousel;
