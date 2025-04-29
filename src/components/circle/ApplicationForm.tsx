
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './form/FormInput';
import FormTextarea from './form/FormTextarea';
import RadioOptionGroup from './form/RadioOptionGroup';
import SubmitButton from './form/SubmitButton';
import { FormData } from './form/FormTypes';

const ApplicationForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = "Sovereign Circle Application";
    const body = `
Full Name: ${data.fullName}
Email: ${data.email}
Social Profile: ${data.socialProfile}
Building/Leading: ${data.building}
Drew to InsiderLife: ${data.attraction}
Contribution: ${data.contribution}
Investment Level: ${data.investmentLevel}
    `;
    
    window.location.href = `mailto:admin@insiderlife.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const investmentOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'not_yet', label: 'Not yet' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="space-y-4">
        <FormInput 
          register={register} 
          name="fullName" 
          placeholder="Full Name" 
        />
        
        <FormInput 
          register={register} 
          name="email" 
          placeholder="Email" 
          type="email"
        />
        
        <FormInput 
          register={register} 
          name="socialProfile" 
          placeholder="Social Profile / Website" 
        />
        
        <FormTextarea 
          register={register} 
          name="building" 
          placeholder="What are you building / leading?" 
        />
        
        <FormTextarea 
          register={register} 
          name="attraction" 
          placeholder="What drew you to InsiderLife?" 
        />
        
        <FormTextarea 
          register={register} 
          name="contribution" 
          placeholder="What would you bring to the Circle?" 
        />
        
        <RadioOptionGroup 
          register={register} 
          name="investmentLevel" 
          label="Are you in a position to invest at a high level?" 
          options={investmentOptions} 
          defaultValue="discuss" 
        />
      </div>

      <SubmitButton />
    </form>
  );
};

export default ApplicationForm;
