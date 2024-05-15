import React from 'react'
import "./detailsMenu.css"

export default function DetailsMenu() {
  return (
    <div className='DetailsMenuContainer'>
      <div className='headingMenu'>
        <span id='num'>1</span>
        <p>HEADING</p>
      </div>
      <div id='line'>|</div>
      <div className='workHistory'>
        <span id='num'>2</span>
        <p>WORK HISTORY</p>
      </div>
      <div id='line'>|</div>
      <div className='education'>
        <span id='num'>3</span>
        <p>EDUCATION</p>
      </div>
      <div id='line'>|</div>
      <div className='skills'>
        <span id='num'>4</span>
        <p>SKILLS</p>
      </div>
      <div id='line'>|</div>
      <div className='summary'>
        <span id='num'>5</span>
        <p>SUMMARY</p>

      </div>
    </div>
  )
}
