import React, { useState } from 'react'
import { checkNumber, checkPhone, isValidEmail, checkSpecialChar } from '../../src/helpers/helper'

export default function PersonalDetailsFormData ({ handleNextStep }) {
  const [recepientName, setRecepientName] = useState('')
  const [address, setAddress] = useState('')
  const [addressCp, setAddressCp] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submit, setSubmit] = useState(false)

  const [formValue, setFormValue] = useState({
    recepientNameValidation: false,
    addressValidation: false,
    cityValidation: false,
    zipValidation: false,
    countryValidation: false,
    emailValidation: false,
    phoneValidation: false
  })

  const handleNextLocal = () => {
    setSubmit(true)
    if (
      recepientName !== '' &&
      address !== '' &&
      city !== '' &&
      zip !== '' &&
      country !== '' &&
      !checkSpecialChar(recepientName) &&
      !checkSpecialChar(country) &&
      !checkPhone(phone) &&
      (email === '' || isValidEmail(email))
    ) {
      const data = {
        recepientName: recepientName,
        address: address,
        addressCp: addressCp,
        city: city,
        zip: zip,
        country: country,
        email: email,
        phone: phone
      }
      localStorage.setItem('userDetails', JSON.stringify(data))
      handleNextStep()
    }
  }

  const onblurChangeValue = (e) => {
    setSubmit(false)
    const name = e.target.name
    const temp = { ...formValue, [name]: true }
    setFormValue(temp)
  }

  return (
    <div>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap'
        rel='stylesheet'
      />
      <form>
        <div style={{ paddingTop: 50 }}>
          <div className='row form-group' style={{ padding: '.375rem .75rem' }}>
            <h4>
              <span style={{ color: '#13a2dc' }}>Personal</span> Details
            </h4>
          </div>

          <div className='form-group'>
            <div className='mb-3'>
              <label className='pdetails'>Recipient's name</label>
              <input
                name='recepientNameValidation'
                type='text'
                onBlur={(e) => onblurChangeValue(e)}
                className='form-control'
                id='recepientName'
                placeholder=''
                value={recepientName}
                onChange={(e) => setRecepientName(e.target.value)}
              />
              {submit && checkSpecialChar(recepientName)
                ? (
                  <span style={{ color: 'red', fontSize: '14px' }}>
                    The format of the name is not valid.
                  </span>
                  )
                : null}
            </div>
            <div classNameName='col-md-12'>
              <div className='mb-3'>
                <label className='pdetails'>Address</label>
                <input
                  type='text'
                  name='addressValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='address'
                  placeholder=''
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {submit && address === ''
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The address is not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
            <div classNameName='col-md-12'>
              <div className='mb-3'>
                <label className='pdetails'>Address Line 2</label>
                <input
                  type='text'
                  className='form-control'
                  id='addressCp'
                  placeholder=''
                  value={addressCp}
                  onChange={(e) => setAddressCp(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-md-4'>
              <div className='mb-3 '>
                <label className='pdetails'>City</label>
                <input
                  type='text'
                  name='cityValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='city'
                  placeholder=''
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {submit && checkSpecialChar(city)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The format of the city is not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
            <div className='col-md-2'>
              <div className='mb-3'>
                <label className='pdetails'>Zip Code</label>
                <input
                  type='number'
                  name='zipValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='zip'
                  placeholder=''
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
                {submit && checkNumber(zip)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The zip not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='mb-3'>
                <label className='pdetails'>Country</label>
                <input
                  type='text'
                  name='countryValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='country'
                  placeholder=''
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                {submit && checkSpecialChar(country)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The format of the country is not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-md-6'>
              <div className='mb-3'>
                <label className='pdetails'>Mail (optional)</label>
                <input
                  type='email'
                  name='emailValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='email'
                  placeholder=''
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email.length > 0 &&
                  submit &&
                  formValue.emailValidation &&
                  !isValidEmail(email)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The email format is not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='mb-3'>
                <label className='pdetails'>Phone (optional)</label>
                <input
                  maxLength={14}
                  type='number'
                  pattern='[+]?\d*'
                  name='phoneValidation'
                  onBlur={(e) => onblurChangeValue(e)}
                  className='form-control'
                  id='phone'
                  placeholder=''
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {submit && formValue.phoneValidation && checkPhone(phone)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The format of the phone is not valid.
                    </span>
                    )
                  : null}
              </div>
            </div>
          </div>
          <div className='row form-group'>
            <div
              className='col-md-12 text-center'
              style={{ margin: '30px 0px' }}
            >
              <div className='d-grid gap-2'>
                <button
                  className='new-button'
                  style={{ width: '100%', backgroundColor: '#A6FFCC' }}
                  type='button'
                  onClick={handleNextLocal}
                >
                  <strong>Validate</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
