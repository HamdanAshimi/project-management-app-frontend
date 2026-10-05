import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignupForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    if (
      !data.fullName.trim() ||
      !data.email.trim() ||
      !data.password ||
      !data["confirm-password"]
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (data.password !== data["confirm-password"]) {
      toast.error("Passwords do not match.");
      return;
    }

    console.log(data);

    toast.success("Account created successfully!");
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Full Name
        </label>

        <input
          name="fullName"
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Email
        </label>

        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Password
        </label>

        <input
          name="password"
          id="password"
          type="password"
          minLength={6}
          placeholder="Create a password"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Confirm Password
        </label>

        <input
          name="confirm-password"
          id="confirm-password"
          type="password"
          placeholder="Confirm your password"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-sm font-semibold text-white transition rounded-lg bg-blue-500 hover:bg-blue-400 sm:text-base"
      >
        Create Account
      </button>
    </form>
  );
}
