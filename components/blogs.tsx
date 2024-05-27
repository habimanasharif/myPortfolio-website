// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

const BlogContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 15px;
margin-top:50px;
`
const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
`



const Blogs = () => {
    
 

  return (
    <BlogSection>
      <h2>My Blogs</h2>
    <BlogContainer>

     <div style={{ }}  >
      <div  style={{ width:'100%',height:'300px', borderRadius:'9px',backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat',
        marginBottom:'20px',backgroundImage:'url("/images/me.png")'}} >

      </div>
      <div > 
        <span style={{fontSize:'14px'}}>16 Apr, 2024</span>
          <h3 style={{fontSize:'18px'}}> Are you there</h3>
          <p style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in facilis fugiat, </p>
        </div>
 
     </div>
      <div >

        <div style={{display:'flex', flexGap:'15px', marginBottom:'10px'}}>

          <div  style={{ width:'100px',height:'100px', borderRadius:'9px',backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat',
        marginBottom:'20px',backgroundImage:'url("/images/me.png")'}}></div>
        <div style={{flexGrow:1, width:'40%', paddingLeft:'10px'}}> 
        <span style={{fontSize:'14px'}}>16 Apr, 2024</span>
          <h3 style={{fontSize:'18px'}}> Are you there</h3>
          <p style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in facilis fugiat, </p>
        </div>
           </div>

           <div style={{display:'flex', flexGap:'15px', marginBottom:'10px'}}>

<div  style={{ width:'100px',height:'100px', borderRadius:'9px',backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat',
marginBottom:'20px',backgroundImage:'url("/images/me.png")'}}></div>
<div style={{flexGrow:1, width:'40%', paddingLeft:'10px'}}> 
<span style={{fontSize:'14px'}}>16 Apr, 2024</span>
<h3 style={{fontSize:'18px'}}> Are you there</h3>
<p style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in facilis fugiat, </p>
</div>
 </div>

 <div style={{display:'flex', flexGap:'15px', marginBottom:'10px'}}>

<div  style={{ width:'100px',height:'100px', borderRadius:'9px',backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat',
marginBottom:'20px',backgroundImage:'url("/images/me.png")'}}></div>
<div style={{flexGrow:1, width:'40%', paddingLeft:'10px'}}> 
<span style={{fontSize:'14px'}}>16 Apr, 2024</span>
<h3 style={{fontSize:'18px'}}> Are you there</h3>
<p style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in facilis fugiat, </p>
</div>
 </div>

      </div>
      </BlogContainer>
    </BlogSection>
  );
}

export default Blogs;
