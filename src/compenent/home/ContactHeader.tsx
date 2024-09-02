import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactHeader() {

  return (
    <div
      style={{ marginLeft: "60px" }}
      className="mx-4 py-4  rounded-md md:flex md:items-center md:justify-between"
    >
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            height={20}
            width={20}
          />
          <span
            className="mx-2"
            style={{ fontWeight: "bold" }}
          >
            +123-456-7890
          </span>
        </div>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            height={20}
            width={20}
          />
          <span
            className="mx-2"
            style={{ fontWeight: "bold" }}
          >
            info@onlinemedia.com
          </span>
        </div>
      </div>

    </div>
  )

}
