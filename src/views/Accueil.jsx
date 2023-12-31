import React, { useState, useEffect } from 'react';
import bibimbap from '../assets/images/bibimbapDessin.webp';
import bingsu from '../assets/images/hotteokDessin2.webp';
import kimbap from '../assets/images/kimbapDessin.svg';
import freshTea from '../assets/images/chickenImage.jpg';
import dish from '../assets/images/koreanDish.png';
import Popup from '../components/Popup';
import logo from '../assets/images/logoAccueil.png';
import logoInsta from '../assets/images/logoInsta.png';
import logoFb from '../assets/images/logoFb.png';

function Accueil() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('modalDisplayed') === 'true') {
      setIsModalDisplayed(true);
    }
  }, []);

  useEffect(() => {
    if (isModalDisplayed) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalDisplayed]);

  return (
    <>
    {/* <Popup onClose={() => setIsModalDisplayed(false)} /> */}
    <div className='bgAccueil'>
      <div className="logoContainer">
      <img src={logo} className='svg'/>
        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="566.31" height="277.672" viewBox="0 0 566.31 277.672">
        <img src={logo} />
            <defs>
              <clipPath id="clipPath">
                <rect id="Rectangle_6" data-name="Rectangle 6" width="566.31" height="277.672" fill="#fff"/>
              </clipPath>
            </defs>
            <g id="Groupe_9" data-name="Groupe 9" clipPath="url(#clip-path)">
              <path id="Tracé_284" data-name="Tracé 284" d="M190.233,135.538a4.771,4.771,0,0,1-.606,2.485,2.245,2.245,0,0,1-2.153,1.046H174.052a2.005,2.005,0,0,1-1.715-.976,4.563,4.563,0,0,1-.644-2.555V32.929a29.929,29.929,0,0,1,2.7-12.58,32.835,32.835,0,0,1,7.367-10.229A34.091,34.091,0,0,1,205.507.7a34.4,34.4,0,0,1,23.849,9.419,33.334,33.334,0,0,1,7.336,10.229,29.47,29.47,0,0,1,2.721,12.58V135.334a5.661,5.661,0,0,1-.638,2.557,2.351,2.351,0,0,1-2.217,1.179H223.736a2.261,2.261,0,0,1-2.22-1.147,5,5,0,0,1-.638-2.588V33.807a16.526,16.526,0,0,0-1.145-6.162,15.466,15.466,0,0,0-3.194-5.111,16.135,16.135,0,0,0-4.882-3.563,15.1,15.1,0,0,0-12.313,0,15.654,15.654,0,0,0-4.843,3.563,16.516,16.516,0,0,0-3.161,5.111,17.289,17.289,0,0,0-1.109,6.162ZM106.349,6.353a4.114,4.114,0,0,1,.74-2.556,2.583,2.583,0,0,1,2.217-.975h12.651a2.587,2.587,0,0,1,2.223.975,4.114,4.114,0,0,1,.74,2.556V135.538a4.357,4.357,0,0,1-.677,2.588,2.618,2.618,0,0,1-2.286.943H109.305a2.608,2.608,0,0,1-2.283-.943,4.38,4.38,0,0,1-.674-2.588Zm-66.155,0a3.9,3.9,0,0,1,.74-2.689,2.27,2.27,0,0,1,1.816-.842H55.636a2.706,2.706,0,0,1,2.454,1.04,5.112,5.112,0,0,1,.674,2.8V107.211a36,36,0,0,1-2.553,13.824,32.7,32.7,0,0,1-6.965,10.7,31.549,31.549,0,0,1-10.427,6.894,33.575,33.575,0,0,1-12.918,2.46,36.375,36.375,0,0,1-7.1-.709,38.983,38.983,0,0,1-6.8-1.949,33.227,33.227,0,0,1-6.021-3.167,24.4,24.4,0,0,1-4.71-4.135A7.325,7.325,0,0,1,.2,128.777a2.867,2.867,0,0,1,.269-2.658l5.92-7.405A3.027,3.027,0,0,1,8.7,117.371a3.591,3.591,0,0,1,2.626,1.343,20.851,20.851,0,0,0,5.85,3.735,18.915,18.915,0,0,0,7.84,1.683,14.884,14.884,0,0,0,6.492-1.378,13.255,13.255,0,0,0,4.781-3.8,16.987,16.987,0,0,0,2.925-5.652,24.648,24.648,0,0,0,.975-7Z" transform="translate(0 0.358)" fill="#fff"/>
              <path id="Tracé_285" data-name="Tracé 285" d="M410.967,107.486a16.651,16.651,0,0,0,1.147,6.189,15.287,15.287,0,0,0,3.093,5.118,14.527,14.527,0,0,0,4.778,3.46,14.977,14.977,0,0,0,6.189,1.281,15.362,15.362,0,0,0,6.292-1.244,14.7,14.7,0,0,0,8.041-8.31,16.158,16.158,0,0,0,1.141-6.125V33.306a17.365,17.365,0,0,0-1.141-6.258,15.434,15.434,0,0,0-3.167-5.213,15.21,15.21,0,0,0-4.806-3.531,13.946,13.946,0,0,0-6.156-1.345,14.236,14.236,0,0,0-6.3,1.345,15.229,15.229,0,0,0-4.806,3.531,15.445,15.445,0,0,0-3.161,5.213,17.275,17.275,0,0,0-1.147,6.258ZM392.4,32.331a31.6,31.6,0,0,1,2.726-13.257,30.791,30.791,0,0,1,7.329-10.19,33.148,33.148,0,0,1,10.8-6.559,37.51,37.51,0,0,1,26,0,33.761,33.761,0,0,1,10.865,6.559,30.742,30.742,0,0,1,7.367,10.19,31.486,31.486,0,0,1,2.727,13.257v75.926a31,31,0,0,1-10.158,23.415,33.714,33.714,0,0,1-10.8,6.494,36.616,36.616,0,0,1-13.053,2.321,35.65,35.65,0,0,1-13.018-2.353,34.065,34.065,0,0,1-10.734-6.628,30.545,30.545,0,0,1-7.329-10.16,30.927,30.927,0,0,1-2.726-13.089Zm-77.106,75.155a16.739,16.739,0,0,0,1.141,6.189,15.392,15.392,0,0,0,3.1,5.118,14.524,14.524,0,0,0,4.781,3.46,14.965,14.965,0,0,0,6.187,1.281,15.324,15.324,0,0,0,6.29-1.244,14.327,14.327,0,0,0,4.882-3.333,14.5,14.5,0,0,0,3.161-4.977,16.187,16.187,0,0,0,1.142-6.125V33.306a17.4,17.4,0,0,0-1.142-6.258,15.541,15.541,0,0,0-3.161-5.213,15.3,15.3,0,0,0-4.811-3.531,13.959,13.959,0,0,0-6.159-1.345A14.207,14.207,0,0,0,324.41,18.3a15.162,15.162,0,0,0-4.811,3.531,15.506,15.506,0,0,0-3.167,5.213,17.366,17.366,0,0,0-1.141,6.258ZM296.719,32.331a31.557,31.557,0,0,1,2.729-13.257,30.77,30.77,0,0,1,7.33-10.19,33.115,33.115,0,0,1,10.8-6.559,37.523,37.523,0,0,1,26.008,0,33.811,33.811,0,0,1,10.865,6.559,30.892,30.892,0,0,1,7.367,10.19,31.578,31.578,0,0,1,2.721,13.257v75.926a31,31,0,0,1-10.158,23.415,33.735,33.735,0,0,1-10.8,6.494,36.647,36.647,0,0,1-13.057,2.321,35.66,35.66,0,0,1-13.021-2.353,34.05,34.05,0,0,1-10.731-6.628,30.524,30.524,0,0,1-7.33-10.16,30.883,30.883,0,0,1-2.729-13.089ZM247.839,5.755a3.9,3.9,0,0,1,.74-2.689,2.272,2.272,0,0,1,1.816-.842H263.28a2.708,2.708,0,0,1,2.454,1.04,5.105,5.105,0,0,1,.677,2.792V106.613a36.018,36.018,0,0,1-2.556,13.824,32.766,32.766,0,0,1-6.965,10.7,31.558,31.558,0,0,1-10.425,6.894,33.592,33.592,0,0,1-12.925,2.455,36.321,36.321,0,0,1-7.094-.7,38.569,38.569,0,0,1-6.8-1.954,32.992,32.992,0,0,1-6.023-3.162,24.609,24.609,0,0,1-4.71-4.135,7.384,7.384,0,0,1-1.071-2.359,2.862,2.862,0,0,1,.267-2.656l5.92-7.4a3.032,3.032,0,0,1,2.321-1.343,3.588,3.588,0,0,1,2.624,1.343,20.839,20.839,0,0,0,5.852,3.735,18.893,18.893,0,0,0,7.839,1.683,14.817,14.817,0,0,0,6.492-1.383,13.246,13.246,0,0,0,4.781-3.8,17.078,17.078,0,0,0,2.925-5.651,24.666,24.666,0,0,0,.975-7Z" transform="translate(106.093)" fill="#fff"/>
              <path id="Tracé_286" data-name="Tracé 286" d="M345.906,194.731H312.568v7.044h33.339Zm-44.236,16.113v-34.1h10.9v8.72h33.339v-8.72h10.808v34.1Zm28.838-38.254q-12.54-6.235-19.044-15.582-2.178,4.737-8.087,10.338a45.606,45.606,0,0,1-11.214,8.162l-7.889-7.83a35.7,35.7,0,0,0,14.961-10.625q6.346-7.436,6.331-15.461v-1.467H287.992v-9.248h45.872v9.248H316.739V141.2a19.727,19.727,0,0,0,5.742,13.769,35.127,35.127,0,0,0,15.1,9.2Zm15.4-45.342h10.9v45.87h-10.9Zm-106.534,53.67v31.739H228.307V180.918H194.3v-9.342h79.259v9.342Zm25.2-17.412a63.609,63.609,0,0,1-18.547-6.906q-8.547-4.83-12.181-10.052-3.624,5.51-12.211,10.37a57.277,57.277,0,0,1-17.8,6.589l-6.6-8.4q14.013-1.7,22.549-8.1,8.526-6.439,8.538-14.041v-3.9h11.065v3.9q0,7.708,8.464,14.162,8.454,6.482,22.445,8.071ZM160.025,212.657V188.927H113.853V179.5h23.154V167.149H103.619v-9.356h55.574q.66-10.407.665-19.3h-43.8v-9.339h54.953q0,11.38-1.1,28.64h12.97v9.356H148.069V179.5h23.123v33.16Z" transform="translate(52.942 65.015)" fill="#fff"/>
            </g>
        </svg> */}
    </div>
    <div className='imgList'>
        <img className='bibimbapImg' src={bibimbap} />
        <img className='kimbap' src={kimbap} />
        {/* <img className='dumplingImg' src={bingsu} /> */}
        {/* <img className='chickenImg' src={freshTea} /> */}
        <img className='facade' src={dish} />
    </div>
    </div>
    <div className='footer'>
      <hr className='hrFooter'/>
        <p className='HQ'>Woko Holding</p>
        <div className='contacts'>
          <a className='contact contact1' href="https://jin-joo.fr/#/contact">contact</a>
          <a className='contact' href="https://jin-joo.fr/#/mentions">mentions légales</a>
        </div>
        <div className='socials'>
          <a className='socialContainer' href="https://www.instagram.com/jinjoo_food/?hl=fr"><img className='social' src={logoInsta}/></a>
          <a className='socialContainer' href="https://www.facebook.com/jinjoo.food"><img className='social' src={logoFb}/></a>
        </div>
    </div>
    </>

  );
};

export default Accueil; 