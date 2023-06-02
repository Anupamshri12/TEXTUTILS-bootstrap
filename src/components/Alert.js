import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
       
    }
  return (
    props.k && <div className={`alert alert-${props.k.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.k.type)}</strong>: {props.k.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert