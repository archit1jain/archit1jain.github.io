let currentPage = 1;
const totalPages = 10;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.style.transform = 'rotateY(0deg)';
    }
});