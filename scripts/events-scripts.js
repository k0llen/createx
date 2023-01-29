const listBtn = document.querySelector('.events__filter-view-btn-1');
const gridBtn = document.querySelector('.events__filter-view-btn-2');
const listContent = document.querySelector('.events__cards');
const gridContent = document.querySelector('.events__cards-grid');

// list cards

listBtn.addEventListener('click', function () {
    listContent.style.display = 'block';
    listBtn.style.fill = '#FF3F3A';
    gridBtn.style.fill = '#424551';
    gridContent.style.display = 'none';
});

// grid cards

gridBtn.addEventListener('click', function () {
    gridContent.style.display = 'grid';
    gridBtn.style.fill = '#FF3F3A';
    listBtn.style.fill = '#424551';
    listContent.style.display = 'none';
});