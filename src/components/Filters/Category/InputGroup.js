import React from 'react'

const InputGroup = ({total, name, setepisode}) => {
   

    return (
        <div className="input-group mb-3">
  <select  onChange={(e) => setepisode(e.target.value)} className="form-select" id="inputGroupSelect02">
    <option value='1' selected>Choose...</option>

    {[...Array(total).keys()].map((item, i) => {
       return <option key={i} value={item + 1}>{name} - {item + 1}</option>
    })}
  </select>

</div>
    )
}

export default InputGroup
