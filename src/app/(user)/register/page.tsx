import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <section className="fix-height  mt-10 container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Create New Account
        </h1>
        <RegisterForm />
      </div>
    </section>
  )
}

export default RegisterPage