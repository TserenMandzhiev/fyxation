const button = document.querySelector('.circle-btn');
const block = document.querySelector('.header-bottom');

function moveButton(event) {
		const blockRect = block.getBoundingClientRect()
		const mouseX = event.clientX - blockRect.left;
		const mouseY = event.clientY - blockRect.top;

	if (mouseX < 0) {
    mouseX = 0;
  } else if (mouseX > block.offsetWidth - button.offsetWidth) {
    mouseX = block.offsetWidth - button.offsetWidth;
  }

  if (mouseY < 0) {
    mouseY = 0;
  } else if (mouseY > block.offsetHeight - button.offsetHeight) {
    mouseY = block.offsetHeight - button.offsetHeight;
  }

  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const buttonX = mouseX - buttonWidth / 2;
  const buttonY = mouseY - buttonHeight / 2;

  // Ограничиваем кнопку внутри блока
  const maxX = block.offsetWidth - buttonWidth;
  const maxY = block.offsetHeight - buttonHeight;
  const finalX = Math.max(0, Math.min(buttonX, maxX));
  const finalY = Math.max(0, Math.min(buttonY, maxY));


  button.style.left = finalX + 'px';
  button.style.top = finalY + 'px';


}
block.addEventListener('mousemove', moveButton);
