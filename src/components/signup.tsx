import { useState } from "react";
import signup from "../assets/signup.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  password: string;
  retypePassword: string;
  mode: string;
  contact: string;
}

const Signup: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    password: '',
    retypePassword: '',
    mode: '',
    contact: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.retypePassword) {
      toast.error('Passwords do not match', { position: "bottom-right" });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://auth-template-1.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: formData.password,
          mode: formData.mode,
          contact: formData.contact,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }

      localStorage.setItem('mode', formData.mode);
      localStorage.setItem('contact', formData.contact);

      navigate("/otp");

    } catch (error) {
      toast.error(String(error), { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <img className="logo" src={signup} />
      <div className="box">
        <div className="switch">
          <h3>Let us know <span>!</span></h3>
          <a href="/login"><p>Sign <span id="uline">In</span></p></a>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Set Password:</label>
            <input
              placeholder="Set Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="retypePassword">Retype Password:</label>
            <input
              placeholder="Retype Password"
              type="password"
              id="retypePassword"
              name="retypePassword"
              value={formData.retypePassword}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mode">Contact Mode:</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="" selected disabled hidden>Contact Mode</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact">Enter Email:</label>
            <input
              placeholder="Enter Email"
              type="contact"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit" type="submit">
          {isLoading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Signup