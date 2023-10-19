import { useState } from 'react';
import './join-us-form.css';
import { BallTriangle } from 'react-loader-spinner';

const JoinUsForm =()=>{
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '',
        address: '',
        education_file: '',
        education_level: '',
        grad_date: '',
        institution: '',
        city: '',
        company_name: '',
        experience_desc: '',
        job_title: '',
        ref_name: '',
        ref_no: '',
        ref_email:'',
        ref_address: '',
        languages: '',
        salary: '',
        travel: '',
        work: ''
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    }
    const [isLoading, setIsLoading]= useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
          const response = await fetch('https://backend.getlinked.ai/hackathon/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            setIsLoading(false)
          } else {
            alert("There is error submitting this form please submit again");
            setIsLoading(false)
            
          }
        } catch (error) {
            alert('Unexpected error occur')
            console.error(error)
        }};
    return (
        <form className="joinus-form" onSubmit={handleSubmit}>
            <div className='joinus-form-line'>

            </div>
            <div className="joinus-form-1">
                <h1 className='joinus-form-1-header'>Personal Information</h1>
                <div>
                    <h2 className='joinus-form-1-head'>Firstname</h2>
                    <input placeholder='eg Ruqayyah' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='name'/>
                    <h2 className='joinus-form-1-head'>Phone number</h2>
                    <input placeholder='Enter phone number' type='tel' onChange={handleChange}
                    className='joinus-form-1-input' name='phone_number'/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Email Address</h2>
                    <input placeholder='Enter your email' type='email'  onChange={handleChange}
                    className='joinus-form-1-input' name='email'/>
                    <h2 className='joinus-form-1-head'>Residential Address</h2>
                    <input placeholder='Enter your residential address' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='address'/>
                </div>
            </div>
            <div>
                
            </div>
            <div className='joinus-form-line'>

            </div>
            <div className='joinus-form-1'>
                <div className="joinus-form-1-flex">
                <h1 className='joinus-form-1-header'>Education</h1>
                <input type='file' name='education_file' onChange={handleChange}/>
                </div>
                <div className='more-2'>
                    <h2 className='joinus-form-1-head'>Highest level of Education</h2>
                    <input placeholder='eg SSCE' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='education_level'/>
                    <h2 className='joinus-form-1-head'>Graduation date</h2>
                    <input type='date' className='joinus-form-1-input' name='grad_date' onChange={handleChange}/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Name of institution</h2>
                    <input placeholder='institution' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='institution'/>
                    <h2 className='joinus-form-1-head'>City</h2>
                    <input placeholder='eg ILE-IFE' type='text' onChange={handleChange}
                     className='joinus-form-1-input' name='city'/>
                </div>
            </div>
            <div>
                
            </div>
            <div className='joinus-form-line'>

            </div>
            <div className="joinus-form-1">
                <h1 className='joinus-form-1-header'>Relevant Work Experience</h1>
                <div className='more-1'>
                    <h2 className='joinus-form-1-head'>Company name</h2>
                    <input placeholder='eg Hackcity' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='company_name'/>
                    <h2 className='joinus-form-1-head'>Employment Date</h2>
                    <input type='date' className='joinus-form-1-input' onChange={handleChange}/>
                    <h2 className='joinus-form-1-head'>Brief Description of your role</h2>
                    <textarea className='joinus-form-1-input textarea' type='text'  
                    placeholder='eg Description of experience in agriculture, marketing and customer services' 
                    name='experience_desc' onChange={handleChange}></textarea>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Job title</h2>
                    <input placeholder='eg marketer' type='email' onChange={handleChange}
                    className='joinus-form-1-input' name='job_title'/>
                </div>
            </div>
            <div>
                
            </div>
            <div className='joinus-form-line'>

            </div>
            <div className="joinus-form-1">
                <h1 className='joinus-form-1-header'>References</h1>
                <div className='more'>
                    <h2 className='joinus-form-1-head'>Reference name</h2>
                    <input placeholder='eg Dammy' type='text' className='joinus-form-1-input' 
                    name='ref_name' onChange={handleChange}/>
                    <h2 className='joinus-form-1-head'>Reference phone number</h2>
                    <input placeholder='Enter phone number' type='tel' onChange={handleChange}
                     className='joinus-form-1-input' name='ref_no'/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Email Address</h2>
                    <input placeholder='Enter your email' type='email' onChange={handleChange} className='joinus-form-1-input' 
                    name='ref_email'/>
                    <h2 className='joinus-form-1-head'>Residential Address</h2>
                    <input placeholder='Enter your residential address' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='ref_address'/>
                </div>
            </div>
            <div>
            </div>
            <div className='joinus-form-line'>

            </div>
            <div className="joinus-form-1">
                <h1 className='joinus-form-1-header'>Additional Information</h1>
                <div>
                    <h2 className='joinus-form-1-head'>Which languages are you <br/> most proficient in?</h2>
                    <select name='languages' className='joinus-form-1-input' onChange={handleChange}>
                        <option value={'English'} >English</option>
                        <option value={'Yoruba'} >Yoruba</option>
                        <option value={'French'} >French</option>

                    </select>
                    <h2 className='joinus-form-1-head'>Can you travel on work basis?</h2>
                    <select name='travel' className='joinus-form-1-input' onChange={handleChange}>
                        <option value={'Yes'}>Yes</option>
                        <option value={'No'}>No</option>
                    </select>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>What is your salary <br/>expectation per month?</h2>
                    <input placeholder='#500,000' type='text' onChange={handleChange}
                    className='joinus-form-1-input' name='salary'/>
                    <h2 className='joinus-form-1-head'>Can you work on weekends?</h2>
                    <select name='work' className='joinus-form-1-input' onChange={handleChange}>
                        <option value={'Yes'}>Yes</option>
                        <option value={'No'}>No</option>
                    </select>
                </div>
            </div>
            <div>
                
            </div>
            <button type='submit' className='submit-btn'>
                {
                    isLoading ?
                    (
                    <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                  />) : 'Submit'
                }
            </button>
        </form>
    )
}
export default JoinUsForm;