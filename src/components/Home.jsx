import React from 'react';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="parallax__group hero-container">
        <div className="parallax__layer sky"></div>
        <div className="parallax__layer bushes"></div>
        <div className="parallax__layer water"></div>
        <div className="parallax__layer people1"></div>
        <div className="parallax__layer people2"></div>
        <div className="parallax__layer people3"></div>
        <div className="parallax__layer hero-text">
          <h2>Parallax</h2>
          <h4>About Us</h4>
         <div className='btn'>Join to us</div>
          <div className="name-container">
            <p className='name'>By TakeMyEye</p>
          </div>
        </div>
        <div className='socium'>
          <a href="https://github.com/Takemyeye">Git Hub</a>
          <a href="https://t.me/+_A-d1T6L8a02NzU0">Telegram</a>
          <a href="https://www.instagram.com/takemyeyehz/">Instagram</a>
        </div>
      </div>
      <div className="parallax__group info-container">
        <video src="video/video-bottom.mp4" autoPlay loop muted playsInline></video>
      </div>
    </div>
  );
};

export default Home;