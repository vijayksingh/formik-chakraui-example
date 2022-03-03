import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading, VStack } from "@chakra-ui/layout"
import { useFormik } from "formik";

function App() {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

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

      <FormControl>
        <FormLabel>UserName</FormLabel>
        <Input name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Enter Username"/>
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input name="password" 
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter Password"/>
      </FormControl>

      <Button type="submit" variant="outline" colorScheme="teal">
        Create Account
      </Button>
    </VStack>
  )
}

export default App;
