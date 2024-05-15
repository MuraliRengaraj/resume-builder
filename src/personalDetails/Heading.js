import React from 'react'
import "./heading.css"

export default function Heading(props) {
  return (
    <div className='heading'>
      <div className='extraOne'>
        <div className='uploadImage'>
          <input type="file" style={{ width: 150, height: 182 }} />
        </div>
        <div className='extraTwo'>
          <div className='name'>
            <div className='firstName'>
              <label for="fname">First Name</label>
              <br />
              <input type="text" name='fname' placeholder='e.g. Mohamed' value={props.datas.fname} onChange={(e)=>props.setDatas({ ...props.datas, fname: e.target.value})}/>
            </div>
            <div className='lastname'>
              <label for="lname">Last Name</label>
              <br />
              <input type="text" name='lname' placeholder='e.g. Thasleem' value={props.datas.lname} onChange={(e)=>props.setDatas({ ...props.datas, lname: e.target.value})} />
            </div>
          </div>
          <div className='Profession'>
            <label for="profession">Profession</label>
            <br />
            <input type="text" name='profession' placeholder='e.g. Software Engineer' value={props.datas.profession} onChange={(e)=>props.setDatas({ ...props.datas, profession: e.target.value})}/>
          </div>
        </div>
      </div>
      <div className='extraThree'>
        <div className='City'>
          <label for="city">City</label>
          <br />
          <input type="text" name='city' placeholder='e.g. Trichy' value={props.datas.city} onChange={(e)=>props.setDatas({ ...props.datas, city: e.target.value})}/>
        </div>
        <div className='Country'>
          <label for="country">Country</label>
          <br />
          <input type="text" name='country' placeholder='e.g. India' value={props.datas.country} onChange={(e)=>props.setDatas({ ...props.datas, country: e.target.value})}/>
        </div>
        <div className='Pincode'>
          <label for="pincode">Pincode</label>
          <br />
          <input type="text" name='pincode' placeholder='e.g. 620016' value={props.datas.pincode} onChange={(e)=>props.setDatas({ ...props.datas, pincode: e.target.value})}/>
        </div>
      </div>
      <div className='extraFour'>
        <div className='Phone'>
          <label for="phone">Phone</label>
          <br />
          <input type="text" name='phone' placeholder='e.g. +91 9751554411' value={props.datas.phone} onChange={(e)=>props.setDatas({ ...props.datas, phone: e.target.value})}/>
        </div>
        <div className='Email'>
          <label for="email">Email</label>
          <br />
          <input type="email" name='email' placeholder='e.g. example@email.com' value={props.datas.email} onChange={(e)=>props.setDatas({ ...props.datas, email: e.target.value})}/>
        </div>
      </div>
    </div>
  )
}
