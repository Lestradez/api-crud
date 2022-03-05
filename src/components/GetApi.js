import React, { useState, useRef} from 'react'
import getAllData from '../helpers/getAllData'

export const GetApi = () => {
  const get_id = useRef(null);
  const [{data,status,loading}, setGetResult] = useState([]);
  const clearGetOutput = () => {
    setGetResult([]);
  }
  const duefetch = ()=>{
    getAllData(setGetResult,get_id.current.value)
    
  }
    return (
      <div className="card">
        <div className="card-header">React Fetch GET </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={duefetch}>Get All</button>
            <input type="text" ref={get_id} className="form-control ml-2" placeholder="endpoint" />
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>  
          {loading && <h1>N</h1>}        
          { data && <div className="alert alert-secondary mt-2" role="alert"><pre>{JSON.stringify(data)}</pre></div> }
        </div>
      </div>
    );
  
}
