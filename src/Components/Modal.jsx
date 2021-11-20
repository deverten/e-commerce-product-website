import React from 'react'

function Modal({open, children}) {
     if(!open) return null;
    return (
        <> 
            <div className='modal-styles' />
            <div>
                {children}
            </div>
        </>
    )
}

export default Modal
