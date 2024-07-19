import { Link } from "react-router-dom";
import { Header } from "../components";

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-7xl font-bold md:text-9xl">404</h1>
        <h1 className="text-3xl">Something went wrong</h1>
        <p>This link is broken or does not exist</p>
        <Link to="/" className="btn btn-primary mt-8">
          Return to home
        </Link>
      </section>
    </>
  );
}

export default Error;
