import React from 'react'
import './row.css'

const Row = ({count, onIncrement, onDecrement, onRemove}) => {
  return (
    <div className='row'>
          <div className="count number">{count}</div>
          <button className="count add" onClick={onIncrement}>
              <i className="fa fa-plus-circle"></i>
          </button>
          <button className="count decrese" onClick={onDecrement}>
              <i className="fa fa-minus-circle"></i>
          </button>
          <button className="count remove" onClick={onRemove}>
              <i className="fa fa-trash"></i>
          </button>
    </div>
  )
}

export default Row;