import React, { useState, useEffect, useRef } from 'react'
import { getRandomEmptyCellLocation, getInitialBoard, maybeMoveTiles } from '@/utils/game'
import { v4 as uuidv4 } from 'uuid'
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
  const [flattenedBoard, setFlattenedBoard] = useState([])

  const reset = () => {
    setScore(0)
    setNumTiles(2)

    const newBoard = getInitialBoard(boardSize)

    Array.from({ length: initialNumTiles }, () => {
      const { x, y } = getRandomEmptyCellLocation(newBoard)
      newBoard[x][y] = {
        value: 2,
        id: uuidv4(),
        classes: [''],
      }
    })

    setBoard(newBoard)
  }

  useEffect(() => {
    const newBoard = board
      .map((col, x) =>
        col.map(
          (cell, y) =>
            cell && {
              x,
              y,
              value: cell.value,
              id: cell.id,
              classes: cell.classes
            }
        )
      )
      .flat()

    setFlattenedBoard(newBoard)
  }, [board])

  useEffect(() => {
    reset()

    const handleMove = (e) => {
      setBoard((prevBoard) => {
        let newBoard = maybeMoveTiles(prevBoard, e.key)

        const { x, y } = getRandomEmptyCellLocation(newBoard)
        newBoard[x][y] = { 
          value: 2, 
          id: uuidv4(),
          classes: ['scale-in'], 
        }

        return newBoard
      })
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
          {flattenedBoard.map(
            (tile) =>
              tile && (
                <Tile
                  key={tile.id}
                  classes={tile.classes}
                  x={tile.x}
                  y={tile.y}
                  value={tile.value}
                  cellSize={cellSize}
                  borderRadius={borderRadius}
                  gutterSize={gutterSize}
                  boardSize={boardSize}
                  id={tile.id}
                />
              )
          )}
        </div>
      </div>
    </>
  )
}

export default Game
