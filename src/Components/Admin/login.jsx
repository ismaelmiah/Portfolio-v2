
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('called');
    navigate("/admin/dashboard");
  }

  return (
    <>
      <div>
        <div className="login">
          <h1>Login</h1>
          <form method="post" onSubmit={handleSubmit}>
            <input
              type="email"
              className="mt-4 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="admin@admin.com"
              required="required"
            />
            <input
              type="password"
              className="mt-4 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              required="required"
            />
            <button
              type="submit"
              className="mt-6 text-align-center px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
            >
              Let me in.
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
