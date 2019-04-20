const getCoords = (x, y, width) => {
  const pixel = y * (width * 4) + x * 4;
  return [pixel, pixel + 1, pixel + 2, pixel + 3];
}

const applyColor = (imageData, color) => {
  const startX = 279;
  const startY = 56;
  const endX = 279 + 26;
  const endY = 56 + 27;

  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      const [redIndex, blueIndex, greenIndex, alphaIndex] = getCoords(i, j, imageData.width)
      imageData.data[redIndex] = 178;
      imageData.data[blueIndex] = 3;
      imageData.data[greenIndex] = 111;
    }
  }
}

const init = () => {
  const image = document.querySelector("#source-img");
  const canvas = document.querySelector("#img-canvas");
  const context = canvas.getContext('2d');
  const colors = document.querySelectorAll('input[name=color]');

  const drawImage = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, 417.75, 494.25)
  }

  const changeColor = (color) => {
    drawImage();

    context.fillStyle = color;
    context.globalCompositeOperation = "overlay";


    context.moveTo(206, 91);
    context.bezierCurveTo(218, 69, 240, 98, 219, 101)
    context.lineTo(206, 91);

    context.moveTo(268, 70);
    context.bezierCurveTo(275, 47, 322, 68, 279, 84)
    context.lineTo(268, 70);

    context.moveTo(320, 79);
    context.bezierCurveTo(327, 57, 359, 76, 334, 91)
    context.lineTo(320, 79);


    context.moveTo(337, 130);
    context.bezierCurveTo(347, 118, 372, 132, 351, 141)
    context.lineTo(337, 130);


    context.stroke();
    context.fill();
  }


  drawImage();


  colors.forEach(color => color.addEventListener('change', (ev) => {
    changeColor(ev.target.value)
  }, { passive: true }));

}

window.addEventListener('load', init);