import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";


export function InputField({label, ...props}) {
  const [field, meta] = useField(props);
  return (
     <FormControl isInvalid={meta.error && meta.touched}>
        <FormLabel>{label}</FormLabel>
        <Field as={Input} {...field} {...props}/>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
  )
}