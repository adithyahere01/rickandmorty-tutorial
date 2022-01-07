import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss';

const Cards = ({ results, page }) => {

   let display;

   if(results){
    display = results.map(x => {
        let {id, name , image, location, status} = x
        return (
            <Link 
                to={`${page}${id}`} 
                style={{textDecoration: "none"}}
                className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'
                 key={id}>
              <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
                  <img className={`${styles.img} img-fluid`} src={image} alt=''/>
                  {/* content */}

                  <div style={{padding: '10px'}} className='content'>
                      <div className='fs-4 fw-bold mb-4'>{name}</div>

                      {/* location */}
                      <div className=''>
                          <div className='fs-6'>Last location</div>
                          <div className='fs-5'>{location.name}</div>
                      </div>
                  </div>
              </div>
            
            {(
                ()=>{
                    if(status === 'Dead'){
                        return(
                            <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                        )
                    }else if(status === 'Alive'){
                        return(
                            <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                        )
                    }else{
                        return(
                            <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                        )
                    }
                }
            )()} 
            </Link>
        )
    })
   }else{
    display = 'No Character found :)'
   }
    return (
        <>
            {display}
        </>
    )
}

export default Cards
