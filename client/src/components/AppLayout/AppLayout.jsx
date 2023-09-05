import React from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import theme from "../../styles/theme";
import { Flex } from "@chakra-ui/react";

const AppLayout = ({children}) =>{
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Flex flexDirection="column" bg={theme.colors.custom.color1}>
      <NavBar />
      {children} 
    </Flex>
  );
}

export default AppLayout;
