import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Option } from './styles';

export default function RadioInput({ 
	isCorrect, 
	isSubmited, 
	name, 
	options, 
	selected, 
	...rest 
}) {
    const inputRefs = useRef([]);
	const { fieldName, registerField, defaultValue } = useField(name);
	
	const optionStatus = isCorrect ? 'SUCCESS' : 'ERROR';
  
    useEffect(() => {
      registerField({
        name: fieldName,
        path: "value",
        ref: inputRefs.current,
        getValue(refs) {
          const checked = refs.find(ref => ref.checked);
  
          return checked ? checked.value : null;
        },
        setValue(refs, value) {
          const item = refs.find(ref => ref.value === value);
  
          if (item) {
            item.checked = true;
          }
        }
      });
    }, [fieldName, registerField]);
  
    return (
		<div>
			{options.map((option, index) => (
				<Option 
					htmlFor={option.id} 
					key={option.id}
					data-selected={selected === option.id}
					data-status={isSubmited && optionStatus}
				>
					<input
						ref={elRef => (inputRefs.current[index] = elRef)}
						type="radio"
						id={option.id}
						name={fieldName}
						value={option.id}
						defaultChecked={defaultValue === option.id}
						{...rest}
					/>
					<span>{option.label}</span>
				</Option>
			))}
		</div>
    );
}