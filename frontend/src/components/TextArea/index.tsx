/* eslint-disable react/display-name */
import * as React from 'react';
import { tw } from 'twind';
import { formInput } from '@twind/forms';

interface ITextArea extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string;
  id: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, ITextArea>(({ label, id, ...props }, forwardedRef) => {
  return (
    <div>
      <label htmlFor={id} className={tw`block font-medium text(sm gray-700)`}>{label}</label>
      <div className="mt-1">
        <textarea
          ref={forwardedRef}
          className={tw`block shadow-sm w-full sm:text-sm border-gray-300 rounded-md focus:(ring-indigo-500 border-indigo-500) ${formInput}`}
          {...props}
        />
      </div>
    </div> 
  )
});

export default TextArea;


