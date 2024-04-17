import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("jwt")) 
            navigate("/signup");
    }, [navigate]);

    return (
        <div>welcome</div>
    )
}

export default Welcome