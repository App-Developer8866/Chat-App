import React, { useState } from 'react';
import Dropdown from '../../components/ui/Dropdown';
import { GENDER_ENUM } from '../../constants/enum.constant';
import Label from '../../components/ui/Label';
import Button from '../../components/ui/Button';
import Link from '../../components/ui/Link';
import Input from '../../components/ui/Input';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="card glass w-96 md:w-3/5">
      <div className="card-body flex flex-col">
        <h1 className="card-title text-3xl font-semibold justify-center items-center">
          Create Account
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <Label label="Username" />
            <Input inputType="Username" placeholder="Username" />
          </div>

          <div>
            <Label label="Name" />
            <Input placeholder="Full Name" />
          </div>

          <div>
            <Label label="Gender" />
            <Dropdown options={GENDER_ENUM} />
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

          <div>
            <Label label="Re-Type Password" />
            <Input
              type={showPassword ? 'text' : 'password'}
              inputType="password"
              placeholder="Re-Type Password"
            />
          </div>
        </form>
        <div className="card-actions justify-between items-center">
          <Link text="Already have an account" />
          <Button name="Create" onClick={() => alert(1)} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
