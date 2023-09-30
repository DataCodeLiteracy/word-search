import React from 'react'
import { css } from '@emotion/css'

const Home = () => {
  return (
    <div>
      <section
        className={css`
          display: flex;
          padding: 0 30px;
          justify-content: center;
        `}
      >
        <img src="/assets/word-search.png" alt="" />
        <div
          className={css`
            line-height: 40px;
            border: 1px solid black;
            padding: 10px 50px;
          `}
        >
          <h1>Word Search</h1>
          <p>
            We have the best collection of word search puzzles online, with new
            ones being added regularly.
            <br />
            They are fun to play, but also educational, in fact, many teachers
            make use of them.
            <br />
            Puzzles are 100% free to play and work on desktop pc, mac, mobile
            and tablet. Or you can go old school and print them to enjoy offline
            later.
            <br />
            Plus, if you're feeling a little more adventurous, why not create
            your very own with our simple to use Word Search Maker, and then
            share them with
            <br />
            your friends.
            <br />
            To get started playing, just select a game from below. Best of luck.
            <br />
          </p>
        </div>
      </section>
      <section
        className={css`
          margin-top: 30px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            & > div {
              background-color: white;
              margin-left: 30px;
              width: 20%;
              border: 1px solid green;
              padding: 10px;
              margin-top: 10px;
            }
            & > div > h3 {
              color: red;
            }
          `}
        >
          <div>
            <h3>Television Shows</h3>
            <ul>
              <li>The Simpsons Characters</li>
              <li>Family Guy Characters</li>
              <li>Full House</li>
              <li>Grey's Anatomy</li>
              <li>Star Trek</li>
              <li>Bones</li>
            </ul>
          </div>
          <div>
            <h3>Sitcoms</h3>
            <ul>
              <li>The Big Bang Theory</li>
              <li>Friends</li>
              <li>Modern Family</li>
              <li>Two and a Half Men</li>
              <li>How I Met Your Mother</li>
              <li>2 Broke Girls</li>
            </ul>
          </div>
          <div>
            <h3>Television Shows</h3>
            <ul>
              <li>The Simpsons Characters</li>
              <li>Family Guy Characters</li>
              <li>Full House</li>
              <li>Grey's Anatomy</li>
              <li>Star Trek</li>
              <li>Bones</li>
            </ul>
          </div>
          <div>
            <h3>Sitcoms</h3>
            <ul>
              <li>The Big Bang Theory</li>
              <li>Friends</li>
              <li>Modern Family</li>
              <li>Two and a Half Men</li>
              <li>How I Met Your Mother</li>
              <li>2 Broke Girls</li>
            </ul>
          </div>

          <div>
            <h3>Television Shows</h3>
            <ul>
              <li>The Simpsons Characters</li>
              <li>Family Guy Characters</li>
              <li>Full House</li>
              <li>Grey's Anatomy</li>
              <li>Star Trek</li>
              <li>Bones</li>
            </ul>
          </div>
          <div>
            <h3>Sitcoms</h3>
            <ul>
              <li>The Big Bang Theory</li>
              <li>Friends</li>
              <li>Modern Family</li>
              <li>Two and a Half Men</li>
              <li>How I Met Your Mother</li>
              <li>2 Broke Girls</li>
            </ul>
          </div>
          <div>
            <h3>Television Shows</h3>
            <ul>
              <li>The Simpsons Characters</li>
              <li>Family Guy Characters</li>
              <li>Full House</li>
              <li>Grey's Anatomy</li>
              <li>Star Trek</li>
              <li>Bones</li>
            </ul>
          </div>
          <div>
            <h3>Sitcoms</h3>
            <ul>
              <li>The Big Bang Theory</li>
              <li>Friends</li>
              <li>Modern Family</li>
              <li>Two and a Half Men</li>
              <li>How I Met Your Mother</li>
              <li>2 Broke Girls</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={css`
          margin: 30px 0 50px 30px;
        `}
      >
        <h3>Other Word Search Categories</h3>
        <div
          className={css`
            display: flex;
            flex-wrap: wrap;
            & > div {
              background-color: green;
              margin: 20px 30px 0 0;
              padding: 10px;
              cursor: pointer;
            }
            & > div:hover {
              background-color: gray;
              color: white;
            }
          `}
        >
          <div>Sports</div>
          <div>Geography</div>
          <div>Countries</div>
          <div>Cities and Places</div>
          <div>History</div>
          <div>Health and Safety</div>
          <div>Books</div>
          <div>Synonyms</div>
          <div>Religious</div>
          <div>Vocabulary</div>
          <div>Educational</div>
          <div>Seasonal</div>
          <div>Non English</div>
        </div>
      </section>
    </div>
  )
}

export default Home
