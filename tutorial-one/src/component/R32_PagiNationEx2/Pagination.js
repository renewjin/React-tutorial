import './Pagination.css';

const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemPerPage);
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumber = () => {
        if(totalPages <= 5) {
            return pageNumbers;
        }

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        if (currentPage <= 2) {
            startPage = 1;
            endPage = 5;
        } else if (currentPage >= totalPages - 1) {
            startPage = totalPages - 4;
            endPage = totalPages;
        }

        // Ensuring we always display 5 page numbers
        //const extraPages = 5 - (endPage - startPage + 1);
        //const adjustedStartPage = Math.max(1, startPage - extraPages);
        //const adjustedEndPage = Math.min(totalPages, endPage + extraPages);

        return pageNumbers.slice(startPage-1, endPage);
        //return pageNumbers.slice(adjustedStartPage, adjustedEndPage);
    }

    return (
        <nav>
            <ul className="pagination">
                {currentPage >= 1 &&(
                    <li><a onClick={() => paginate(1)} href="!#" className="page-link">
                        &laquo;
                    </a></li>
                )}
                
                {currentPage >= 1 &&(
                    <li><a onClick={() => paginate(currentPage===1 ? 1 : currentPage-1)} href="!#" className="page-link">
                        &lt;
                    </a></li>
                )}
                
                {renderPageNumber().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>   
                ))}

                {currentPage <= totalPages &&(
                    <li><a onClick={() => paginate(currentPage===totalPages ? totalPages : currentPage + 1)} href="!#" className="page-link">
                        &gt;    
                    </a></li>
                )}

                {currentPage <= totalPages &&(
                    <li><a onClick={() => paginate(totalPages)} href="!#" className="page-link">
                        &raquo;  
                    </a></li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination;