import { El } from '@/components/shared/El';

export const Button = ({ element = 'button', ...rest }) => {
  return El({
    element,
    ...rest,
  });
};
