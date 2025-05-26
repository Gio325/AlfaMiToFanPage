const floatingImgDiv = document.getElementById('floating-image');
const floatingImg = floatingImgDiv.querySelector('img');

document.querySelectorAll('.evoluzione li').forEach(li => {
  li.addEventListener('mouseenter', e => {
    const imgSrc = li.getAttribute('data-img');
    floatingImg.src = imgSrc;
    floatingImgDiv.style.display = 'block';
  });

  li.addEventListener('mousemove', e => {
    const offsetX = 20;
    const offsetY = 20; 
    floatingImgDiv.style.top = (e.clientY + offsetY) + 'px';
    floatingImgDiv.style.left = (e.clientX + offsetX) + 'px';
  });

  li.addEventListener('mouseleave', e => {
    floatingImgDiv.style.display = 'none';
  });
});

