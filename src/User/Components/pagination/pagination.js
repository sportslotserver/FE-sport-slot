import React, {useState} from "react";
import '../../Assets/Styles/Pagination/Pagination.scss'
import Pagination from "react-js-pagination";

function CustomPagination(props){
    const { totalItemsCount, pageRangeDisplayed, itemsCountPerPage, activePage, setActivePage} = props

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }
    return(
        <Pagination
        
            itemClass="pagination-item"
            linkClass="pagination-item-link"
            activeClass="pagination-item-active"
            activeLinkClass="pagination-item-link-active"
            prevPageText="<"
            nextPageText=">"
            itemClassPrev="pagination-item-perv"
            itemClassNext="pagination-item-next"
            itemClassFirst="pagination-item-first"
            itemClassLast="pagination-item-last"
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={handlePageChange.bind(this)}
        />
    );
}

export default CustomPagination