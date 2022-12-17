import { Box, Container,Image,ButtonGroup,Button,Heading,Grid,GridItem,
    Center,
    List,
    ListItem,
    ListIcon,
   } from '@chakra-ui/react'
   import styles from "./BelowMiddle.module.css"
  import React from 'react'
const BelowMiddle =()=>{
   
    return <>

    <Box className={styles.border} bgGradient='linear(to-r, teal.500, green.300)'>
          <div className={styles.heading}>
            <Heading className={styles.p1}>Learn and grow with award-winning support and a thriving community behind you.</Heading>
            <Heading className={styles.p1} lineHeight="23px" color="#FFFFFF" mt="6" size="sm">You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</Heading>
          </div>

          <div className={styles.below}>
          <Grid templateColumns='repeat(4, 1fr)'
          gap={6}>
             <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
                 <GridItem w='100%' h='10' bg='blue.500' />
               <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
              
          </div>
    </Box>
    
    
    </>

}
export default BelowMiddle