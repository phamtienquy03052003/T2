import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login data:", data);
    // TODO: call API backend sau này
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
