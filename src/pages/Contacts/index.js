import React from 'react'
import Contacts from '../../components/contacts';
import './style.css'

export default () => {
    return(
        <div className="main">
        <div className="contactsList">
          <Contacts/>
        </div>
      </div>
    )
}