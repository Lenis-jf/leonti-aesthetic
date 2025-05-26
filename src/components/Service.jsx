import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Service = ({path, name, description}) => {
    return(
        <HashLink smooth to={path} className="service">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="arrow-container"></div>
        </HashLink>
    );
}

export default Service;