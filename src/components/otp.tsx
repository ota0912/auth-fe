import { useState, useEffect } from "react";
import signup from "../assets/signup.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

interface FormData {
  otp: string
}

const Otp: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("mode")==null || localStorage.getItem("contact")==null)
      navigate("/signup")
  }, [navigate]); 

  const [formData, setFormData] = useState<FormData>({otp: ''});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("https://auth-template-1.onrender.com/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: localStorage.getItem("mode"),
          contact: localStorage.getItem("contact"),
          otp: formData.otp
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      const json = await response.json();
      const data = json.data;
      localStorage.setItem("jwt",data);

      localStorage.removeItem("mode");
      localStorage.removeItem("contact");
      
      navigate("/welcome");

    } catch (error) {
      toast.error(String(error),{position:"bottom-right"});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <img className="logo" src={signup} />
      <div className="box">
        <div className="switch">
          <h3>OTP <span>Verification</span></h3>
          <p></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp">OTP:</label>
            <input
              placeholder="Enter OTP:"
              type="otp"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit" type="submit">
            {isLoading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <ToastContainer/>
    </section>
  )
}

export default Otp