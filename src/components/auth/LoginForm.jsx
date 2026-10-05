import { useNavigate } from "react-router-dom";

import { isEmail, isNotEmpty, hasMinLength } from "./util/validation.js";
import { userInput } from "./hooks/userInput.js";

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    validate: validateEmail,
    hasError: emailIsInvalid,
  } = userInput("", (value) => !isNotEmpty(value) || !isEmail(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    validate: validatePassword,
    hasError: passwordIsInvalid,
  } = userInput("", (value) => !isNotEmpty(value) || !hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    const emailHasError = validateEmail();
    const passwordHasError = validatePassword();

    if (emailHasError || passwordHasError) {
      return;
    }

    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
        />

        {emailIsInvalid && (
          <p className="mt-2 text-sm text-red-400">
            {!isNotEmpty(emailValue)
              ? "Email is required."
              : "Please enter a valid email address."}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
        />

        {passwordIsInvalid && (
          <p className="mt-2 text-sm text-red-400">
            {!isNotEmpty(passwordValue)
              ? "Password is required."
              : "Password must be at least 6 characters."}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 text-sm font-semibold text-white transition rounded-lg bg-blue-500 hover:bg-blue-400 sm:text-base"
      >
        Login
      </button>
    </form>
  );
}
