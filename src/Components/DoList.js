import React from 'react';

function DoList () {
    return(
        <div className="DoList">
            <li className={`DoList-item ${dolist.checked ? "checked" : ""}`}>{text}</li>
            <button onClick={checkHandler} className="checklist-btn">
                <i className="fas fa-check-square"></i>
            </button>
            <button onClick={deleteHandler} className="deletelist-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default DoList;
}