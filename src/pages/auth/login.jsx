import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

function Login() {
  const { signIn } = useAuth();
  return (
    <section className="flex justify-center items-center h-screen">
      <form className="flex flex-col border border-gray-500 gap-4 w-2/6 p-6 py-8 rounded">
        <label>
          <p className="text-sm mb-2">Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full focus:border-primary focus:outline-none"
          />
        </label>
        <label className="mt-4">
          <p className="text-sm mb-2">Password</p>
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
          Log In
        </button>
        <div className="p-4 text-sm">
          <Link to="/register" className="flex gap-2">
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

export default Login;
