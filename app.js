const accordion_header = document.querySelectorAll('.accordion_item_header').forEach(header => {
  header.addEventListener('click', event => {
    header.classList.toggle('active');
    const accordion_item_body = header.nextElementSibling;
    if (header.classList.contains('active')) {
      accordion_item_body.style.maxHeight = accordion_item_body.scrollHeight + 'px';
    } else {
      accordion_item_body.style.maxHeight = 0;
    }
  })
})