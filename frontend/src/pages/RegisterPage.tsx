import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  const handleRegister = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log("Register data:", data);
  };

  return <RegisterForm onSubmit={handleRegister} />;
}
