const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = ({ children }) => {
    return (
      <header className="classNameHeader">
      <div className="classNameLogoDiv">
          <img src="./LogoLibraryVerse.jpg"  alt="logo" className="logo" />
      </div>
      <div className="classNameHeadingX" style={subtitleStyle}>
      Your Library a  click away!.
      {children}
      </div>
    </header>
  );
};

export default Banner;