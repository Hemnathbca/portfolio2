 import React from 'react' 
 import logo from './images/hema.jpg'; 
 import p3 from './images/p3.png';
 import  './style.css'; 
 import scroll from './images/scroll-top.png'; 
 import p1 from './images/p1.png'; 
 import p2 from './images/p2.png'; 
 import { useState } from 'react'; 
 import axios from 'axios';
 import { FaBars,FaWhatsapp} from 'react-icons/fa'; 
  
 const Hema = () => { 

    
     const[toggle,setToggle]=useState(false)

     const[value,setValue]=useState({ 
         name:"", 
         email:"", 
         project:"", 
         message:"" 
     }) 
     const handler = async(e)=>{ 
         e.preventDefault(); 
         try{ 
         const {data} = await axios.post("http://localhost:7000/api/user",{ 
         ...value, 
         }).then(res=>console.log(res))
     }catch(err){ 
         console.log(err); 
     } 
  
     } 

     return ( 
     <div> 
     <header className={toggle?"toggle":"toggle-move"} id='tog' style={{top:'0',position:'fixed'}}> 
 <div className="user"> 
 <img src={logo} alt='profile'/> 
 <h3 className='name'>Hemnath</h3> 
 <p className='post'>Front End Developer</p> 
 </div> 
 <nav className='navbar'> 
     <ul> 
         <li><a href='#home'>Home</a></li> 
         <li><a href='#about'>About</a></li> 
         <li><a href='#education'>Education</a></li> 
         <li><a href='#portfolio'>Project</a></li> 
         <li><a href='#skill'>Skills</a></li>
         <li><a href='#contact'>Contact</a></li> 
  
     </ul> 
 </nav> 
  
 </header> 
  
 <div id='menu' onClick={()=>setToggle(!toggle)}><FaBars/></div> 
  
      
  
  
 <section className='home' id='home'> 
     <h3>HI THERE !</h3> 
     <h1>I'M <span>Hemnath</span></h1> 
     <p>Front End Developer</p> 
     <a href='#about'><button className='btn'>About me <i class="user icon"></i></button></a> 
 </section> 
  
 <section className='about' id='about'> 
 <h1 className='heading'> <span>about</span>me</h1> 
 <div className='row'> 
     <div className='info'> 
         <h3><span>name:</span>Hemnath</h3> 
         <h3><span>age:</span>20</h3> 
         <h3><span>qualification:</span>BCA</h3> 
         <h3><span>post:</span>Front end developer</h3> 
         <h3><span>language:</span>English, tamil</h3> 
         <a href='https://drive.google.com/file/d/1b58q-owNhTUsV4J4I_75ggEX_NGfZ7g0/view?usp=sharing' target='_blank'>
            <button className='btn'>
                Download CV 
                <i class="download icon"></i>
                </button>
                 </a> 
     </div> 
     <div className='counter'> 
         <div className='box'> 
             <span>2+</span> 
             <h3>Year of Experience</h3> 
         </div> 
  
 <div className='box'> 
     <span>3</span> 
     <h3>Project Completed</h3> 
 </div> 
  
 <div className='box'> 
     <span>1</span> 
     <h3>Happy Clients</h3> 
 </div> 
  
 <div className='box'>  
 <span>Nil</span> 
 <h3>Awords won</h3> 
 </div> 
  
     </div> 
  
 </div> 
  
 </section> 
  
 <section className='education' id='education'> 
     <h1 className='heading'>My <span>Education</span></h1> 
     <div className='box-container'> 
         <div className='box'> 
         <i class="graduation cap icon"></i> 
             <span>2018 - 2021</span> 
             <h3>BCA</h3> 
             <p>St.Joseph's College of Arts And Science (Autonomous) </p> 
         </div> 

         <div className='box'> 
 <i class="graduation cap icon"></i> 
     <span>2021 - Present</span> 
     <h3>M.sc Info Tech</h3> 
     <p>St. Joseph's College of Arts and Science (Autonomous)</p> 
 </div> 

 <div className='box'> 
 <i class="graduation cap icon"></i> 
     <span>2022</span> 
     <h3>Front End Developer</h3> 
     <p>Free Lanser</p> 
 </div> 
  
 <div className='box'> 
 <i class="graduation cap icon"></i> 
     <span>2022</span> 
     <h3>UI & UX</h3> 
     <p>Free Lanser</p> 
 </div> 
 <div className='box'> 
 <i class="graduation cap icon"></i> 
     <span>2022</span> 
     <h3>Graphic Design</h3> 
     <p>Free Lanser</p> 
 </div> 
 
     </div> 
 </section> 
  
 <section className='portfolio' id="portfolio"> 
  
 <h1 className='heading'>My <span>Project</span></h1> 
 <div className='box-container'> 
 <div className='box'> 
    <a href='#'><img src={p1} alt=''/></a>
 </div> 
 <p>Hemnath Arts</p> 
  
 <div className='box'> 
    <a href='http://techdhamaka22.epizy.com/?i-1' target='_blank'><img src={p2} alt="image"/></a> 
 </div> 
 <p>Techxtra & Dhamka</p> 
  
 <div className='box'> 
    <a href='http://zephyrsjc.epizy.com' target='_blank'><img src={p3} alt="image"/></a> 
 </div> 
 <p>SJC Zephyr</p> 

 </div> 
  
 </section>

 <section className='skill' id='skill'>
 <h1 className='heading'>My <span>Skills</span></h1> 
<div className='header skill-head'>

    <p>Here is my skill to represent my Expertise</p>
</div>
<div className='skill-main'>
    <div className='skill-bar'>
        <div className='info'>
            <p>Html</p>
            <p className='percent'>85%</p>
        </div>
        <div className='bar'>
            <span className='html'></span>
        </div>
    </div>

    <div className='skill-bar'>
        <div className='info'>
            <p>Css</p>
            <p className='percent'>75%</p>
        </div>
        <div className='bar'>
            <span className='css'></span>
        </div>
    </div>

    <div className='skill-bar'>
        <div className='info'>
            <p>Javascript</p>
            <p className='percent'>50%</p>
        </div>
        <div className='bar'>
            <span className='js'></span>
        </div>
    </div>

    <div className='skill-bar'>
        <div className='info'>
            <p>Bootstrap</p>
            <p className='percent'>60%</p>
        </div>
        <div className='bar'>
            <span className='bootstrap'></span>
        </div>
    </div>

    <div className='skill-bar'>
        <div className='info'>
            <p>Reactjs</p>
            <p className='percent'>50%</p>
        </div>
        <div className='bar'>
            <span className='react'></span>
        </div>
    </div>

    <div className='skill-bar'>
        <div className='info'>
            <p>Adobe</p>
            <p className='percent'>95%</p>
        </div>
        <div className='bar'>
            <span className='adobe'></span>
        </div>
    </div>

</div>
    </section> 
  
 <section className='contact' id='contact'> 
  
     <h1 className='heading'><span>Contact</span>me </h1> 
     <div className='row'> 
         <div className='content'> 
             <h3 className='title'> Contact Info </h3> 
             <div className='info'> 
                 <h3><i class="envelope icon"></i> hemnathfed@gmail.com</h3> 
                 <h3><i class="phone icon"></i> +91 6382735981</h3> 
                 <h3><i class="whatsapp icon"></i>+91 7397050284</h3>
                 <h3><i class="map marker alternate icon"></i> No.54, Mariyamman kovil st, Vanamadevi, Cuddalore - 607 105. </h3> 
              
                 

                 </div>  
         </div> 

         
  
 <form action=''> 
     <input type="text" placeholder='name' name='name' className='box' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> 
     <input type='email' placeholder='email' name='email' className='box' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> 
     <input type='text' placeholder='project' name='project' className='box' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> 
     <textarea name='message' id='' cols='30' row='10'  className='box message' placeholder='message' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> 
     <button type='submit' className='btn' onClick={handler}>send <i class="paper plane icon"></i></button> 
 </form> 
      
 <div className='socialmedia'>
      <h2><a href='https://www.linkedin.com/in/hemnath-arivazhagan-29a2551b8/'><i class="linkedin icon"></i></a></h2>
      <h2><a href='https://github.com/Hemnathbca' target='_blank'><i class="github icon"></i></a></h2>
      <h2><a href='https://www.facebook.com/profile.php?id=100086405317532' target='_blank'><i class="facebook icon"></i></a></h2>
      <h2><a href=''><i class="twitter icon"></i></a></h2>
      <h2><a href='https://www.instagram.com/hemnath_fed/' target='_blank'><i class="instagram icon"></i></a></h2>
      </div>

     </div> 
 </section> 
 <div className='scroll'>
     <a href='#home' className='top'> 
     <img src={scroll} alt=''/>
 </a> 
 </div>


  
 </div> 
 
  
     ); 
 }

 
  
 export default Hema;