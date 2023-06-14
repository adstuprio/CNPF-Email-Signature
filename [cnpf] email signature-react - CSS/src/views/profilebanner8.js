import React from 'react'

import { Helmet } from 'react-helmet'

import './profilebanner8.css'

const Profilebanner8 = (props) => {
  return (
    <div className="profilebanner8-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profilebanner8-profilebanner8">
        <img
          src="/external/rectangle51164-ntw4-200h.png"
          alt="Rectangle51164"
          className="profilebanner8-rectangle5"
        />
        <img
          src="/external/facpfilogo0211165-hs6-200w.png"
          alt="FACPFILOGO0211165"
          className="profilebanner8-facpfilogo021"
        />
        <img
          src="/external/rectangle11166-rcs-200h.png"
          alt="Rectangle11166"
          className="profilebanner8-rectangle1"
        />
        <span className="profilebanner8-text">
          <span className="profilebanner8-text01">
            ALIA
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>TUPRIO</span>
        </span>
        <span className="profilebanner8-text03">
          <span>INVESTOR RELATIONS INTERN</span>
        </span>
        <span className="profilebanner8-text05">
          <span>centurypacific.com.ph</span>
        </span>
        <img
          src="/external/vector1173-n32r.svg"
          alt="Vector1173"
          className="profilebanner8-vector"
        />
        <span className="profilebanner8-text07">
          <span>+63 998 323 1793</span>
        </span>
        <img
          src="/external/vector1176-om0h.svg"
          alt="Vector1176"
          className="profilebanner8-vector1"
        />
        <span className="profilebanner8-text09">
          <span>
            Center Point, 7/F Garnet Rd., Ortigas Center, Pasig, Metro Manila,
            Philippines
          </span>
        </span>
        <img
          src="/external/vector1179-lo7.svg"
          alt="Vector1179"
          className="profilebanner8-vector2"
        />
        <span className="profilebanner8-text11">
          <span>alia.tuprio@gmail.com</span>
        </span>
        <span className="profilebanner8-text13">@</span>
      </div>
    </div>
  )
}

export default Profilebanner8
