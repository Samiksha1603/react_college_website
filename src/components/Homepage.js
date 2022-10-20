import Carousel from 'react-bootstrap/Carousel';
import Navigation from './Navigation';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

const Homepage = (props) =>{
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div>
        <Navigation />
<br></br>
<center> <h1>
    Vivekanand Education Society's Institute of Technology
    </h1></center>
    <br></br>
        <img
          className="d-block w-100"
          src="https://images.static-collegedunia.com/public/college_data/images/appImage/15528_VESIT.jpg"
          alt="First slide"
        />
<br></br>
       <b> {props.user}</b>
        <br></br>
        <br></br>
        <Button onClick={() => openInNewTab('/Academics')} href="#" style={{ width: '10rem' }} >Academics</Button> {' '}
        <Button onClick={() => openInNewTab('/Contact')} href="#" style={{ width: '10rem' }} >Contact us</Button> {' '}
        <br></br>
        <br></br>
      </div>
      
  );
  
}

export default Homepage;