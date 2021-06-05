import React from 'react'
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default function Create() {
  return (
    <Container>
      <Typography 
        variant="h1"
        color="primary"
        align="center"
      >
        Create a new note
      </Typography>
      {/* <Typography 
        color="secondary"
      >
        Create a new note
      </Typography> */}
      <Button 
        type="submit"
        color="secondary"
        variant="outlined"
      >
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Button type="submit" color="secondary" variant="contained" onClick={() => console.log("you clicked me")}>
        Submit
      </Button>
    </Container>
  )
}
