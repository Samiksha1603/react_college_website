import Card from 'react-bootstrap/Card';
import Navigation from './Navigation';
function Contact() {
  return (
    <div >
         <Navigation />
        <br></br>
    <Card className='m-5'>
      <Card.Body ><b>Address :</b> Hashu Advani Memorial Complex, Collector’s Colony, Chembur, Mumbai – 400 074. India.
        <br></br>

        <b>Tel :</b> +91-22-61532510 / 27 (Admission)
<br></br>
<b>Fax :</b> +91-22-61532555
<br></br>
<b>Email :</b> vesit@ves.ac.in      <br></br>
            vesit.admission@ves.ac.in      <br></br>
            vesit.website@ves.ac.in      <br></br>
            exam.vesit@ves.ac.in  
            (Transcripts / Exam)    <br></br>
            vesit.research@ves.ac.in (R&D)</Card.Body>
    </Card>
    </div>
  );
}

export default Contact;