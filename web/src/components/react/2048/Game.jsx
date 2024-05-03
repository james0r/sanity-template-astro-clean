import React, { useState, useEffect, useRef } from 'react'

import { getRandomEmptyCellLocation, getInitialBoard, maybeMoveTiles } from '@/utils/game'
import Tile from './Tile'
import { tw } from '@/utils'
import './game.css'

function Game() {
  const boardSize = 4
  const cellSize = 100
  const gutterSize = 12
  const borderRadius = 3
  const initialNumTiles = 2

  const [numTiles, setNumTiles] = useState(initialNumTiles)
  const [score, setScore] = useState(0)
  const [board, setBoard] = useState(getInitialBoard(boardSize))
  const [tiles, setTiles] = useState([])
  const [idCounter, setIdCounter] = useState(0)
  // const boardRef = useRef(board)

  // useEffect(() => {
  //   boardRef.current = board;
  // }, [board]);

  const reset = () => {
    setScore(0)
    setNumTiles(2)

    const newBoard = getInitialBoard(boardSize)

    Array.from({ length: initialNumTiles }, () => {
      const { x, y } = getRandomEmptyCellLocation(newBoard)
      newBoard[x][y] = { x, y, value: 2, id: idCounter }
    })

    setBoard(newBoard)
  }

  useEffect(() => {
    reset()

    const handleMove = (e) => {
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard]

        return maybeMoveTiles(newBoard, e.key)
      })

      console.log('boardHandler', board)

      // setBoard((prev) => getInitialBoard(boardSize))
    }

    window.addEventListener('keydown', handleMove)
    return () => window.removeEventListener('keydown', handleMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <button onClick={reset}>Reset</button>
      <div
        data-board-container
        className={tw(['relative'])}
        style={{
          '--2048-cell-size': `${cellSize}px`,
          '--2048-gutter-size': `${gutterSize}px`,
          '--2048-border-radius': `${borderRadius}px`,
          '--2048-board-size': `${boardSize}`,
        }}
      >
        <div
          className={tw(['grid', 'bg-dark-beige'])}
          style={{
            gridTemplateColumns: `repeat(${boardSize}, 1fr);`,
            gap: `${gutterSize}px`,
            padding: `${gutterSize}px`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          {Array.from({ length: boardSize * boardSize }).map((_, i) => (
            <div
              key={i}
              className={tw([
                'bg-light-beige',
                'flex',
                'justify-center',
                'items-center',
                'text-2xl',
                'font-bold',
                'text-flint',
                'tw-bg-light-beige',
              ])}
              style={{
                width: `${cellSize}px;`,
                height: `${cellSize}px;`,
                borderRadius: `${borderRadius}px`,
              }}
            />
          ))}
        </div>
        <div
          data-pieces-overlay
          className={tw(['w-full', 'h-full', 'absolute', 'top-0', 'left-0'])}
        >
          {board.map((col, x) =>
            col.map(
              (cell, y) =>
                cell && (
                  <Tile
                    key={cell.id}
                    x={x}
                    y={y}
                    value={cell.value}
                    cellSize={cellSize}
                    borderRadius={borderRadius}
                    gutterSize={gutterSize}
                    boardSize={boardSize}
                  />
                )
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Game
