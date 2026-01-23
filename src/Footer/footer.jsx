import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTelegram,
  faXTwitter,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className="social">
      <a href="#" className="social-link facebook" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      <a href="#" className="social-link instagram" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a href="#" className="social-link telegram" aria-label="Telegram">
        <FontAwesomeIcon icon={faTelegram} />
      </a>

      <a href="#" className="social-link twitter" aria-label="Twitter">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>

      <a href="#" className="social-link tiktok" aria-label="TikTok">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </div>
    <div className="title-footer">
      <h6> © 2026 Your Realtyhub. All Rights Reserved.</h6>
    </div>
    </>

  )
}

export default Footer
