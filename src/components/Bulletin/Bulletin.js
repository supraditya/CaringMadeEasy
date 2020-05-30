import React from 'react';
import Parallax from '../../components/Parallax/Parallax';
import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import Image4 from '../../assets/Image4.jpg';
import Image5 from '../../assets/Image5.jpg';
const Bulletin=()=>{
    return(
        <div className="Bulletin">
            <br></br>
          <br></br>
          <br></br>
          <Parallax url={Image1} title="" content=""/>
          <Parallax url={Image2} title="" content=""/>
          <Parallax url={Image3} title="" content=""/>
          <Parallax url={Image4} title="" content=""/>
          <Parallax url={Image5} title="" content=""/>
        </div>
    );
}
export default Bulletin;
