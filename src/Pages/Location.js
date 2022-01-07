import React from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
    const [location, setlocation] = React.useState(1)
    const [info, setinfo] = React.useState([])
    const [results, setresults] = React.useState([])
   let api = `https://rickandmortyapi.com/api/location/${location}`

   React.useEffect(() =>{
     (async function(){
       let data = await fetch(api).then(res => res.json())
       setinfo(data);

       let a = await Promise.all(
           data.residents.map((item) => {
               return fetch(item).then(res => res.json())
           })
       )
       setresults(a)
     })()
   },[api])

   let { type, name, dimension} = info

    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-center mb-4">Location: {" "}<span className='text-primary'>{name=== "" ? 'Unknown' : name}</span></h1>
                <h5 className="text-center mb-4">Dimension: {dimension==="" ? 'Unknown' : dimension}</h5>               
                <h6 className="text-center mb-4">Type: {type==="" ? 'Unknown' : type}</h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                   <h4 className="text-center mb-4">Pick Location</h4>
                    <InputGroup name='Location' total={126} setepisode={setlocation}/>
                </div>

                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page='/locations/' results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
