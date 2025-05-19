import { Link } from "react-router-dom";

const Service = ({path, name, description}) => {
    return(
        <Link to={path} className="service">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="arrow-container"></div>
        </Link>
    );
}

export default Service;