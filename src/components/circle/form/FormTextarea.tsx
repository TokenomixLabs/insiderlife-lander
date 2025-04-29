
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

type FormData = {
  fullName: string;
  email: string;
  socialProfile: string;
  building: string;
  attraction: string;
  contribution: string;
  investmentLevel: 'yes' | 'not_yet' | 'discuss';
};

interface FormTextareaProps {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  placeholder: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ 
  register, 
  name, 
  placeholder 
}) => {
  return (
    <Textarea
      {...register(name)}
      placeholder={placeholder}
      className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple min-h-[100px]"
    />
  );
};

export default FormTextarea;
