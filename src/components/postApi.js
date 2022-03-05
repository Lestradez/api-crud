import React, { useState, useRef} from 'react'
import postData from '../helpers/postData'

export const PostApi = () => {
  const get_id = useRef(null);
  const post_data = useRef(null);
  const [{data,status}, setGetResult] = useState([]);
  
  const clearGetOutput = () => {
    setGetResult([]);
  }
  const duefetch = ()=>{
    postData(setGetResult,get_id.current.value,post_data.current.value)
    
  }
    return (
      <div className="card">
        <div className="card-header">React Fetch POST </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={duefetch}>Get All</button>
            <input type="text" ref={get_id} className="form-control ml-2" placeholder="endpoint" />
            <input type="text" ref={post_data} className="form-control ml-2" placeholder="contenido" />
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>          
          { data && <div className="alert alert-secondary mt-2" role="alert"><pre>{JSON.stringify(data)}</pre></div> }
        </div>
      </div>
    );
  
}