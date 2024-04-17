import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("jwt")) 
            navigate("/signup");
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate("/signup");
    };

    return (
        <article>
            <h1>WELCOME</h1>
            <button className="submit" onClick={handleLogout}>Logout</button>
        </article>
    )
}

export default Welcome