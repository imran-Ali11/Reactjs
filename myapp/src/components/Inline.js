import { colors } from '@material-ui/core'
import React from 'react'

function Inline() {
    const heading = {
        fontSize : '72px',
        color:'blue'
    }
  return (
    <div>
      <h1 style = {heading}>This Inline style</h1>
    </div>
  )
}

export default Inline
