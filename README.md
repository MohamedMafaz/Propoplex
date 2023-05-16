# Propoplex
Introducing Propoplex. Propoplex is an AI-powered platform that helps freelancers write compelling and optimized proposals for popular freelancing sites, and manage and track their success. With customizable templates and proposal management tools, Propoplex makes it easy to impress clients and win more business. We are open for Contributions!
# Guidelines for Contributors
Propoplex is an open-source project, and we welcome contributions from the community. However, in order to maintain a healthy and productive environment, we ask all contributors to follow these guidelines:

- **Respect other contributors:** Propoplex is a collaborative effort, and we ask all contributors to be respectful and professional in their interactions with others. Personal attacks, harassment, or any other form of unacceptable behavior will not be tolerated.

- **You don't need permission to start working on an issue:** If you find an issue that you would like to work on, you can simply comment on the issue to let us know that you are working on it. This will help us avoid having multiple contributors working on the same issue at the same time. However, we ask that you can start working on an issue even you have been not assigned to it.

- **Create a Github page for your forked repository:** If you are working on a fork of the Propoplex repository, we encourage you to create a Github page for your forked repository and include the link in your pull request. This will help us review your changes more easily and provide feedback.

- **We welcome contributors to open issues:** If you have identified a bug or have a feature request, we welcome you to open an issue in the Propoplex repository. However, we ask that you first search the existing issues to ensure that your issue has not already been reported. When opening an issue, please provide as much detail as possible, including steps to reproduce the issue, and any relevant error messages.

- By following these guidelines, we hope to maintain a positive and productive environment for all contributors to the Propoplex project.

# Guidelines for New Page Developers
<<<<<<< HEAD
**Code for Favicon**

<link rel="icon" href="Images/Favicon.svg" type="image/x-icon" />


=======
>>>>>>> 8b4e13b (first commit)
When you creating a new page for Propoplex, You must need to add Navbar with given code
**HTML**
'''<nav>
      
      <div class="navbar">
        
        <img src="Images/Logo.svg" alt="Logo" class="logo" />
  
        <div class="mainMenu">
        <a href="#" class="home"><i class="fas fa-home"></i>Home</a>
        <a href="#"><i class="fas fa-box"></i>Services</a>
        <a href="#"><i class="fas fa-mobile"></i>Contact</a>
        <a href="#"><i class="fas fa-user"></i>About</a>
        <a href="#"><i class="fas fa-pen"></i>Request New Tool</a>
        <button class="premium_button">
          <i class="fas fa-crown"></i>GO PREMIUM
        </button>
  
        <a href="#" style="margin-top: 70px"
          ><span class="icon">&#xf013;</span>Settings</a
        >
        <a href="#"><span class="icon">&#xf05a;</span>Get Help</a>
        <a href="#"><span class="icon">&#xf2f5;</span>Logout</a>
        </div>
       
      </div>
      </nav>
      
Here the CSS Code for Navbar:
'''@font-face {
    font-family: 'Font Awesome 5 Free';
    src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2') format('woff2'),
    url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  
.navbar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 223px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 2px 4px 10px 1px rgba(138, 125, 125, 0.25);
  }

  /* Set the style for the links inside the navbar */
  .navbar a {
    display: block;
    color: #7b7b7b;
    text-decoration: none;
    padding: 10px;
    margin-left: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: 0.04em;
  }

  /* Change the color of the link when it's hovered over */
  .navbar a:hover {
    background: #F5F5F5;
    border-radius: 7px;
  }

  /* Set the style for the content that appears next to the navbar */
  .content {
    margin-left: 150px;
    padding: 20px;
    box-sizing: border-box;
  }

.premium_button {
    width: 167.48px;
    height: 42px;
    background: linear-gradient(265.55deg, #3EC1C7 19.07%, #18939C 101.72%);
    border-radius: 7px;
    border: none;
    color: #fff;
    display: block; 
    margin: auto;
    margin-top: 20px; 
    margin-left: 20px;
}

.title {
    font-family: 'Poppins';
    font-style: bold;
    font-weight: 900;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */

    letter-spacing: 0.04em;
    text-align: center;
    color: #16666C;
    margin-left: 350px; 
    display: inline-block;
    
}

.nav-link.active {
    background-color: #7b7b7b;
    color: #000000;
  }

.icon {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  font-style: normal;
  margin-right: 10px;
 
}

/* Set the style for the content that appears next to the navbar */
.content {
    margin-left: 150px;
    padding: 20px;
    box-sizing: border-box;
  }

.premium_button {
    width: 167.48px;
    height: 42px;
    background: linear-gradient(265.55deg, #3EC1C7 19.07%, #18939C 101.72%);
    border-radius: 7px;
    border: none;
    color: #fff;
    display: block; 
    margin: auto;
    margin-top: 20px; 
    margin-left: 20px;
}

.nav-link.active {
    background-color: #7b7b7b;
    color: #000000;
  }

  .navbar i {
    margin-right: 10px;
  }
