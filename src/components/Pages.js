import React from "react";
import PropTypes from "prop-types";
import "../styles/index.css";

function Page({pages_numbers}) {
    return (
        <div className="page" key="page">
            {pages_numbers.map((id, page_number) => {
                return <a className={`page_href page_href_${id+1}`} key={id} href={`/${id}`}>{page_number+1}</a>
            })}
        </div>
    )
}

Page.propTypes = {
    pages_numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Page