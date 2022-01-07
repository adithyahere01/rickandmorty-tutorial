import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

function Pagination({ pageNumber, setPageNumber, info }) {
    let [width, setwidth] = React.useState(window.innerWidth)

    let updateDimensions= () =>{
        setwidth(window.innerWidth)
    }
    console.log(width);

    React.useEffect(()=>{
        window.addEventListener('resize', updateDimensions)

        return () =>  window.removeEventListener('resize', updateDimensions)
    },[])

    return (
        <>
        <style jsx>
            {`
            @media (max-width: 768px){
              .next, .prev{
                  display: none;
              }
              .pagination{
                  font-size: 14px;
              }
            }
            `}
        </style>

        <ReactPaginate 
        className='pagination justify-content-center gap-4 my-4' 
        nextLabel='Next'
        previousLabel='Prev'
        previousClassName= "btn btn-primary links prev"
        nextClassName= "btn btn-primary links next"
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        pageCount={info?.pages}  //if info exists find pages
        forcePage={pageNumber === 1 ? 0 : pageNumber}   
        onPageChange={(data) => {
            let page = data.selected
            setPageNumber(page + 1)
        } }
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={2}
        />
        </>
    )
}

export default Pagination
