// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30">
//       <Sidebar />

//       <main className=" flex-1 overflow-y-auto">
//         <div className="p-4 pt-16 sm:p-6 sm:pt-6  lg:p-8 max-w-400 mx-auto">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30">
      <Sidebar />

      <main
        className="flex-1 overflow-y-auto"
        role="main"
      >
        {/* <div className="mx-auto w-full  max-w-screen-2xl p-4 pt-16 sm:p-6 sm:pt-6 lg:p-8"> */}
        <div className="mx-auto w-full max-w-screen-2xl p-4 pt-16 sm:p-6 sm:pt-6 md:p-4 md:pt-20 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
