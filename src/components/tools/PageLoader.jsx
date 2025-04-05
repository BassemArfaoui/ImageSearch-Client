import { MdImageSearch } from "react-icons/md";



export default function PageLoader() {
    return (
      <div className="min-h-150 flex flex-col items-center justify-center bg-white" >
        <span className="text-blue-500 mr-2 ml-1">
          <MdImageSearch className="text-6xl mb-3" />
        </span>

        {/* Three Dots Loader */}
        {/* <div className="flex space-x-3.5 mt-0">
            <span className="h-3 w-3 bg-blue-500 rounded-full animate-bounce !duration-300 [animation-delay:0s]" />
            <span className="h-3 w-3 bg-blue-500 rounded-full animate-bounce !duration-300 [animation-delay:0.1s]" />
            <span className="h-3 w-3 bg-blue-500 rounded-full animate-bounce !duration-300 [animation-delay:0.2s]" />
        </div> */}

        <h1 className="text-2xl pl-7 text-blue-500 font-roboto-mono font-bold " >
          Loading...
        </h1>
      </div>
    );
  }
  