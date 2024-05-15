import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./rte.css"

export default function RTE() {
  const [value, setValue] = useState('');
  console.log("value" + value);

  return (
 <div className='rte'>
  <ReactQuill theme="snow" value={value} onChange={setValue}/>
 </div>
  );
}