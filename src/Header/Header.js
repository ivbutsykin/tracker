import logo from './logo.png'; // Tell webpack this JS file uses this image

function Header() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Logo"/>
    </div>
  );
}

export default Header;
