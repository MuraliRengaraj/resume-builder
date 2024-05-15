import React,{useState} from 'react';
import "./template2.css";
import DetailsMenu from '../personalDetails/DetailsMenu';
import Details from '../personalDetails/Details'; 

export default function Template2() {
    const [heading, setHeading] = useState({
        fname:"",
        lname:"",
        profession:"",
        city:"",
        country:"",
        pincode:"",
        phone:"",
        email:""
    });
    const [workHistory,setWorkHistory]=useState({
        cname:"",
        jobtitle:"",
        city:"",
        country:"",
        startdate:"",
        enddate:""
    })
    const [education,setEducation]=useState({
        collegename:"",
        collegelocation:"",
        fieldofstudy:"",
        graduationstartdate:"",
        graduationenddate:""
    })
    return (
        <div className='container'>
            <DetailsMenu />
            <div className='tempTwoContainer'>
                <div className='tempInputContainer'>
                    <Details heading={heading} setHeading={setHeading} workHistory={workHistory} setWorkHistory={setWorkHistory} education={education} setEducation={setEducation}/>
                </div>
                <div className='tempPreviewContainer'>
                    {/*<button onClick={window.print()}>this is</button>*/}
                    <div className='tempFullSide'>
                        <div className='tempName'>
                            <div className='tempFirstName'>
                                <p>{heading.fname!==""? heading.fname:"First Name"}</p>
                            </div>
                            <div className='tempSecondName'>
                                <p>{heading.lname!==""? heading.lname:"Last Name"}</p>
                            </div>
                        </div>
                        <div className='tempProfession'>
                            <p>{heading.profession!==""? heading.profession:"Profession"}</p>
                        </div>
                        <div className='tempContact'>
                            <div className='tempContactList'>
                                <div className='tempEmail'>
                                    <p>{heading.email!==""? heading.email:"example@email.com"}</p>
                                </div>
                                <div className='tempNumber'>
                                    <p>{heading.phone!==""? heading.phone:"PhoneNumber"}</p>
                                </div>
                                <div className='tempAddress'>
                                    <div className='tempCity'>
                                        <p>{heading.city!==""? heading.city:"City"}</p>
                                    </div>
                                    <div className='tempCountry'>
                                        <p>{heading.country!==""? heading.country:"Country"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='tempSummary'>
                            <div id='summary'>
                                <p className='tempHeader'>Summary</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem atque, animi quia repudiandae magni labore a, sint laborum asperiores, sequi odio et eum tenetur fuga repellendus quaerat dignissimos doloremque quod blanditiis? Vero quasi iste, optio quo eos, ullam accusamus debitis velit culpa hic veniam, nihil harum quas animi aspernatur!</p>
                        </div>
                        {/* const [education,setEducation]=useState({
        collegename:"",
        collegelocation:"",
        fieldofstudy:"",
        graduationstartdate:"",
        graduationenddate:""
    }) */}
                        <div className='tempEducation'>
                            <div id='education'>
                        
                                <p className='tempHeader'>Education</p>
                            </div>
                            <div>
                                <div className='tempFieldOfStudy'>
                                    <p className='tempSecondHeader'>{education.fieldofstudy!==""? education.fieldofstudy:"Field of Study"}</p>
                                </div>
                                <div className='tempExtra'>
                                    <div className='tempSchoolAndLocation'>
                                        <p>School and Location</p>
                                    </div>
                                    <div className='tempGraduationDate'>
                                        <div className='tempGraduationStartDate'>
                                            <p>StartDate</p>
                                        </div>
                                        <div className='tempGraduationEndDate'>
                                            <p>EndDate</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem atque, animi quia repudiandae magni labore a, sint laborum asperiores, sequi odio et eum tenetur fuga repellendus quaerat dignissimos doloremque quod blanditiis? Vero quasi iste, optio quo eos, ullam accusamus debitis velit culpa hic veniam, nihil harum quas animi aspernatur!</p>
                            </div>
                        </div>

                        <div className='tempSkills'>
                            <div id='skills'>
                                <p className='tempHeader'>Skills</p>
                            </div>
                            <div className='tempSkillsList'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className='tempWorkHistory'>
                            <div id='workHistory'>
                                <p className='tempHeader'>Work History</p>
                            </div>
                            <div>
                                <div className='tempCompanyName'>
                                    <p className='tempSecondHeader'>Company Name and Location</p>
                                </div>
                                <div className='tempExtra'>
                                    <div className='tempJobTitle'>
                                        <p>Job Title</p>
                                    </div>
                                    <div className='tempDates tempExtra'>
                                        <div className='tempStartDate'>
                                            <p>StartDate</p>
                                        </div>
                                        <div className='tempEndDate'>
                                            <p>EndDate</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem atque, animi quia repudiandae magni labore a, sint laborum asperiores, sequi odio et eum tenetur fuga repellendus quaerat dignissimos doloremque quod blanditiis? Vero quasi iste, optio quo eos, ullam accusamus debitis velit culpa hic veniam, nihil harum quas animi aspernatur!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
