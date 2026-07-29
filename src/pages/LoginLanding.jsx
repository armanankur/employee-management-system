import LoginLeftSide from "../components/LoginLeftSide";
import { ArrowRight, ShieldIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
const LoginLanding = () => {
  const portalOptions = [
    {
      icon: ShieldIcon,
      title: "Admin Portal",
      description:
        "Manage employees, attendance, departments, and payroll and system configuration",
      to: "/login/admin",
    },
    {
      icon: UserIcon,
      title: "Employee Portal",
      description: "Access your personal dashboard",
      to: "/login/employee  ",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative-z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-800  tracking-tight mb-3">
              Welcome Back
            </h2>
            <p className="text-slate-500">
              Please select your portal to continue.
            </p>
          </div>
          {/* Portals Lists */}

          <div className="space-y-4">
            {portalOptions.map((portal) => (
              // <Link
              //   key={portal.to}
              //   to={portal.to}
              //   className="group block  bg-fuchsia-50 border border-fuchsia-200 p-5 sm:p-6 rounded-lg transitiom-all duration-300 hover:bg-fuchsia-100 hover:border-fuchsia-300"
              // >
              //   <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
              //     <h3 className="text-lg font-mono text-slate-800 group-hover:text-fuchsia-500 mb-1 transition-colors">
              //       {portal.title}{" "}
              //     </h3>
              //     <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all duration-300" />
              //   </div>
              // </Link>



              // <Link
              //   key={portal.to}
              //   to={portal.to}
              //   className="group block rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-2xl hover:shadow-fuchsia-100/60"
              // >
              //   <div className="flex items-center justify-between">
              //     <div>
              //       <h3 className="text-lg font-mono text-slate-900 group-hover:text-fuchsia-700 transition-colors">
              //         {portal.title}
              //       </h3>

              //     </div>

              //     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-fuchsia-100">
              //       <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-fuchsia-700 group-hover:translate-x-0.5 transition-all" />
              //     </div>
              //   </div>
              // </Link>

              <Link
                key={portal.to}
                to={portal.to}


                className="group block rounded-xl border border-slate-200 bg-slate-50 p-6 
                transition-all duration-300  hover:border-t-fuchsia-700 hover:border-r-purple-800
                 hover:border-l-purple-600 hover:border-b-fuchsia-600
                hover:shadow-[0_0_0_3px_rgba(217,70,239,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-mono text-slate-900 transition-colors group-hover:text-fuchsia-700">
                      {portal.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Manage your workspace
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:text-fuchsia-500 group-hover:translate-x-1" />
                </div>
              </Link>

            ))}
          </div>
          {/* Footer */}
          <div className="mt-12 text-sm text-center  text-slate-500  md:text-left">
            <p>
              {" "}
              &copy; {new Date().getFullYear()} Ankur Anand. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
