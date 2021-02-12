import { useState, useEffect } from 'react'
import Ethereum from 'web3'

import { checkNumber, checkPhone, isValidEmail, checkSpecialChar } from '../../helpers/helper'

export default function PersonalDetails ({ handleNextStep }) {
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

  useEffect(() => {
    if (localStorage.getItem('userDetails')) {
      const personData = JSON.parse(localStorage.getItem('userDetails'))

      setRecepientName(personData.recepientName)
      setAddress(personData.address)
      setAddressCp(personData.addressCp)
      setCity(personData.city)
      setZip(personData.zip)
      setCountry(personData.country)
      setEmail(personData.email)
      setPhone(personData.phone)
    }
  }, [])

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
      const hashPostalAddress = Ethereum.utils.soliditySha3(
        recepientName || '',
        address || '',
        addressCp || '',
        city || '',
        zip || '',
        country || ''
      )

      const userPersonalDetails = {
        recepientName,
        address,
        addressComplement: addressCp, // FIXME: change variable name to be consistent.
        city,
        zip,
        country,
        email,
        phone,
        hashPostalAddress
      }

      localStorage.setItem('userDetails', JSON.stringify(userPersonalDetails))

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
      <form>
        <div style={{ paddingTop: 8 }}>
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
                onChange={(event) => setRecepientName(event.target.value)}
              />
              {
                submit && checkSpecialChar(recepientName)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The format of the name is not valid.
                    </span>)
                  : null
              }
            </div>
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
                onChange={(event) => setAddress(event.target.value)}
              />
              {
                submit && address === ''
                  ? (<span style={{ color: 'red', fontSize: '14px' }}>The address is not valid.</span>)
                  : null
              }
            </div>
            <div className='mb-3'>
              <label className='pdetails'>Address Line 2</label>
              <input
                type='text'
                name='addressCpValidation'
                onBlur={(e) => onblurChangeValue(e)}
                className='form-control'
                id='addressCp'
                placeholder=''
                value={addressCp || ''}
                onChange={(event) => setAddressCp(event.target.value)}
              />
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
                {
                  submit && checkSpecialChar(city)
                    ? (<span style={{ color: 'red', fontSize: '14px' }}>The format of the city is not valid.</span>)
                    : null
                }
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
                  onChange={(event) => setZip(event.target.value)}
                />
                {submit && checkNumber(zip)
                  ? (
                    <span style={{ color: 'red', fontSize: '14px' }}>
                      The zip code not valid.
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
                  onChange={(event) => setCountry(event.target.value)}
                />
                {
                  submit && checkSpecialChar(country)
                    ? (<span style={{ color: 'red', fontSize: '14px' }}>The format of the country is not valid.</span>)
                    : null
                }
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
                  onBlur={(event) => onblurChangeValue(event)}
                  className='form-control'
                  id='email'
                  placeholder=''
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {
                  email.length > 0 && submit && formValue.emailValidation && !isValidEmail(email)
                    ? (
                      <span style={{ color: 'red', fontSize: '14px' }}>
                        The email format is not valid.
                      </span>)
                    : null
                }
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
                    </span>)
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
                  style={{ width: '100%', backgroundColor: '#a6ffcc' }}
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
