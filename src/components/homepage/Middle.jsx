import { Box, Container,Flex,Image,ButtonGroup,Button,Heading,Grid,GridItem,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import styles from "./Middle.module.css"
import { CheckIcon } from '@chakra-ui/icons';


const Middle = () => {

  const cardIcons={
    img1:"https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg",
    img2:"https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg",
    img3:"https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg",
    img4:"https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg",
    img5:"https://www.hubspot.com/hubfs/product_icons_2022/OperationsHub_Icon_Gradient_RGB_24px.svg",
    img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-ApAL1a8mkVbLVbS0i8NcWwAywVMwg2zlA&usqp=CAU"
  }
  return <>
  <Box>
       <Container maxWidth="100%"  height={"650px"} backgroundColor={"#FEF4EA"}>
           <div style={{display:"flex"}} >
               
               <div className={styles.div} >
                  <div className={styles.div1}>
                    <div style={{paddingLeft:"-20px"}}>
                    <h3 className={styles.h3}>HUBSPOT CRM PLATFORM</h3>
                    <p className={styles.p1}>Powerful,not overpowering</p>
                    <p style={{textAlign:"left",marginTop:"20px"}}>Finally, a CRM platform that’s both powerful and easy to use. Create delightful customer experiences. Have a delightful time doing it.</p>
                    <ButtonGroup gap='4' ml={"-5"} mt={"5"}>
                         <Button size='md'
                                 height='70px'
                                 width='240px'
                                 bg={"#ff5c35"}
                                 color="whiteAlpha.900">
                          Get a demo</Button>
                         <Button 
                         size='md'
                         height='70px'
                         width='240px'
                         bg={"white"}
                         color="#ff5c35"
                         border="1px solid #ff5c35">Get started free</Button>
                    </ButtonGroup>

                    <p style={{textAlign:"left",marginTop:"20px",width:"55%"}}>Get started with free tools, or get more with our premium software.</p>
                   
                    </div>

                  </div>
               </div>
               <div className={styles.div}>
               
                <Image src="https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop-Alternate.webp" width="100%" mt={"100px"}/>
               </div>
             
           </div>
           
       </Container>
  </Box>

{/* middle-part */}

  <div style={{width:"60%",height:"250px",margin:"auto"}}>
      <Heading mt={"70px"} size={"lg"} color={"#2E475D"} fontFamily={"Lexend Deca, sans-serif"} >The CRM Platform Your Whole Business Will Love</Heading>
       <p className={styles.p2}>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.</p>
      
       <ButtonGroup gap='4' ml={"-10"} mt={"2"}>
                         <Button size='md'
                                 height='40px'
                                 width='150px'
                                 bg={"#ff5c35"}
                                 color="whiteAlpha.900">
                          Get a demo</Button>
                         <Button 
                         size='md'
                         height='40px'
                         width='220px'
                         bg={"white"}
                         color="#ff5c35"
                         border="1px solid #ff5c35">Get started free</Button>
                    </ButtonGroup>
 
  </div>

  {/* Card_part */}
  <div style={{width:"72%",height:"1050px",margin:"auto"}}>
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem p={"8"} w='100%' h='480px' boxShadow='2xl' _hover={{height:"485px",width:"101%"}} >
  
         <div style={{display:"flex",gap:"7px"}}>
            <img src={cardIcons.img1} style={{width:"35px"}} alt="" />
            <Heading size="lg" className={styles.heading}>Marketing Hub</Heading>
             
         </div>
         <Box className={styles.p3}  ml={"3"} >
         Marketing software to help you grow traffic, 
         convert more visitors, and run 
         complete inbound marketing campaigns at scale.
         </Box>
         
        <hr style={{marginTop:"1.5rem"}} />
        <Box className={styles.h3} mt="5" ml={"4"}>Popular Features</Box>
    <Center py={1}>
    
        <Box  px={6} py={6}>
          <List spacing={3} className={styles.h3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Lead generation
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Marketing automation
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Analytics
            </ListItem>
             
          </List>

          <Button size='md'
                  height='50px'
                  width='150%'
                  ml={"-10"}
                  mt={"5"}
                  bg={"#ff5c35"}
                  color="whiteAlpha.900">
            Get started</Button>
        </Box>
     
    </Center>

  </GridItem>

  <GridItem p={"8"} w='100%' h='480px' boxShadow='2xl' _hover={{height:"485px",width:"101%"}}>
  <div style={{display:"flex",gap:"7px"}}>
            <img src={cardIcons.img2} style={{width:"35px"}} alt="" />
            <Heading size="lg" className={styles.heading}>Sales Hub</Heading>
             
         </div>
         <Box className={styles.p3}  ml={"3"} >
         Sales CRM software to help you get deeper 
         insights into prospects, automate the tasks you hate,
          and close more deals faster.
         </Box>
         
        <hr style={{marginTop:"1.5rem"}} />
        <Box className={styles.h3} mt="5" ml={"4"}>Popular Features</Box>
    <Center py={1}>
    
        <Box  px={6} py={6}>
          <List spacing={3} className={styles.h3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Advanced CRM
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Meeting scheduling
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Payments
            </ListItem>
             
          </List>

          <Button size='md'
                  height='50px'
                  width='150%'
                  ml={"-10"}
                  mt={"5"}
                  bg={"#ff5c35"}
                  color="whiteAlpha.900">
            Get started</Button>
        </Box>
     
    </Center>

  </GridItem>
  <GridItem p={"8"} w='100%' h='480px' boxShadow='2xl' _hover={{height:"485px",width:"101%"}}>
  <div style={{display:"flex",gap:"7px"}}>
            <img src={cardIcons.img3} style={{width:"35px"}} alt="" />
            <Heading size="lg" className={styles.heading}>Service Hub</Heading>
             
         </div>
         <Box className={styles.p3}  ml={"3"} >
         Customer service software to help you connect with customers,
          exceed expectations,
          and turn them into promoters who grow your business.
         </Box>
         
        <hr style={{marginTop:"1.5rem"}} />
        <Box className={styles.h3} mt="5" ml={"4"}>Popular Features</Box>
    <Center py={1}>
    
        <Box  px={6} py={6}>
          <List spacing={3} className={styles.h3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Tickets
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Customer feedback
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Knowledge base
            </ListItem>
             
          </List>

          <Button size='md'
                  height='50px'
                  width='150%'
                  ml={"-10"}
                  mt={"5"}
                  bg={"#ff5c35"}
                  color="whiteAlpha.900">
            Get started</Button>
        </Box>
     
    </Center>
  </GridItem>

  <GridItem p={"8"} w='100%' h='480px' boxShadow='2xl' _hover={{height:"485px",width:"101%"}}>
  <div style={{display:"flex",gap:"7px"}}>
            <img src={cardIcons.img4} style={{width:"35px"}} alt="" />
            <Heading size="lg" className={styles.heading}>CMS Hub</Heading>
             
         </div>
         <Box className={styles.p3}  ml={"3"} >
         Content management software that’s flexible for marketers, powerful for developers,
          and gives customers a personalized, secure experience.
         </Box>
         
        <hr style={{marginTop:"1.5rem"}} />
        <Box className={styles.h3} mt="5" ml={"4"}>Popular Features</Box>
    <Center py={1}>
    
        <Box  px={6} py={6}>
          <List spacing={3} className={styles.h3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Drag-and-drop editor
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              SEO recommendations
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Website themes
            </ListItem>
             
          </List>

          <Button size='md'
                  height='50px'
                  width='150%'
                  ml={"-10"}
                  mt={"5"}
                  bg={"#ff5c35"}
                  color="whiteAlpha.900">
            Get started</Button>
        </Box>
     
    </Center>
  </GridItem >

  <GridItem p={"8"} w='100%' h='480px' boxShadow='2xl' _hover={{height:"485px",width:"101%"}}>
  <div style={{display:"flex",gap:"7px"}}>
            <img src={cardIcons.img5} style={{width:"35px"}} alt="" />
            <Heading size="lg" className={styles.heading}>Operations Hub</Heading>
             
         </div>
         <Box className={styles.p3}  ml={"3"} >
         Operations software that syncs your apps, cleans and curates customer data, and automates processes — 
         so all your systems and teams work better together.
         </Box>
         
        <hr style={{marginTop:"1.5rem"}} />
        <Box className={styles.h3} mt="5" ml={"4"}>Popular Features</Box>
    <Center py={1}>
    
        <Box  px={6} py={6}>
          <List spacing={3} className={styles.h3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Data sync
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Programmable automation
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Data quality automation
            </ListItem>
             
          </List>

          <Button size='md'
                  height='50px'
                  width='150%'
                  ml={"-10"}
                  mt={"5"}
                  bg={"#ff5c35"}
                  color="whiteAlpha.900">
            Get started</Button>
        </Box>
     
    </Center>
  </GridItem>
</Grid>

  </div>
  
  </>
}

export default Middle