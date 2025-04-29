
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type FormData = {
  fullName: string;
  email: string;
  socialProfile: string;
  building: string;
  attraction: string;
  contribution: string;
  investmentLevel: 'yes' | 'not_yet' | 'discuss';
};

interface Option {
  value: string;
  label: string;
}

interface RadioOptionGroupProps {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  label: string;
  options: Option[];
  defaultValue?: string;
}

const RadioOptionGroup: React.FC<RadioOptionGroupProps> = ({ 
  register, 
  name, 
  label, 
  options, 
  defaultValue = 'discuss' 
}) => {
  return (
    <div className="space-y-3">
      <Label className="text-white/90">{label}</Label>
      <RadioGroup defaultValue={defaultValue} className="space-y-2" {...register(name)}>
        {options.map(option => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} className="border-insiderPurple/50" />
            <Label htmlFor={option.value} className="text-white/90">{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioOptionGroup;
