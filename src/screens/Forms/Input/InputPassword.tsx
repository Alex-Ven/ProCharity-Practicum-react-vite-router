import React from 'react';
import { Input } from './Input';

export const InputPassword = (props: Omit<React.ComponentProps<typeof Input>, 'type'>) => {
  return <Input {...props} type="password" />;
};
