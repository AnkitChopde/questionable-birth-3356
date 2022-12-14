import React from 'react'
import {Box,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Flex
    } from "@chakra-ui/react"
    import {ChevronDownIcon} from "@chakra-ui/icons"
    import { FaLanguage } from 'react-icons/fa';
const Navbar = () => {
  return (
    
    <header>
        <Box  w="70%" d="flex" justifyContent="space-between" alignItems="center" >
            <Box ml="18rem">
                <Flex>
                <Menu>
                   {({ isOpen }) => (
                 <>
                 <MenuButton display="flex" _hover={{textDecoration:"underline",color:"green"}} style={{backgroundColor:"white"}} as={Button} rightIcon={<ChevronDownIcon />} 
                 isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
               <FaLanguage/>
                 {isOpen ? 'English' : 'Open'}
                 </MenuButton>
                 <MenuList>
                 <MenuItem>Download</MenuItem>
                 <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
            </MenuList>
               </>
           )}
         </Menu>
                <Menu  >
                       <MenuList>
                       <MenuItem>English</MenuItem>
                        <MenuItem>French</MenuItem>
                        <MenuItem>Japanese</MenuItem>
                        <MenuItem>Deutsch</MenuItem>
                        <MenuItem>Espanol</MenuItem>
                        <MenuItem>Portugese</MenuItem>
                   </MenuList>
                </Menu>
                
                <Text mt={"2"}>High Contrast</Text>
            </Flex>

            </Box>
            

            <Box>

            </Box>

        </Box>

    </header>
  )
}

export default Navbar