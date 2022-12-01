import logo from "./banner.module.css";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = () => {
    return (
      <header className="row mb-4">
      <div className="col-2">
          <img src="./LogoLibraryVerse.jpg" alt="logo" className={logo} />
      </div>
      <div className="col-7 mt-4" style={subtitleStyle}>
      Your Library a  click away!
      </div>
    </header>
  );
};

export default Banner;