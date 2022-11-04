import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

function Register() {
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (_name, _email, _password) => {
    signup(_name, _email, _password);
  };
  return (
    <section className="flex justify-center items-center py-20 min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(name, email, password);
        }}
        className="flex flex-col border border-gray-500 gap-4 w-2/6 p-6 py-8 rounded"
      >
        {/* <div className="flex"> */}
        <label>
          <p className="text-sm mb-2">Username</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <p className="text-sm mb-2">Email</p>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* </div> */}
        <label className="mt-4">
          <p className="text-sm mb-2">Password</p>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label className="mt-4">
          <p className="text-sm mb-2">Confirm Password</p>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
          />
        </label>
        {/* <button type="button" className="btn">
          Button
        </button> */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <div className="p-4 text-sm">
          <Link to="/login" className="flex gap-2">
            <p>Already have an account? </p>
            <p className="text-primary underline">Click here</p>
          </Link>
        </div>
        {/* <button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button> */}
      </form>
    </section>
  );
}

export default Register;
