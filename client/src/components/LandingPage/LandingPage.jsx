import React from "react";
import { ChakraProvider, CSSReset, Box, Button, Image } from "@chakra-ui/react";
import theme from "../../styles/theme"; // Importa el archivo de tema
import { useSelector, useDispatch } from "react-redux"; // Importa el hook useSelector y useDispatch
import { setUser } from "../../Redux/actions/userActions";
import { auth } from "../../Firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom"; // Importa Navigate

function LandingPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user)); // Despacha la acción para establecer el usuario
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  // Función para manejar el cierre de sesión
  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     dispatch(clearUser()); // Despacha la acción para eliminar el usuario
  //   } catch (error) {
  //     console.error("Error signing out", error);
  //   }
  // };

  if (user) {
    // Si el usuario está logueado, redirige a la página Home utilizando el componente Navigate
    return <Navigate to="/home" />;
  }

  return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="custom.color1" // Aplica el color1 como color de fondo
      >
        <Image
          src="https://lp.pjm.gob.ar/static/media/page-02.e44e7c6acfd431eb4d34.png"
          alt="Landing Image"
          maxW="400px"
        />
        <Button
          bgColor="custom.color2"
          color="white"
          size="lg"
          marginTop={4}
          onClick={handleSignIn}
        >
          {" "}
          {/* Aplica el color2 como color de fondo */}
          Iniciar sesión
        </Button>
      </Box>
  );
}

export default LandingPage;
