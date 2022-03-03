import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading, VStack } from "@chakra-ui/layout"
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required").min(6, "Should be atleast 6 characters"),
      password: Yup.string().required("Password is required").min(6, "Should be atleast 6 characters")
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.resetForm();
    }
  })
  
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500}}
      h="100vh"
      justifyContent="center"
      onSubmit={formik.handleSubmit}>
        
      <Heading>Sign Up</Heading>

      <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel>UserName</FormLabel>
        <Input name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          placeholder="Enter Username"/>
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.password && formik.touched.password}>
        <FormLabel>Password</FormLabel>
        <Input name="password" 
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          placeholder="Enter Password"/>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      <Button type="submit" variant="outline" colorScheme="teal">
        Create Account
      </Button>
    </VStack>
  )
}

export default App;
