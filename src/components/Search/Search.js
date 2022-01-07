import React from 'react'
import styles from './Search.module.scss'

function Search({ setSearch, setPageNumber }) {
    return (
        <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5' onSubmit={(e) => e.preventDefault()}>
            <input type="text" className={styles.input} placeholder='Search with name...' onChange={(e) => {
                setSearch(e.target.value)
                setPageNumber(1)
            }} />
            <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    )
}

export default Search
