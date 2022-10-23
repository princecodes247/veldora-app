import {BsArrowRight} from "react-icons/bs"

export default function CreateProjectModal() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal">
        <label htmlFor="" className="modal-box bg-white rounded-md lg:w-lg lg:py-16 lg:px-20 max-w-5xl max-h-4/5 overflow-y-auto w-11/12">
          <div className="p-6 bg-gray-200"></div> <br />
          <h1 className="font-poppins text-2xl">Create a new Project</h1> <br /> <hr /> <br />

          {/**Project Name Section */}
          <div className="flex bg-transparent w-full items-end flex-wrap">
            <div className="block font-poppins lg:m-0 mr-5 mt-4">
              <p className="font-bold text-sm mb-3 ml-1">Creators Handle</p>
              <div className="py-2 bg-gray-200 px-5">slick-codes</div>
            </div>
            <p className="font-bold mx-7 text-lg lg:block hidden">/</p>
            <div className="block font-poppins lg:w-fit w-full mt-4">
              <p className="font-bold text-sm mx-3 mb-3">Project Name</p>
              <input 
              type="text" 
              className="input bg-white focus:outline-none text-sm text-gray-800 border-gray-600 rounded-sm h-10 m-0 lg:w-96 w-full" 
              placeholder="Project Name"
              />
            </div>
          </div> <br /><br />

          {/**Description Section */}
          <div className="font-poppins lg:ml-5">
            <h3 className="font-bold text-lg">
              Description <span className="font-normal text-sm text-gray-800">(optional)</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">Add a clear description of the project to help you remember.</p>
          </div>
          <input 
          type="text" 
          className="input w-full lg:w-textbox font-poppins bg-white text-gray-800 text-sm focus:outline-none border-gray-500 mt-4 rounded-sm" 
          placeholder="Project Description"
          /> <br /><br />

          {/**Tag Section */}
          <div className="font-poppins lg:ml-5">
            <h3 className="font-bold text-lg">
              Tag <span className="font-normal text-sm text-gray-800">(optional)</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">Add a tag to the project to help you remember.</p>
          </div>
          <input 
          type="text" 
          className="input w-full lg:w-textbox font-poppins bg-white text-gray-800 text-sm focus:outline-none border-gray-500 mt-4 rounded-sm" 
          placeholder="Project Tag"
          /> <br /><br />

          {/**Project Type Section */}
          <div className="font-poppins lg:ml-5">
            <h3 className="font-bold text-lg">
              Project Type <span className="font-normal text-sm text-gray-800">(optional)</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">Describe the type of project to help you remember.</p>
          </div>
          <select
          className="input w-full lg:w-textbox font-poppins bg-white text-gray-800 text-sm focus:outline-none border-gray-500 mt-4 rounded-sm"
          >
            <option value="Registration Form">Registration Form</option>
          </select> <br /><br />
          <p className="lg:w-textbox text-gray-800 text-sm w-full">
            Registration Form: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <br /><br />

            an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p> <br /><br /><br />

          <button className="btn no-animation rounded-sm bg-gray-100 border-0 hover:bg-gray-200 text-black text-sm p-0 w-40 font-poppins">
            Next <i className="text-lg"><BsArrowRight /></i>
          </button>
        </label>
      </label>
    </>
  )
}
