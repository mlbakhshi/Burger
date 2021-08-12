import React from 'react'
import classes from './logo.module.css';
import imageLogo from './../../assets/image/27.1-burger-logo.png.png';
const Logo =()=>
{
    return(
       <div className={classes.Logo}>
           <img src={imageLogo} />
       </div>
    )
}
export default Logo;