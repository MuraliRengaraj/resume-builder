import React from 'react';
import './education.css';

export default function Education() {
  return (
    <div className='education'>
      <div className='collegeName'>
        <label for="collegename">College Name</label>
        <br />
        <input type="text" name='collegename' />
      </div>
      <div className='collegeLocation'>
        <label for="collegelocation">College Location</label>
        <br />
        <input type="text" name='collegelocation' />
      </div>
      <div className='fieldOfStudy'>
        <label for="fieldofstudy">Field Of Study</label>
        <br />
        <input type="text" name='fieldofstudy'/>
      </div>
      <div className='date'>
        <div className='startDate'>
          <label for="graduationstartdate">Graduation Start Date</label>
          <br />
          <input type="date" name='graduationstartdate' />
        </div>
        <div className='endDate'>
          <label for="graduationenddate">Graduation End Date</label>
          <br />
          <input type="date" name='graduationenddate' />
        </div>
      </div>
    </div>
  )
}
