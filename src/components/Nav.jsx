import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'

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
        <Link
          to="/"
          className={css`
            color: ${titleColor};
            font-size: 24px;
            font-weight: bold;
            padding-top: 5px;
            cursor: pointer;
            text-decoration: none;
          `}
        >
          The Word Search
        </Link>
        <div
          className={css`
            display: flex;
            justify-content: space-around;
            & > a {
              margin-right: 20px;
              cursor: pointer;
              padding: 10px;
              text-decoration: none;
              color: black;
            }
            & > a:hover {
              background-color: gray;
              color: white;
            }
          `}
        >
          <Link to="/wordSearchMaker">Word Search Maker</Link>
          <Link to="/">More Puzzles</Link>
          <Link to="/">Search</Link>
        </div>
      </header>
    </nav>
  )
}

export default Nav
