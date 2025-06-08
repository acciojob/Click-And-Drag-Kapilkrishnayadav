// Your code here.
const cubes = document.querySelectorAll('.item');
const container = document.querySelector('.items');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.style.position = 'absolute'; // Make each cube absolutely positioned
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    // Calculate offset of click within the cube
    offsetX = e.clientX - cube.offsetLeft;
    offsetY = e.clientY - cube.offsetTop;
    cube.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  // Calculate new positions relative to container
  let newLeft = e.clientX - offsetX - container.offsetLeft;
  let newTop = e.clientY - offsetY - container.offsetTop;

  // Boundary constraints
  const maxLeft = container.clientWidth - selectedCube.offsetWidth;
  const maxTop = container.clientHeight - selectedCube.offsetHeight;

  // Clamp positions within boundaries
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  // Apply position
  selectedCube.style.left = newLeft + 'px';
  selectedCube.style.top = newTop + 'px';
});

document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.cursor = 'grab';
    selectedCube = null;
  }
});
