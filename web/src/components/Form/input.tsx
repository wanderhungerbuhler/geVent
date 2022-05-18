import * as React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input as ChackraInput, InputProps as ChackraInputProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name} mt="2">{label}</FormLabel>}
      <ChackraInput
        borderWidth={.1}
        name={name}
        id={name}
        h="56px"
        focusBorderColor="none"
        error={error?.message}
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);
