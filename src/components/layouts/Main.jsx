// src/components/Main.jsx
import Menu from './Menu';
import Sidebar from './Sidebar';

const Main = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Menu />

      <div className="flex flex-col-reverse md:flex-row flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-y-auto px-3 py-1 md:px-5 bg-gray-100" >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
