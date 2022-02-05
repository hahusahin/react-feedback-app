function Header({text}) {

  return (
    <header>
      <div className="container">
         <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App"
}

export default Header;
