import { useState } from "react";

const LoginPage = () => {

   const loginMember = async (value) => {
      const response = await fetch("https://uatapicorporatetravel.fynity.in/api/login" ,{
        method: "POST",
        headers : {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(value)
      })
      const result = await response.json()
      localStorage.setItem("token",result.token)
   }

  const [value, setValue] = useState({
    email: "",
    password: "",
    device_name: "windows"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginMember(value)
    setValue({email: "",
    password: "",})
  };



  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="font-bold text-lg text-green-500">NIOND</div>
      <div className="flex flex-col text-center gap-6 p-6">
        <header className="font-bold text-xl">Member Login</header>
        <form onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            name="email"
            value={value.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="rounded-sm p-2"
            
          />
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="rounded-sm p-2"
          />
          <button type="submit" className="font-bold bg-green-500 py-2 px-8 rounded-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;