import React from 'react'

const ProgeressBar = ({width: inputWidth}) => {
  return (
    <div className='container'>
        {inputWidth > 0 && inputWidth <= 100 ?(
            <div className='innerContainer' style={{ width: `${inputWidth}%` }}>
                {inputWidth}%
            </div>

        ): (alert("Please enter valid width")
        )}
    </div>
  )
}

export default ProgeressBar