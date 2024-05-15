import React from 'react'
import "./workHistory.css"

export default function WorkHistory() {
  return (
    <div className="workHistory">
      <div className='extraOne'>
        <div className='companyName'>
          <label for="cname">Company Name</label>
          <br />
          <input type="text" name='cname' placeholder='e.g. c' />
        </div>
        <div className='jobTitle'>
          <label for="jobtitle">Job Title</label>
          <br />
          <input type="text" name='jobtitle' placeholder='e.g. c' />
        </div>
      </div>
      <div className='extraTwo'>
        <div className='City'>
          <label for="city">City</label>
          <br />
          <input type="text" name='city' />
        </div>
        <div className='Country'>
          <label for="country">Country</label>
          <br />
          <input type="text" name='country' />
        </div>
      </div>
      <div className='date'>
        <div className='startDate'>
          <label for="startdate">Start Date</label>
          <br />
          <input type="date" name='startdate' />
        </div>
        <div className='endDate'>
          <label for="enddate">End Date</label>
          <br />
          <input type="date" name='enddate' />
        </div>
      </div>
    </div>
  );
}
