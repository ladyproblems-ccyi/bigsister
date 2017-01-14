import React, {PropTypes} from 'react';
import Footer from './Footer';


const StartupFrame = (props) => {
  return(
    <div>
      <header>big sister title banner or image</header>
      <section>
        <p>You are not alone. Find your big sister here.</p>
      </section>
      {props.children}
      <Footer/>
    </div>
  );
};

StartupFrame.propTypes = {
  children: PropTypes.object
};

export default StartupFrame;
