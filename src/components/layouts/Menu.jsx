import { MdImageSearch } from "react-icons/md";
import profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate();

  return (
    <div className=" p-4 h-15 text-white flex items-center justify-between py-9 border-b-2 border-b-gray-400 shadow-md">
      <div className="flex items-center cursor-pointer" onClick={()=>{navigate('/')}}>
        <span className="text-blue-500 mr-2 ml-1">
          <MdImageSearch className="text-4xl" />
        </span>

        <h1 className="text-3xl text-blue-500 font-roboto-mono font-bold" >
          Image-Search
        </h1>
      </div>

      <div className="mr-3">
        <div className="size-10 rounded-full bg-gray-300 border-2 border-gray-400">
          <img
            src={profile}
            alt="profile"
            className="rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
