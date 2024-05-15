import React from 'react';
import "./template1.css";

export default function Template1() {
  return (
    <div className='tempOneContainer'>
      <div className='tempInputContainer'>

      </div>
      <div className='tempPreviewContainer'>
        <div className='tempLeftSide'>
          <div className='tempImage'>
            <img style={{ width: 150, height: 182 }} src='' />
          </div>
          <div className='tempName'>
            <div className='tempFirstName'>
              <p>Your</p> 
            </div>
            <div className='tempSecondName'>
              <p>Name</p>
            </div>
          </div>
          <div className='tempProfession'>
            <p>Profession</p>
          </div>
          <div className='tempContact'>
            <div id='contact'>
              <p>Contact</p>
            </div>
            <div className='tempContactList'>
              <div className='tempEmail'>
                <p>Email</p>
                <p>example@email.com</p>
              </div>
            </div>
          </div>
          <div className='tempSkills'>
            <div id='skills'>
              <p>Skills</p>
            </div>
            <div className='tempSkillsList'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className='tempRightSide'>
          <div className='tempSummary'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem atque, animi quia repudiandae magni labore a, sint laborum asperiores, sequi odio et eum tenetur fuga repellendus quaerat dignissimos doloremque quod blanditiis? Vero quasi iste, optio quo eos, ullam accusamus debitis velit culpa hic veniam, nihil harum quas animi aspernatur!</p>
          </div>
          <div className='tempWorkHistory'>
            <div id='workHistory'>
              <p>Work History</p>
            </div>
            <div>
              <div className='tempDates'>
                <div className=''></div>
                <div className=''></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
