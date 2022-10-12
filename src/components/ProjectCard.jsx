import { Link } from "react-router-dom";
import Label from "./Label";

function ProjectCard({ name, id, status, desc, submissions, type }) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="p-4 flex justify-between rounded-lg overflow-hidden border border-base-300 relative hover:scale-105 transition-all">
        <div className="">
          <div className="flex gap-4">
            <div className="mb-5">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          </div>
          <div className="flex gap-8">
            <p className="text-xs">Type: {type}</p>
            <p className="text-xs">Records: {submissions}</p>
          </div>
        </div>
        <div className="">
          <Label />
        </div>
        <div className="absolute -bottom-1 left-0 w-full p-1 bg-base-300" />
      </div>
    </Link>
  );
}

export default ProjectCard;
