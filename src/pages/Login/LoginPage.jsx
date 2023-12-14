import { useNavigate } from "react-router";
import UserForm from "../../components/Forms/UserForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginMember = async (value) => {
    const response = await fetch(
      "https://uatapicorporatetravel.fynity.in/api/sellers/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(value),
      }
    );
    const result = await response.json();
    localStorage.setItem("token", result.token);
    navigate("/");
  };

  const defaultValues = {
    email: "",
    password: "",
    device_name: "MacIntel",
  };

  const handleLogin = (value) => {
    loginMember(value);
  };

  const formFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/,
        message: "Please enter a valid Email",
      },
    },

    {
      name: "password",
      type: "password",
      placeholder: "Enter passsword",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="font-bold text-lg text-green-500">NIOND</div>
      <div className="flex flex-col text-center gap-6 p-6">
        <header className="font-bold text-xl">Member Login</header>
        <UserForm
          defaultValues={defaultValues}
          onSubmit={handleLogin}
          formFields={formFields}
        />
      </div>
    </div>
  );
};

export default LoginPage;