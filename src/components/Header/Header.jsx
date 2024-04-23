import "./StyleHeader.css";
import FormAdd from "./FormAdd";
function Header() {
  return (
    <div className="header">
      <div>
        <FormAdd />
      </div>
      <div className="bg"></div>
    </div>
  );
}

export default Header;
