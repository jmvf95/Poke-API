import React from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className='pagination'>
            <button onClick={onLeftClick}>
                <div>
                    <BsFillArrowLeftCircleFill/>
                </div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
                    <BsFillArrowRightCircleFill/>
                </div>
            </button>
        </div>
    )
}

export default Pagination;