
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/ui/input';

type FormData = {
  fullName: string;
  email: string;
  socialProfile: string;
  building: string;
  attraction: string;
  contribution: string;
  investmentLevel: 'yes' | 'not_yet' | 'discuss';
};

interface FormInputProps {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  placeholder: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ 
  register, 
  name, 
  placeholder, 
  type = 'text' 
}) => {
  return (
    <Input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple h-12"
    />
  );
};

export default FormInput;
