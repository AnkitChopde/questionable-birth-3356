import React from 'react'
import {Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Spacer,
  MenuDivider,Switch,Button,Text, HStack, Flex} from "@chakra-ui/react"
import {FaSignLanguage} from "react-icons/fa"
import {ChevronDownIcon} from "@chakra-ui/icons"
import {IoMdContact} from "react-icons/io"
import {FcSearch} from "react-icons/fc"
const Navbar = () => {
    return <>
    <header>
        <Box d="flex" align-items="center" justifyContent="space-between" border="grey 2px solid" maxW="70%" m="auto" h="60px">
          <Flex >
          <Box border="grey 2px solid" maxW="50%" h="60px"  d="flex">
            <Box mt={"4"} ml="5"><FaSignLanguage/></Box>
              <Box mt={"-7"} ml={"-250px"} >
               <Menu >
                  <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
                      English
                  </MenuButton>
                  <MenuList>
                  <MenuItem>English</MenuItem>
                  <MenuItem>Francios</MenuItem>
                   <MenuItem>Portugese</MenuItem>
                  <MenuItem>deutsch</MenuItem>
                   <MenuItem>japanese</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
           <Box>
                <Switch mt={"-65px"} ml={"-100px"} />
                <Text as="p" mt={"-55px"} ml={"50px"} backgroundColor='white' >High Contrast</Text>
           </Box>
            <Box ml={"300px"} mt={"-28px"}>
              <IoMdContact />
              <Text mt={"-5"} mr={"-3"}>Contact Sales</Text>
            </Box>
          </Box>
          <Spacer/>
          <Box border="grey 2px solid" maxW="100%" h="60px"  d="flex" justifyContent="flex-end">
             <FcSearch/>
             <Box></Box>
          </Box>
          </Flex>
        </Box>
      
      </header> 
    
    </> 


}

export default Navbar