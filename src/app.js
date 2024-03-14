import { El } from '@/components/shared/El';
import { Button } from './components/shared/Button';

export const App = () => {
  return El({
    element: 'div',
    className: 'bg-red-400',
    children: [
      El({
        element: 'div',
        className: 'bg-red-400',
        children: [
          El({
            element: 'div',
            className: 'bg-red-400',
            children: 'app',
            id: 'emo',
          }),
          El({
            element: 'div',
            className: 'bg-blue-400',
            children: 'app',
          }),
          El({
            element: 'img',
            className: 'bg-blue-400',
            src: './src/assets/images/1.jpg',
          }),
          El({
            element: 'button',
            className:
              'bg-yellow-400 p-3 rounded-md m-3 shadow-md hover:shadow-lg',
            children: 'click',
            eventListener: [
              {
                event: 'click',
                callback: () => {
                  document.getElementById('emo').style.backgroundColor =
                    'green';
                  console.log('emos');
                },
              },
            ],
          }),
          Button({
            className:
              'bg-yellow-400 p-3 rounded-md m-3 shadow-md hover:shadow-lg',
            innerHTML: 'trashIcon',
          }),
        ],
      }),
    ],
  });
};
