import Header from './Header';
import About from './About';
import React from 'react';
import Contact from './Contact';
import Footer from './Footer';


import Home from './Home';
import {  Container, Stack } from 'react-bootstrap'



class App extends React.Component {
  

 



  


  

    


  render() {
    
    return (
      <Container>
        <Header />
        <section id="home"> <Home /></section>
        <Stack gap={3}>
       <section id="about"> <About /></section>
        
          
       <section id="contact">  <Contact/></section>
       

           
          
          
          
       
        
          
         
         
          
          
       
  
       <section id="footer"> <Footer /></section>
          </Stack>
        
      
        
        
      </Container>
    );
  }
}

export default App;
