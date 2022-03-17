import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          type="text"
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
