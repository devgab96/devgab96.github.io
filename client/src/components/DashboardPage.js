import React, { memo } from 'react';
import { Grid, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import LibraryBookIcons from '@material-ui/icons/LibraryBooks';
// import DraftsIcon from '@material-ui/icons/Drafts';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  background: {
    // maxWidth: 1500,
    backgroundImage: "url('/images/main_background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    paddingLeft:30,
    paddingRight:30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    // marginTop: -40
  },

  paper: {
    position: 'absolute',
    width: 700,
    // backgroundColor: 'white',
    // border: '2px solid #000',
    margin: 'auto',
    // boxShadow: theme.shadows[5],
    padding: 10,
  },
}));

const Dashboard = () => {
  const course = [
    {
      title: 'OIC of Navigational Watch',
      functions: [
        {
          title: 'Function 1:  Navigation at the Operational Level',
          items: [
            'Competence 1 - Plan and Conduct a Passage and Determine Position',
            'Competence 2 - Maintain Safe Navigation Watch',
            'Competence 3 - Use of Radar and ARPA for the Safety of Navigation',
            'Competence 4	-	Use of ECDIS to Maintain Safety of Navigation',
            'Competence 5	- Respond to Emergencies',
            'Competence 6	- Respond to Distress Signal at Sea',
            'Competence 7	- Use the IMO SMCP and Use English',
            'Competence 8	- Transmit and Receive Information by Visual Signaling',
            'Competence 9	-	Maneuver the Ship',
          ]
        },
        {
          title: 'Function 2: Cargo Handling and Stowage at the Operational Level',
          items: [
            'Competence 10 - Monitor the Loading, Stowage, Securing and Care during the Voyage and Unloading of cargoes',
            'Competence 11 - Inspect and Report Defects and Damage to Cargo Spaces, Hatch Cover and Ballast Tanks',
            'Competence 1	-	Ensure Compliance with Pollution Prevention Requirements',
            'Competence 4	-	Use of ECDIS to Maintain Safety of Navigation',
            'Competence 13 - Maintain Seaworthiness of the Ship',
            'Competence 14 - Prevent, Control and Fight Fires on Board',
          ]
        },
        {
          title: 'Function 3: Controlling the Operation of the Ship and Care for Persons on Board at the Operational Level',
          items: [
            'Competence 15 - Operate Life-Saving Appliances',
            'Competence 16 - Apply Medical First Aid on board ship',
            'Competence 17 - Monitor Compliance with Legislative Requirements',
            'Competence 4	- Use of ECDIS to Maintain Safety of Navigation',
            'Competence 18 - Application of Leadership and Teamworking Skills',
            'Competence 19 - Contribute to Safety of Personnel and Ship',
          ]
        }
      ]
    },

    {
      title: 'OIC of an Engineering Watch',
      functions: [
        {
          title: 'Function 1: Marine Engineering at the Operational Level',
          items: [
            'Competence 1 	- 	Maintain a Safe Engineering Watch',
            'Competence 2 	- 	Use English in oral and written form',
            'Competence 3 	- 	Use internal communication systems',
            'Competence 4 	- 	Operate main and auxiliary machinery and associated control systems',
            'Competence 5 	- 	Operate fuel, lubrication, ballast and pumping system and other associated control system',
          ]
        },
        {
          title: 'Function 2:  	Electrical, Electronic and Control Engineering at the Operational Level ',
          items: [
            'Competence 6 	- 	Operate electrical, electronic and control systems',
            'Competence 7 	- 	Maintenance and repair of electronic and electrical equipment',
          ]
        },
        {
          title: 'Function 3:  Maintenance and Repair at the Operational Level ',
          items: [
            'Competence 8 	- 	Appropriate use of hand tools, machine tools and measuring instruments for fabrication and repair on board',
            'Competence 9 	- 	Maintenance and repair of shipboard machinery and equipment',
          ]
        },
        {
          title: 'Function 4: 	Controlling the Operation of the Ship and Care for Persons on Board at the Operational Level',
          items: [
            'Competence 10	- 	Ensure compliance with pollution-prevention requirements',
            'Competence 11 	- 	Maintain seaworthiness of the Ship',
            'Competence 12 	- 	Prevent, control and fight fires on board',
            'Competence 13 	- 	Operate life-saving appliances',
            'Competence 14 	- 	Apply medical first aid on board ship',
            'Competence 15 	- 	Monitor compliance with legislative requirements',
            'Competence 16 	- 	Application of leadership and team working skills',
            'Competence 17 	- 	Contribute to safety of personnel and ship',
          ]
        }
      ]
    },

    {
      title: 'Management Level – Marine Deck Officer',
      functions: [
        {
          title: 'Function 1: Navigation at the Management Level',
          items: [
            'Competence 1 	-	Plan a Voyage and Conduct Navigation',
            'Competence 2 	-    Determine Position and the Accuracy of Resultant Fix by any means',
            'Competence 3 	- 	Determine and Allow for Compass Errors',
            'Competence 4 	- 	Coordinate Search and Rescue Operations',
            'Competence 5 	- 	Establish Watchkeeping Arrangements and Procedures',
            'Competence 6 	- 	Maintain Safe Navigation through the Use of information from Navigation Equipment and Systems to assist command decision making',
            'Competence 7 	- 	Maintain the Safety of Navigation through the Use of ECDIS and associated Navigation Systems to assist command decision making',
            'Competence 8 	- 	Forecast Weather and Oceanographic Conditions',
            'Competence 9 	- 	Respond to Navigational Emergencies',
            'Competence 10 	- 	Maneuver and Handle a Ship in All Conditions',
            'Competence 11 	- 	Operate Remote Controls of Propulsion Plant and Engineering Systems and Services',
          ]
        },
        {
          title: 'Function 2: Cargo Handling and Stowage at the Management Level',
          items: [
            'Competence 12 	-	Plan and Ensure Safe Loading, Stowage, Securing, Care during the Voyage and the Unloading of Cargoes',
            'Competence 13 	- 	Assess Reported Defects and Damage to Cargo Spaces, Hatch Covers and Ballast Tanks, and Take Appropriate Action',
            'Competence 14 	- 	Carriage of Dangerous Goods',
          ]
        },
        {
          title: 'Function 3: 	Controlling the Operation of the Ship and Care for Persons on Board at the Management Level',
          items: [
            'Competence 15 	- 	Control Trim, Stability and Stress',
            'Competence 16 	- 	Monitor and control compliance with legislative requirements and measures to ensure safety of life at sea, security and protection of the marine environment',
            "Competence 17 	-	Maintain safety and security of the ship's crew and passengers and the operational condition of life-saving, fire-fighting and other safety systems",
            'Competence 18 	- 	Develop emergency and damage control plans and handle emergency situations',
            'Competence 19 	- 	Use of Leadership and Managerial Skill',
            
          ]
        }
      ]
    },

    {
      title: 'Management Level – Marine Engineer Officer',
      functions: [
        {
          title: 'Function 1:  Marine Engineering at the Management Level',
          items: [
            'Competence 1 	- 	Manage the operation of propulsion plant machinery',
            'Competence 2 	- 	Plan and operations',
            'Competence 3 	- 	Operation, surveillance, performance assessment and maintaining safety of propulsion plant and auxiliary machinery',
            'Competence 4 	- 	Manage fuel, lubrication and ballast operations',
          ]
        },
        {
          title: 'Function 2:  	Electrical, Electronic and Control Engineering at the Management Level',
          items: [
            'Competence 5 	- 	Manage operation of electrical and electronic control equipment',
            'Competence 6 	- 	Manage trouble shooting, restoration of electrical and electronic control equipment to operating condition',
          ]
        },
        {
          title: 'Function 3: Maintenance and Repair at the Management Level',
          items: [
            'Competence 7 	- 	Manage safe and effective maintenance and repair procedures',
            'Competence 8 	- 	Detect and identify the cause of machinery malfunctions and correct faults',
            "Competence 9 	- 	Ensure safe working practices",
          ]
        },
        {
          title: 'Function 4: 	Controlling the Operation of the Ship and Care for Persons on Board at the Management Level',
          items: [
            'Competence 10 	- 	Control trim, stability and stress',
            'Competence 11 	- 	Monitor and control compliance with legislative requirements and measures to ensure safety of life at sea, security and the protection of the marine environment ',
            "Competence 12 	- 	Maintain safety and security of the vessel, crew and passengers and the operational condition of life-saving, fire-fighting and other safety systems ",
            "Competence 13 	- 	Develop emergency and damage control plans and handle emergency situations",
            "Competence 14 	- 	Use of leadership and managerial skills",
          ]
        }
      ]
    }
  ]

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [activeCourse, setActiveCourse] = React.useState(course[0])

  function handleOpen (index) {
    setActiveCourse(course[index])
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <Grid container item xs={10} style={{marginTop:-40}}>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.paper}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper} style={{backgroundColor:'white', marginTop: 100, height: 800, overflowY:'scroll'}}>
          <div className="p-8">
            <h2 id="simple-modal-title" className="text-xl my-4">{activeCourse.title}</h2>
            { activeCourse.functions.map((value) => {
              return (
                <>
                  <h3 className="font-medium my-3">{value.title}</h3>  

                  { value.items.map((val) => {
                    return (
                      <p>{val}</p>  
                    )
                  })}
                </>
              )
            })}
          </div>
        </div>
      </Modal>
      <Grid item xs={3}>
        <div className={classes.background}>
          <img src="/images/header-logo.png" alt='header-logo'/>
        </div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon className="pl-4">
              <img src="/images/all_courses.svg" alt='header-logo'/>
            </ListItemIcon>
            <ListItemText primary="All Available Course" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className="pl-4">
              <img src="/images/users.svg" alt='header-logo'/>
            </ListItemIcon>
            <ListItemText primary="My Courses" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className="pl-4">
              <img src="/images/logout.svg" alt='header-logo'/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Grid>  
      <Grid item xs={9} className="bg-gray-200 px-16 py-24">
        <h2 className="text-3xl font-medium text-gray-700 mb-12">Welcome, User!</h2>
        
        <h3 className="text-xl font-medium text-blue-600 mb-2">Select a course to review and enroll</h3>
        <hr className="mb-8"/>

        <Grid container item xs={12} justify="space-between" alignItems="center" className="pb-4">
          <Grid container item xs={7}>
            <Grid item xs={6}><b>Course name</b></Grid>
            <Grid item xs={6}><b>Course ID</b></Grid>
          </Grid>
          <Grid container item  xs={4} justify="space-between"/>
        </Grid>

        <Grid container item xs={12} justify="space-between" alignItems="center" className="pb-2">
          <Grid container item xs={7}>
            <Grid item xs={6}>OIC of Navigational Watch</Grid>
            <Grid item xs={6}>00001-01</Grid>
          </Grid>
          <Grid container item  xs={4} justify="flex-end">
            <Button variant="contained" className="mr-3" onClick={() => handleOpen(0)}>Details</Button>
            <Button variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="space-between" alignItems="center" className="pb-2">
          <Grid container item xs={7}>
            <Grid item xs={6}>OIC of an Engineering Watch</Grid>
            <Grid item xs={6}>00001-02</Grid>
          </Grid>
          <Grid container item  xs={4} justify="flex-end">
            <Button variant="contained" className="mr-3" onClick={() => handleOpen(1)}>Details</Button>
            <Button variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="space-between" alignItems="center" className="pb-2">
          <Grid container item xs={7}>
            <Grid item xs={6}>Management Level – Marine Deck Officer</Grid>
            <Grid item xs={6}>00001-03</Grid>
          </Grid>
          <Grid container item  xs={4} justify="flex-end">
            <Button variant="contained" className="mr-3" onClick={() => handleOpen(2)}>Details</Button>
            <Button variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="space-between" alignItems="center" className="pb-2">
          <Grid container item xs={7}>
            <Grid item xs={6}>Management Level – Marine Engineer Officer</Grid>
            <Grid item xs={6}>00001-04</Grid>
          </Grid>
          <Grid container item  xs={4} justify="flex-end">
            <Button variant="contained" className="pr-3" onClick={() => handleOpen(3)}>Details</Button>
            <Button variant="contained" color="primary">
              Add Course
            </Button>
          </Grid>
        </Grid>
      </Grid>  
    </Grid>
  )
}

export default memo(Dashboard);
