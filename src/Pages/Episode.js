import React from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episode = () => {
    const [episode, setepisode] = React.useState(1)
    const [info, setinfo] = React.useState([])
    const [results, setresults] = React.useState([])
   let api = `https://rickandmortyapi.com/api/episode/${episode}`

   React.useEffect(() =>{
     (async function(){
       let data = await fetch(api).then(res => res.json())
       setinfo(data);

       let a = await Promise.all(
           data.characters.map((item) => {
               return fetch(item).then(res => res.json())
           })
       )
       setresults(a)
     })()
   },[api])

   let { air_date, characters, name, id} = info

    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-center mb-4">Episode: {" "}<span className='text-primary'>{name=== "" ? 'Unknown' : name}</span></h1>
                <h5 className="text-center mb-4">Air Date: {air_date==="" ? 'Unknown' : air_date}</h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                   <h4 className="text-center mb-4">Select Episode</h4>
                    <InputGroup name='Episode' total={41} setepisode={setepisode}/>
                </div>

                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page='/episodes/' results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode
