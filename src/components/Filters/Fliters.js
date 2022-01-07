import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Fliters = ({ setStatus, setPageNumber, setSpecies, setGender }) => {
    return (
        <div className='col-lg-3 col-12 mb-5'>
            <div className='text-center fw-bold fs-4 mb-2'>Filter</div>

            <div className='text-center text-decoration-underline text-primary mb-4' style={{cursor: 'pointer'}} 
            onClick={()=>{
                setPageNumber(1)
                setStatus("")
                setGender("")
                setSpecies("")
                window.location.reload(false); //False reloads the page using the version of the page cached by the browser
            }}>Clear filters</div>

       {/* ACCORDION */}
            <div className="accordion" id="accordionExample">
            <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
            <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
            <Gender setGender={setGender} setPageNumber={setPageNumber}/>
            </div>
        </div>
    )
}

export default Fliters
