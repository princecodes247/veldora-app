import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="flex justify-center items-center py-20 min-h-screen">
      <form className="flex flex-col border border-gray-500 gap-4 w-2/6 p-6 py-8 rounded">
        {/* <div className="flex"> */}
        <label>
          <p className="text-sm mb-2">Username</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
          />
        </label>
        <label>
          <p className="text-sm mb-2">Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
          />
        </label>
        {/* </div> */}
        <label className="mt-4">
          <p className="text-sm mb-2">Password</p>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
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
        <button type="button" className="btn btn-primary">
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
