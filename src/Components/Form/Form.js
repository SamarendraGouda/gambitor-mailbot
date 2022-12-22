import React from 'react';
import { useState } from 'react';
import api from '../../https/api';
import './Form.css';


const Form = () => {
    
    const [schoolName, setSchoolName] = useState ("");
    const [schoolEmail, setSchoolEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = {
                schoolName,
                schoolEmail
            };
    
            await api.post(
                "api/v1/email/sendemail",data
            );

            window.alert("Mail Sent Successfully.");
        }
        catch (err) {
            console.log(err);
            window.alert("Error!")
        }
        
    }

    return (
        <div className='container'>
        <form className='form'>
          <input className="inputbox" name='schoolName' onChange={(e) => setSchoolName(e.target.value)} placeholder="School Name"/>
          <input className="inputbox" name='schoolEmail' onChange={(e) => setSchoolEmail(e.target.value)} placeholder="School Email"/>
          <input className="button" onClick={handleSubmit} type={"Send Mail"} placeholder='Send Mail'/>
        </form>
      </div>
    );
};


export default Form;