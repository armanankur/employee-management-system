import { useState } from "react";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import LoginLeftSide from "./LoginLeftSide";
import { Link } from "react-router-dom";
const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md animate-fade-in ">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-slate-400
             hover:text-slate-600 transition-colors mb-10"
          >
            <ArrowLeftIcon
              size={16}
              className="w-5 h-5 text-slate-400 hover:text-fuchsia-500 transition-colors duration-300"
            />{" "}
            Back to portals
          </Link>

          <div className="mb-8 ">
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-700 tracking-tight ">
              {title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></div>
              {error}
            </div>
          )}

          <form className="space-y-5 " onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full pr-11 px-4 py-2.5 border border-slate-300 rounded-md bg-slate-50/50 text-sm
                 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:border-fuchsia-600 focus:ring-2 focus:ring-fuchsia-500/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  required
                  className="w-full pr-11 px-4 py-2.5 border border-slate-300 rounded-md bg-slate-50/50 text-sm placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"

              disabled={loading}
              className="w-full py-3 bg-linear-to-br from-slate-500 via-purple-600 to-fuchsia-600 
              text-white rounded-md text-sm font-semibold hover:from-slate-600  hover:via-purple-700
               hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 disabled:opacity-50 
              disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
