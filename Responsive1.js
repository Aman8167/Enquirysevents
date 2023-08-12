import React from 'react'
import './Responsive1.css';
function Responsive1() {
  return (
    
        <div className="container-fluid">
                <br></br><br></br>
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Title " style={{height:'4rem'}}
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Event name-" style={{height:'4rem'}}
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="Date" 
              className="form-control  "
              placeholder="Event date" style={{height:'4rem'}}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control     "
              placeholder="Number of Guests
               "
             
               style={{height:'4rem',}}
               
            />
            
           
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Event Venue "
               style={{height:'4rem' }}
            />
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Assign to Manager or Executive "
               style={{height:'4rem' }}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Event management requirement
              "
            
              style={{height:'9rem',}}
              
           />
           
          
         </div>
          
          <br></br>
          <button id="btn1" className="btn btn-primary" >
            Send
          </button>
        
          

        </div>
</div>
    </div>
      </div>
    </div>
    
  )
}

export default Responsive1;