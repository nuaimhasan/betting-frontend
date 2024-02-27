import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <section className="flex justify-center items-center h-[70vh]">
      <div className="bg-gray-800 w-[95%] sm:w-96 p-4 rounded">
        <LoginForm />
      </div>
    </section>
  );
}
