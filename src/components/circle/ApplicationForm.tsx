
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormData = {
  fullName: string;
  email: string;
  socialProfile: string;
  building: string;
  attraction: string;
  contribution: string;
  investmentLevel: 'yes' | 'not_yet' | 'discuss';
};

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="space-y-4">
        <Input
          {...register('fullName')}
          placeholder="Full Name"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple h-12"
        />
        
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple h-12"
        />
        
        <Input
          {...register('socialProfile')}
          placeholder="Social Profile / Website"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple h-12"
        />
        
        <Textarea
          {...register('building')}
          placeholder="What are you building / leading?"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple min-h-[100px]"
        />
        
        <Textarea
          {...register('attraction')}
          placeholder="What drew you to InsiderLife?"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple min-h-[100px]"
        />
        
        <Textarea
          {...register('contribution')}
          placeholder="What would you bring to the Circle?"
          className="bg-black/40 border-insiderPurple/50 text-white placeholder:text-white/50 focus:border-insiderPurple min-h-[100px]"
        />
        
        <div className="space-y-3">
          <Label className="text-white/90">Are you in a position to invest at a high level?</Label>
          <RadioGroup defaultValue="discuss" className="space-y-2" {...register('investmentLevel')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" className="border-insiderPurple/50" />
              <Label htmlFor="yes" className="text-white/90">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="not_yet" id="not_yet" className="border-insiderPurple/50" />
              <Label htmlFor="not_yet" className="text-white/90">Not yet</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="discuss" id="discuss" className="border-insiderPurple/50" />
              <Label htmlFor="discuss" className="text-white/90">Let's discuss</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button 
        type="submit"
        className={cn(
          "bg-gradient-to-r from-insiderPurple to-insiderBlue",
          "hover:from-insiderPurple-light hover:to-insiderBlue-light",
          "text-white text-lg font-medium py-6 px-8 rounded-lg w-full",
          "shadow-glow transition-all duration-300 hover:scale-105"
        )}
      >
        Send Application
      </Button>
    </form>
  );
};

export default ApplicationForm;
