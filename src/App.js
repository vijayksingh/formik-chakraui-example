import { Button } from "@chakra-ui/button";
import { Heading, VStack } from "@chakra-ui/layout"
import { Formik } from "formik";
import { InputField } from "./InputField";
import * as Yup from "yup";


function App() {
  return (
    <Formik
      initialValues={{
      username: "",
      password: "",
    }}
    validationSchema={Yup.object({
      username: Yup.string().required("Username is required").min(6, "Should be atleast 6 characters"),
      password: Yup.string().required("Password is required").min(6, "Should be atleast 6 characters")
    })}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.resetForm();
    }}
    >
    {formik => (
      <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500}}
      h="100vh"
      justifyContent="center"
      onSubmit={formik.handleSubmit}>
        
      <Heading>Sign Up</Heading>

     <InputField name="username" label="Username" placeholder="Enter Username"></InputField>
     <InputField name="password" label="Password" placeholder="Enter Password" type="password"></InputField>

      <Button type="submit" variant="outline" colorScheme="teal">
        Create Account
      </Button>
    </VStack>
    )}
    </Formik>
  )
}

export default App;
