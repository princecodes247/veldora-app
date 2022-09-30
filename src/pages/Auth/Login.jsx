import { useState } from "react";

function Login() {
  return (
    <section className="flex justify-center items-center h-screen">
      <form className="flex flex-col border gap-4 w-2/5">
        <input type="text" placeholder="Type here" className="input w-full" />

        <input
          type="password"
          placeholder="Type here"
          className="input w-full"
        />
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        {/* <button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button> */}
      </form>
    </section>
  );
}

export default Login;
