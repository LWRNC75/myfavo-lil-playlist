import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container className='mt-5'>
      <Jumbotron>
        <h1>About me!</h1>
        <p>As a frontend developer, Lawrence is learning web development with a focus on JavaScript. I create websites using modern web design best practices to give your website visitors an amazing experience that keeps them coming back. I build sites that look good and perform well on any device. I specialize in building and maintaining custom websites. If this sounds like what you are looking for, then send me an invite and let's chat!</p>
        <Button href='/' variant='primary'>
          Go to My PlayList
        </Button>
      </Jumbotron>
    </Container>
  );
};

export default About;
