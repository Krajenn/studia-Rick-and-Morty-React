import React from "react";
import style from "./Pagination.module.sass";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumber, pageNumber }) => {
    return (
        <ReactPaginate
            pageCount={info?.pages}
            onPageChange={({ selected }) => setPageNumber(selected + 1)}
            className={style.container}
            previousLabel="Prev"
            previousClassName={style.prev}
            nextLabel="Next"
            nextClassName={style.next}
            pageClassName={style.page}
            pageLinkClassName={style.pageLink}
            activeClassName={style.active}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
        />
    );
};

export default Pagination;
