import { useState } from "react";
import login from "../assets/login.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

interface FormData {
  password: string;
  mode: string;
  contact: string;
}

const Login: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    password: '',
    mode: '',
    contact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://auth-template-1.onrender.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: formData.password,
          mode: formData.mode,
          contact: formData.contact,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      const json = await response.json();
      const data = json.data;
      
      localStorage.setItem("jwt",data);

      navigate("/welcome");

    } catch (error) {
      toast.error(String(error),{position:"bottom-right"});
    }
  };

  return (
    <section>
      <img src={login} />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="mode">Contact Mode:</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="">Select Contact Mode</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact">Email:</label>
            <input
              type="contact"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer/>
    </section>
  )
}

export default Login