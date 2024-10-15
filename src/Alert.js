import React from 'react';

function Alert(props) {
 
  return (
   
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <button type="button" className="btn btn-success" data-bs-dismiss="alert" aria-label="CloseS">
          {props.alert.type} : {props.alert.msg}
        </button>
      </div>
    )
  );
}

export default Alert;
