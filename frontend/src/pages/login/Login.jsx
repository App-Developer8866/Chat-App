import React, { useState } from 'react';
import Label from '../../components/ui/Label';
import Input from '../../components/ui/Input';
import Link from '../../components/ui/Link';
import Button from '../../components/ui/Button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="card glass w-96">
      <div className="card-body flex flex-col">
        <h1 className="card-title text-3xl font-semibold  justify-center items-center">
          Login
        </h1>

        <form className="mb-5">
          <div>
            <Label label="Username" />
            <Input inputType="Username" placeholder="Username" />
          </div>

          <div>
            <Label label="Password" />
            <Input
              type={showPassword ? 'text' : 'password'}
              inputType="password"
              placeholder="Password"
              endIconOnClick={() => setShowPassword(!showPassword)}
              showEndIcon
            />
          </div>
          <div className="flex justify-end mt-2">
            <Link text="Forgot Password?" />
          </div>
        </form>
        <div className="card-actions justify-between items-center">
          <Link text="Don't have account" />
          <Button name="Login" onClick={() => alert(1)} />
        </div>
      </div>
    </div>
  );
};

export default Login;
