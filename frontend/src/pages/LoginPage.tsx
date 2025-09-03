import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login data:", data);
  };

  return <LoginForm onSubmit={handleLogin} />;
}
