import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',

    '&:hover': {
      backgroundColor: "blue"
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {

  const classes = useStyles()

  return (
    <Container>
      <Typography 
        variant="h1"
        color="primary"
        align="center"
        className={classes.title}
      >
        Create a new note
      </Typography>
      {/* <Typography 
        color="secondary"
      >
        Create a new note
      </Typography> */}
      {/* Button */}
      <Button 
        type="submit"
        color="secondary"
        variant="outlined"
        endIcon={<SendIcon/>}
        className={classes.btn}
      >
        Submit
      </Button> 
      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Button type="submit" color="secondary" variant="contained" onClick={() => console.log("you clicked me")}>
        Submit
      </Button> */}
      {/* icons */}
      <br/>
      {/* <AcUnitOutlinedIcon/>
      <AcUnitOutlinedIcon 
        color="secondary"
        fontSize="large"
      />
      <AcUnitOutlinedIcon 
        color="action"
        fontSize="small"
      /> */}
      {/* icons */}
    </Container>
  )
}
