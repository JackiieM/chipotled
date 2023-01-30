import { Button, Card, Container, Paper } from "@mui/material"
import Form from "./Form"

const Welcome = () => {
  return (
    <div>
        <Container>
          <Card elevation={1}>
            <h1>Chipotle'd</h1>
            <p>Something about needing this app in your life</p>
            <Button>Let's Spaghettit</Button>
          </Card>
        </Container>
        <Form></Form>
    </div>
  )
}

export default Welcome