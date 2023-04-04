const paginationContainer = document.querySelector('.pagination');

export const renderPagination = function (currentPage, numOfPages) {
    const html = `
    <div class="pagination-btn-container">
        <button data-goto="${currentPage - 1}" class="page-btn back">
            <span>Page ${currentPage - 1}</span>
        </button>
    </div>
    <div class="pagination-num-container">
        <p class="page-num">Page: ${currentPage} of ${numOfPages}</p>
    </div>
    <div class="pagination-btn-container">
        <button data-goto="${currentPage + 1}" class="page-btn forward">
            <span>Page ${currentPage + 1}</span>
        </button>
    </div>
    `;
    paginationContainer.innerHTML = html;
    const btns = document.querySelectorAll('.page-btn');
    btns.forEach(btn => {
        btn.classList.remove('hidden');
        if (+btn.dataset.goto === 0 || +btn.dataset.goto === numOfPages + 1) {
            btn.classList.add('hidden')
        }
    })
};

export const handlePageBtn = function (handler) {
    paginationContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.page-btn');
        if (!btn) return;
        const goToPage = +btn.dataset.goto;
        handler(goToPage);
    });
}