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
        <>
            <div>welcome</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Welcome