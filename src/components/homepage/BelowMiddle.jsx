import { Box,Heading,Grid,GridItem,Button,ButtonGroup,Container,Image
   
   } from '@chakra-ui/react'
   import styles from "./BelowMiddle.module.css"
  import React from 'react'
const BelowMiddle =()=>{

  const logos = {
    img1:"https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png",
    img2:"https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png",
    img3:"https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png",
    img4:"https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png",
    img5:"https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png",
    img6:"https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png",
    img7:"https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png",
    img8:"https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png",
    img9:"https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png",
    img10:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg",
    img11:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg",
    img12:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg",
    img13:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg",
    img14:"https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png",
    img15:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg",
    img16:"https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg",
    img17:"https://cdn2.hubspot.net/hubfs/53/Lists.svg"
  }
   
    return <>

    <Box className={styles.border} bgGradient='linear(to-r, teal.500, green.300)'>
          <div className={styles.heading}>
            <Heading className={styles.p1}>Learn and grow with award-winning support and a thriving community behind you.</Heading>
            <Heading className={styles.p1} lineHeight="23px" color="#FFFFFF" mt="6" size="sm">You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</Heading>
          </div>

          <div className={styles.below}>
          <Grid templateColumns='repeat(4, 1fr)'
          gap={6} color="white">
             <GridItem>
                       <Image src={logos.img10} alt='Image' ml={"40%"} mt="25"/>
                       <Heading mt="4" ml={"3"} >150+</Heading>
                       <p style={{marginTop:"20px",fontWeight:"bold"}}>HubSpot user groups</p>
             </GridItem>
              <GridItem>
                   <Image src={logos.img11} alt='Image' ml={"35%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >7M+</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>monthly visits</p>
              </GridItem>
              <GridItem>
                   <Image src={logos.img12} alt='Image' ml={"27%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >463K+</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>certified professionals</p>
              </GridItem>
              <GridItem>
                   <Image src={logos.img13} alt='Image' ml={"27%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >70K</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>registered attendees</p>
              </GridItem>
              
              <GridItem>
                   <Image src={logos.img14} alt='Image' ml={"2%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >1,250+</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>integrations</p>
              </GridItem>
              <GridItem>
                   <Image src={logos.img15} alt='Image' ml={"45%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >6</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>languages</p>
              </GridItem>
              <GridItem>
                   <Image src={logos.img16} alt='Image' ml={"40%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >3.1M+</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>social followers</p>
              </GridItem>
              <GridItem>
                   <Image src={logos.img17} alt='Image' ml={"40%"} mt="25"/>
                    <Heading mt="4" ml={"3"} >158,000+</Heading>
                    <p style={{marginTop:"20px",fontWeight:"bold"}}>customers</p>
              </GridItem>
                
        </Grid>
              
          </div>
    </Box>

    <div className={styles.logo}>
      <div className={styles.div1}>
        <Heading pt="14" >158,000+</Heading>
         <p style={{marginTop:"10px"}}>customers in over <span style={{color:"black",fontWeight:"bold"}}>120</span>  countries growing their businesses with HubSpot</p>
      </div>
      <div className={styles.div2}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} p={"4"} pt={"10"}>
         <GridItem >
           <img src={logos.img1} alt="" />
         </GridItem>
         <GridItem pt={"4"}>
           <img src={logos.img2} alt="" />
         </GridItem>
          <GridItem >
           <img src={logos.img3} alt="" />
         </GridItem>
         <GridItem >
           <img src={logos.img4} alt="" />
         </GridItem>
         <GridItem pt={"6"}>
           <img src={logos.img5} alt="" />
         </GridItem>
         <GridItem >
           <img src={logos.img6} alt="" />
         </GridItem>
         <GridItem >
           <img src={logos.img7} alt="" />
         </GridItem>
         <GridItem >
           <img src={logos.img8} alt="" />
         </GridItem>
      </Grid>
      </div>
    </div>

    <Box>
       <Container maxWidth="100%"  height={"500px"}>
           <div style={{display:"flex"}} >
               
               <div className={styles.f} >
                  <div className={styles.fdiv}>
                    <div style={{paddingLeft:"-20px"}}>
                    <p className={styles.ptag}>Start Growing With HubSpot Today</p>
                    <p style={{textAlign:"left",marginTop:"20px"}}>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                    <ButtonGroup gap='4'marginLeft="-28%" mt={"5"}>
                         <Button size='md'
                                 height='60px'
                                 width='200px'
                                 bg={"#ff5c35"}
                                 color="whiteAlpha.900">
                          Get a demo</Button>
                         <Button 
                         size='md'
                         height='60px'
                         width='240px'
                         bg={"white"}
                         color="#ff5c35"
                         border="1px solid #ff5c35">Get started free</Button>
                    </ButtonGroup>

                    <p style={{textAlign:"left",marginTop:"20px",width:"55%"}}>Get started with free tools, or get more with our premium software.</p>
                   
                    </div>

                  </div>
               </div>
               <div className={styles.f}>
               
                <Image src="https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png" width="50%" mt={"50px"} marginLeft="30%" />
               </div>
             
           </div>
           
       </Container>
  </Box>

    
    
    </>

}
export default BelowMiddle