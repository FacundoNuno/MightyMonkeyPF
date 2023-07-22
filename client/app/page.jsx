'use client'
import styles from "./login.module.css";
import { useState } from "react";
import RecoverPass from "../components/recoverPass/RecoverPass"
import SignIn from "../components/signin/SignIn"
import SignUp from "../components/register/Register"
import logo from "../assets/images/logo.png"
import Image from "next/image";

export default function Login() {



  // experimental

  const [activeComponent, setActiveComponent] = useState('signIn');

  // Function to switch between components
  const changeComponent = (componentName) => {
    console.log('Changing component to:', componentName);
    setActiveComponent(componentName);
  };

  // Conditionally render the active component

  
  let componentToDisplay;
  if (activeComponent === 'signIn') {
    componentToDisplay = <SignIn 
      changeComponent = {changeComponent}    />;
  } else if (activeComponent === 'register') {
    componentToDisplay = <SignUp 
    changeComponent = {changeComponent} />;
  } else if (activeComponent === 'recoverPass') {
    componentToDisplay = <RecoverPass
    changeComponent = {changeComponent}  />;
  }
  

  return  (

    <div className={styles.loginScreen}>
          
          <div className={styles.loginImgContainer}>
            <Image 
            src={logo}
            className={styles.loginLogo}/>
            </div>

      <div className={styles.loginTrapezoid}>
        <div className={styles.contentContainer}>
      {componentToDisplay}            
        </div>
      </div>
    </div>
  );
}