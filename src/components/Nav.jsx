import React from 'react'
import { css } from '@emotion/css'

const titleColor = 'rgba(94, 229, 181, 0.889)'

const Nav = () => {
  return (
    <nav
      className={css`
        margin-bottom: 25px;
      `}
    >
      <header
        className={css`
          display: flex;
          justify-content: space-between;
          padding: 15px;
          border-bottom: 3px solid ${titleColor};
        `}
      >
        <div
          className={css`
            color: ${titleColor};
            font-size: 24px;
            font-weight: bold;
            padding-top: 5px;
            cursor: pointer;
          `}
        >
          The Word Search
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-around;
            & > div {
              margin-right: 20px;
              cursor: pointer;
              padding: 10px;
            }
            & > div:hover {
              background-color: gray;
              color: white;
            }
          `}
        >
          <div>Word Search Maker</div>
          <div>More Puzzles</div>
          <div>Search</div>
        </div>
      </header>
    </nav>
  )
}

export default Nav
