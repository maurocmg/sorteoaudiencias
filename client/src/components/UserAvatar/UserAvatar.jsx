import React from "react";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux"; 
import { clearUser } from "../../Redux/actions/userActions";
import { auth } from "../../Firebase/firebase.js";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser()); // Despacha la acción para eliminar el usuario
    } catch (error) {
      console.error("Error signing out", error);
    }
  }

  return (
    <MenuItem onClick={handleSignOut}>
      Cerrar sesión
    </MenuItem>
  )
}



function UserAvatar() {
  const user = useSelector((state) => state.user);
    
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar size="md" name={user.displayName} src={user.photoURL} cursor="pointer" />
      </MenuButton>
      <MenuList>
        <LogoutButton />
      </MenuList>
    </Menu>
  )
}

export default UserAvatar
