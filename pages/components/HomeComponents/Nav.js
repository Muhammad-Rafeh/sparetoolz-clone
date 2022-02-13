import React, { useEffect } from 'react'
import styles from '../../../styles/Nav.module.css'
import shoppingBag from '../../../images/shopping-bag.png'
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';


function Nav() {

    useEffect(()=>{
        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var navbarOption1 = document.getElementById("navbarOption1");
        var navbarOption2 = document.getElementById("navbarOption2");
        var navbarOption3 = document.getElementById("navbarOption3");
        var navbarOption4 = document.getElementById("navbarOption4");
        var navbarOption5 = document.getElementById("navbarOption5");
       
// Get the offset position of the navbar
        var sticky = navbar.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
              navbar.classList.add("sticky");
              navbarOption1.classList.add("navbar-option-make-black");
              navbarOption2.classList.add("navbar-option-make-black");
              navbarOption3.classList.add("navbar-option-make-black");
              navbarOption4.classList.add("navbar-option-make-black");
              navbarOption5.classList.add("navbar-option-make-black");
                  
             
             // navBarOption.classList.add("navbar-options-make-black");
            } else {
              navbar.classList.remove("sticky");
              navbarOption1.classList.remove("navbar-option-make-black");
              navbarOption2.classList.remove("navbar-option-make-black");
              navbarOption3.classList.remove("navbar-option-make-black");
              navbarOption4.classList.remove("navbar-option-make-black");
              navbarOption5.classList.remove("navbar-option-make-black");
             
               
         
              //navBarOption.classList.remove("navbar-options-make-black");
            }
          }
          
    },[])

    
    const enableDropdown = () => {
        var dropDown = document.getElementById("dropdown");
        dropDown.classList.add('dropdownVisible');
        dropDown.classList.remove('dropdownNotVisible');
    }
    
    const unableDropdown = () => {
        var dropDown = document.getElementById("dropdown");
        dropDown.classList.remove('dropdownVisible');
        dropDown.classList.add('dropdownNotVisible');
    }


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

    return (
        <div>
            <div className={styles.navContainer} id="navbar" >
                <div className={styles.navLogoWrapper}>
                    <div className ={styles.navLogo}>
                        Logo
                    </div>
                </div>
                
                <nav className={styles.navWrapper} >
                    {/* <div id="navbar-options"> */}
                        
                    <div className={styles.navOptions} className="navbar-options-g navOptions" id="navbarOption1">
                            Features
                        </div>
                        <div className={styles.navOptions} className="navbar-options-g navOptions" id="navbarOption2">
                            Info / FAQ
                        </div>
                        <div className={styles.navOptions} className="navbar-options-g navOptions" id="navbarOption3">
                            Blog
                        </div>
                        <div className={styles.navOptions} className="navbar-options-g navOptions" id="navbarOption4">
                            About
                        </div>
                        <div className={styles.navOptions} className="navbar-options-g navOptions" id="navbarOption5">
                            Contact Us
                        </div>
                    {/* </div> */}
                        
                        <div className={styles.navButtonAndCartWrapper}>
                            <button className={styles.navButton}>DOWNLOAD NOW</button>
                            <button className={styles.hamburger} onClick={enableDropdown}>
                                <AiOutlineMenu className={styles.hamburgerIcon}/>
                            </button>
                            <div className={styles.navImgWrapper}>
                                <Image width={24} height={24} src={shoppingBag} />
                            </div>
                        </div>
                </nav>
            </div>
            <div className={styles.dropDownContainer} id="dropdown">
                <div className="d-flex justify-content-center flex-column text-center">
                    <div className="d-flex justify-content-between col-12">
                        <div className={styles.dropDownLogo+" m-2"}>L</div>
                        <button className={styles.closeDropdownIcon+" m-2"} onClick={unableDropdown}>x</button>
                    </div>
                    <div className={styles.dropDownOptions}>
                        Features
                    </div>
                    <div className={styles.dropDownOptions}>
                        Info / FAQ
                    </div>
                    <div className={styles.dropDownOptions}>
                        Blog
                    </div>
                    <div className={styles.dropDownOptions}>
                        About
                    </div>
                    <div className={styles.dropDownOptions}>
                        Contact Us
                    </div>
                    <div>
                     <button className={styles.dropDownNavButton}>DOWNLOAD NOW</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Nav
