import logo from "./banner.module.css";

const logoStyle={
  height:"50px"
}

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = ({ children }) => {
    return (
      <header className="row mb-4">
      <div className="classNameLogoDiv">
          <img src="./LogoLibraryVerse.jpg" style={logoStyle}  alt="logo" className={logo} />
      </div>
      <div className="classNameHeadingX" style={subtitleStyle}>
      Your Library a  click away!.
      {children}
      </div>
    </header>
  );
};

export default Banner;