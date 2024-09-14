import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <section className="fix-height mt-10 container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Log In</h1>
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage