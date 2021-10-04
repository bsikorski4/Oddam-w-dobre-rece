import React from "react";


function Pagination({ infoPerPage, totalInfos, paginate }) {
    const pageNumbers = [];

    function addButton() {
        const element = document.querySelector("pagination_item");
        element.classList.toggle("add-pagination_btn");
    }

    for (let i = 1; i <= Math.ceil(totalInfos / infoPerPage); i++) {
        pageNumbers.push(i);
        console.log(totalInfos)

    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="pagination_item">
                        <button className="pagination_btn" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;

