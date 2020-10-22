import React, { memo } from 'react';
import Header from './Header';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    // maxWidth: 1500,
    backgroundImage: "url('/images/main_background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 758,
  },
  aboutUsBackgroundRight: {
    backgroundImage: "url('/images/nereus_translucent.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 400
  },
  aboutUsBackgroundLeft: {
    backgroundImage: "url('/images/feature_1.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  contactUsBackground: {
    backgroundImage: "url('/images/contact_us.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={10}>
      <Header/>
      <div className={classes.background}>
        <img src="/images/header-logo.png" alt='header-logo'/>
      </div>
      <Grid container item xs={5} className={classes.aboutUsBackgroundLeft}></Grid>
      <Grid container item xs={7} className={[classes.aboutUsBackgroundRight, 'px-8 py-16 leading-7 bg-right-bottom']}>
        <h2 className="text-xl font-medium mb-4">About Nereus Maritime Review Center</h2> 

        <p className="mb-3 text-sm">On September 28, 2020, the Department of Trade and Industry has issued the
          certificate of business name registration to <b>Nereus Maritime Review Center (NMRC)</b>.
          Primarily, Nereus Maritime Review Center is conceptualized to provide an online review
          services to aspiring Merchant Marine Officers for OIC and Management Levels both of
          the Marine Deck and Engine Departments. This is to address the current dilemma
          seafarers are experiencing in the midst of the Covid-19 pandemic, and where physical
          attendance of review classes is prohibited and likewise deemed impractical.
        </p>
        <p className="mb-3 text-sm">The officers and gentlemen behind the creation of NMRC are not just passionate about
          having a maritime review center but they are more committed towards provision of
          quality review materials for the merchant marine profession. In fact, NMRC has
          emerged to help address the dwindling number of the Maritime Industry Authority
          (MARINA) Board passers.
        </p>
        <p className="mb-3 text-sm">Moreover, since the brains of this company are former successful Merchant Marine
          Officers themselves, they have considered the idea of providing an affordable yet less
          complicated quality review to all wannabe OIC and Management Level Merchant Marine
          Officers. Likewise, with the current situation of the seafaring industry, where review
          courses have limitations, NMRC is offering this online review platform, so wishful
          seafarers could have their review anywhere around the globe.
        </p>
        <p className="mb-3 text-sm">As to the name, it was named after the Greek God <b><i>NEREUS</i></b> who was the old man of
          the sea, and the god of the sea’s rich bounty of fish. He dwelt in the depths of the
          Aegean with his wife Doris and fifty Nereid daughters. Like many of the other sea-gods <b>Nereus</b> was a master shapeshifter, and spoke with prophetic voice.
        </p>
        <p className="mb-3 text-sm">Hence, <b>the Nereus Maritime Review Center</b> is now here to serve the best interest of
          all qualified Filipino seafarers and be of help in the attainment of their career and life
          goals.
        </p>
      </Grid>     

      <Grid container spacing={1} className="px-12 py-16 bg-gray-300 ">
        <Grid container item xs={12}>
          <h2 className="text-xl font-medium mb-4 ml-4">Services Offered</h2>
        </Grid>
        <Grid container item xs={12} spacing={3} clasName="pb-4">
          <Grid item xs={6} className="pr-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4 ml-4">ONLINE REVIEW FOR OFFICER IN CHARGE OF NAVIGATIONAL WATCH</p>
          </Grid>  
          <Grid item xs={6} className="pl-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4">ONLINE REVIEW FOR MANAGEMENT LEVEL MARINE ENGINEERING</p>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3} clasName="pb-4">
          <Grid container item xs={6} className="pr-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4 ml-4">ONLINE REVIEW FOR OFFICER IN CHARGE OF AN ENGINEERING WATCH</p>
          </Grid>  
          <Grid container item xs={6} className="pl-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4">MOCK EXAMS FOR ALL OF THE ABOVE COMPETENCIES</p>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3} clasName="mb-4">
          <Grid container item xs={6} className="pr-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4 ml-4">ONLINE REVIEW FOR MANAGEMENT LEVEL MARINE DECK</p>
          </Grid>  
          <Grid container item xs={6} className="pl-4">
            <p class="flex-grow bg-white py-4 px-8 mb-4">OTHERS, AS MAY DEEMED APPROPRIATE</p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} className="">
        <Grid item xs={5} className="bg-white">
          <Grid container spacing={2} className="px-16 pt-16 pb-24">
            <Grid item xs={12}>
              <h2 className="text-2xl text-center font-medium mb-6">Contact Us</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Name" variant="outlined" className="w-full mb-4"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Email" variant="outlined" className="w-full mb-4"/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Phone" variant="outlined" className="w-full mb-4"/>
            </Grid>
            <Grid item xs={12}>
              <div className="h-24">
              <TextField
                id="outlined-textarea"
                className="w-full"
                label="Message"
                multiline
                rows={5}
                variant="outlined"
              />
              </div>
            </Grid>
          </Grid>
        </Grid> 
        <Grid item xs={7} className={classes.contactUsBackground}>
        </Grid> 
      </Grid>  

      {/* TODO Make a footer component */}
      <Grid container item direction="row" justify="flex-start" alignItems="flex-start" className="bg-black text-white px-48 pb-24 pt-12">
        <Grid item xs={3}>
          <p className="font-medium mb-3">Office Address</p>
          <p>21B Greenheights Avenue</p>
          <p>San Isidro, Parañaque City</p>
        </Grid>
        <Grid item xs={3}>
          <p className="font-medium mb-3">Contact Details</p>
          <p>Tel. No. +63 (02) 519 6612</p>
          <p>Mobile No.: 09399333873</p>
          <p>E-mail: nereusreview2020@gmail.com</p>
        </Grid>

        <Grid container item direction="row" justify="space-between" xs={12} className="pt-12">
          <p>© 2020 Nereus Maritime Review Center. All Rights Reserved.</p>

          <div>
            <a href="#" className="mr-12">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default memo(HomePage);
