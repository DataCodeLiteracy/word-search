import React from 'react'
import { css } from '@emotion/css'

const whiteColor = 'white'
const yellowColor = 'yellow'
const greenColor = 'green'

const WordSearchMaker = () => {
  return (
    <div
      className={css`
        margin: auto;
        padding: 30px;
        & > section {
          width: 100%;
        }
      `}
    >
      <section
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <p>
          Make your own word search game on any topic you like, simply by
          providing between 10 and 30 words. Once submitted, your puzzle will be
          instantly playable on-line as well as easily printed, so you can share
          it with friends.
          <br /> Instructions are available at the bottom of this page
        </p>
      </section>
      <section
        className={css`
          & > article > input {
            width: 100%;
          }
        `}
      >
        <article>
          <h3>Title</h3>
          <input
            className={css`
              height: 30px;
              font-size: 20px;
            `}
            type="text"
          />
        </article>
        <article>
          <h3>Description</h3>
          <input
            className={css`
              height: 60px;
            `}
            type="text"
          />
        </article>
        <article
          className={css`
            & > div > {
              width: 97.5%;
            }
            & > div > input {
              width: 19.5%;
              height: 30px;
            }
          `}
        >
          <h3
            className={css`
              margin-bottom: -10px;
            `}
          >
            WordList
          </h3>
          <p>
            Between 10 and 30 words. Puzzles are randomly generated using a
            selection of your words at play time.
          </p>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </article>
        <article>
          <h3>Subject</h3>
          <p>
            Be very careful when putting personal information online. Do not use
            full names, addresses etc. Remember, puzzles are public and can be
            seen by anybody.
          </p>
        </article>
      </section>
      <section>
        <button
          className={css`
            width: 100%;
            margin-top: 30px;
            padding: 20px;
            font-size: 30px;
            background-color: ${yellowColor};
            border: none;
            outline: none;
            cursor: pointer;
          `}
        >
          Submit
        </button>
      </section>
      <section>
        <div
          className={css`
            width: 100%;
            background-color: ${greenColor};
            padding: 10px;
            margin-top: 100px;
            color: ${whiteColor};
            & > ul > li {
              line-height: 25px;
            }
          `}
        >
          <h3
            className={css`
              color: ${yellowColor};
            `}
          >
            Instructions
          </h3>
          <ul>
            <li>
              To create a word search puzzle you must supply a word list of at
              least 10 words.
            </li>
            <li>
              The word list should be based on a single theme or topic. For
              example a television show or a movie you enjoy.
            </li>
            <li>
              Words can only contain the letters a-z and a maximum of two spaces
              or dashes. Spaces and dashes will be removed when words are added
              to the word search grid.
            </li>
            <li>Words can have a maximum length of 14 letters</li>
            <li>
              All puzzles created will remain on the site for at least 30 days,
              but the very best puzzles may be permanently added to our
              collection.
            </li>
            <li>
              Do not include any personally identifiable information in your
              puzzles
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default WordSearchMaker
