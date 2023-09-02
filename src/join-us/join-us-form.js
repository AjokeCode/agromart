import './join-us-form.css';

const JoinUsForm =()=>{
    return (
        <form className="joinus-form">
            <div className='joinus-form-line'>

            </div>
            <div className="joinus-form-1">
                <h1 className='joinus-form-1-header'>Personal Information</h1>
                <div>
                    <h2 className='joinus-form-1-head'>Firstname</h2>
                    <input placeholder='eg Ruqayyah' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Phone number</h2>
                    <input placeholder='Enter phone number' type='tel' className='joinus-form-1-input'/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Email Address</h2>
                    <input placeholder='Enter your email' type='email' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Residential Address</h2>
                    <input placeholder='Enter your residential address' type='text' className='joinus-form-1-input'/>
                </div>
            </div>
            <div>
                
            </div>
            <div className='joinus-form-line'>

            </div>
            <div className='joinus-form-1'>
                <div className="joinus-form-1-flex">
                <h1 className='joinus-form-1-header'>Education</h1>
                <input type='file' />
                </div>
                <div className='more-2'>
                    <h2 className='joinus-form-1-head'>Highest level of Education</h2>
                    <input placeholder='eg SSCE' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Graduation date</h2>
                    <input type='date' className='joinus-form-1-input'/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Name of institution</h2>
                    <input placeholder='institution' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>City</h2>
                    <input placeholder='eg ILE-IFE' type='text' className='joinus-form-1-input'/>
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
                    <input placeholder='eg Hackcity' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Employment Date</h2>
                    <input type='date' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Brief Description of your role</h2>
                    <textarea className='joinus-form-1-input textarea' type='text' placeholder='
                    eg Description of experience in agriculture, marketing and customer services'></textarea>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Job title</h2>
                    <input placeholder='eg marketer' type='email' className='joinus-form-1-input'/>
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
                    <input placeholder='eg Dammy' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Reference phone number</h2>
                    <input placeholder='Enter phone number' type='tel' className='joinus-form-1-input'/>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>Email Address</h2>
                    <input placeholder='Enter your email' type='email' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Residential Address</h2>
                    <input placeholder='Enter your residential address' type='text' className='joinus-form-1-input'/>
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
                    <select name='languages' className='joinus-form-1-input'>
                        <option value={'English'}>English</option>
                        <option value={'Yoruba'}>Yoruba</option>
                        <option value={'French'}>French</option>

                    </select>
                    <h2 className='joinus-form-1-head'>Can you travel on work basis?</h2>
                    <select name='Travel on work basis' className='joinus-form-1-input'>
                        <option value={'Yes'}>Yes</option>
                        <option value={'No'}>No</option>
                    </select>
                </div>
                <div>
                    <h2 className='joinus-form-1-head'>What is your salary <br/>expectation per month?</h2>
                    <input placeholder='#500,000' type='text' className='joinus-form-1-input'/>
                    <h2 className='joinus-form-1-head'>Can you work on weekends?</h2>
                    <select name='work on weekends?' className='joinus-form-1-input'>
                        <option value={'Yes'}>Yes</option>
                        <option value={'No'}>No</option>
                    </select>
                </div>
            </div>
            <div>
                
            </div>
        </form>
    )
}
export default JoinUsForm;