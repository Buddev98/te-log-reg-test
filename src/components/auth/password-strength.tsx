import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!password) {
      setStrength(0);
      setFeedback('');
      return;
    }

    let currentStrength = 0;
    const checks = [
      { regex: /.{8,}/, message: 'At least 8 characters' },
      { regex: /[A-Z]/, message: 'At least one uppercase letter' },
      { regex: /[a-z]/, message: 'At least one lowercase letter' },
      { regex: /[0-9]/, message: 'At least one number' },
      { regex: /[^A-Za-z0-9]/, message: 'At least one special character' },
    ];

    const passedChecks = checks.filter(check => check.regex.test(password));
    currentStrength = (passedChecks.length / checks.length) * 100;

    // Set feedback based on strength
    if (currentStrength === 0) {
      setFeedback('');
    } else if (currentStrength <= 40) {
      setFeedback('Weak');
    } else if (currentStrength <= 80) {
      setFeedback('Medium');
    } else {
      setFeedback('Strong');
    }

    setStrength(currentStrength);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 40) return 'bg-destructive';
    if (strength <= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (!password) return null;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <Progress 
          value={strength} 
          className="h-1.5 w-full"
          indicatorClassName={getStrengthColor()}
        />
        <span className="text-xs ml-2 min-w-16 text-muted-foreground">{feedback}</span>
      </div>
    </div>
  );
}
