import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <section className="flex justify-center items-center h-[60vh]">
      <div className="bg-white w-96 p-4 rounded">
        <LoginForm />
      </div>
    </section>
  );
}
