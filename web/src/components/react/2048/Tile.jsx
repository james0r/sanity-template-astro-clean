import React, { useState, useEffect } from 'react'
import { tw } from '@/utils'

function Tile({ x, y, value, cellSize, borderRadius, gutterSize, boardSize }) {

  useEffect(() => {
    console.log('ran')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={tw([
        'tile',
        'bg-bush',
        'text-flint',
        'absolute',
        'flex',
        'justify-center',
        'items-center',
        'font-semibold'
      ])}
      style={{
        fontSize: `${value.toString().length > 2 ? '45px' : '55px'}`,
        transform: `translateX(${x * cellSize + (x + 1) * gutterSize}px) translateY(${y * cellSize + (y + 1) * gutterSize}px)`,
        transition: 'transform 1s ease',
      }}
      data-x={x}
      data-y={y}
    >
      {value}
    </div>
  )
}

export default Tile
