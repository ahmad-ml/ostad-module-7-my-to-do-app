export const Footer = () => {
    const fullName = 'Ahmad';
    const occupation = 'Web Developer';
    const favoriteQuote = "Time is a precious resource. Don't wait for it to happen, make it happen.";
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <h3>About {fullName}</h3>
          {/* <blockquote className="favorite-quote">
            "{favoriteQuote}"
          </blockquote>
          <p>
            This quote inspires me to dream big and not be afraid of stumbling along the way. It reminds me that failure is not the end but an opportunity to learn, improve, and achieve greater things.
          </p> */}
        </div>
        <div className="footer-social">
        <a href="https://www.linkedin.com/coolhead" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/linkedin.png" alt="LinkedIn Icon"></img>
  </a>
  <a href="https://github.com/ahmad-ml/ostad-module-7-my-to-do-app.git" target="_blank" rel="noopener noreferrer">
    <img src="src/assets/github.png" alt="GitHub Icon"></img>
  </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {fullName}. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  