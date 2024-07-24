import React from "react";
import "./ContactUs.css";
const ContactUsContent = () => {
  return (
    <>
      <div class='about_text_Align width_60_media'>
        <div className='jusyify_Contact_space'>
          <div className='contact_List_Space_Define'>
            <h1 className='contact_Heading_List '>Contact Detail</h1>
            <h3 className='getback_define_shortly'>
              We will get back to you shortly
            </h3>
          </div>
          <div className='contact_List_Space_Define'>
            <h3 className='getback_define_shortly'>you can write to us :</h3>
            <h1 className='contact_Heading_List'>info@darto.in</h1>
          </div>
        </div>
        <div>
          <div className=''>
            <div className='contact_List_Space_Define'>
              <h1 className='age-group1'>Name *</h1>
            </div>
          </div>
          <div className=''>
            <input
              className='form-input-style'
              type='text'
              placeholder='Full Name*'
            />
          </div>
        </div>
        <div>
          <div className=''>
            <div className='contact_List_Space_Define'>
              <h1 className='age-group1'>Phone </h1>
            </div>
          </div>
          <div className=''>
            <input
              className='form-input-style '
              type='text'
              placeholder='Phone Number'
            />
          </div>
        </div>
        <div className='contact_List_Space_Define'>
          <div className=''>
            <div>
              <h1 className='age-group1'>Email *</h1>
            </div>
          </div>
          <div className=''>
            <input
              className='form-input-style'
              type='text'
              placeholder='Email Address'
            />
          </div>
        </div>
        <div className='contact_List_Space_Define'>
          <div className=''>
            <div>
              <h1 className='age-group1'>Message </h1>
            </div>
          </div>
          <div className=''>
            <textarea
              className='form-input-style'
              placeholder='Discribe 150 Charcters'
              intent='primary'
              resizable='none'
              resize='none'
              theme='light'
              type='text'
            />
          </div>
        </div>

        <div className='update-botton-width'>
          <button className='width_of_button'>Submit</button>
        </div>
      </div>
    </>
  );
};
export default ContactUsContent;
