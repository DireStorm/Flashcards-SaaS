import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid2} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in"> Login </Button>
            <Button color="inherit" href="/sign-up"> Sign Up </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">{' '}Easiest way to create flashcards from text!</Typography>
        <Button variant='contained' color='primary' sx={{mt: 2}} href="/sign-in">Get Started</Button>
      </Box>

      <Box sx = {{my: 6}}>
        <Typography variant="h4">
          Features
        </Typography>
        <Grid2 container spacing = {4}>
          <Grid2 item xs = {12} md ={4}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h6" gutterBottom>
                Easy Text Input
              </Typography>
              <Typography gutterBottom>All you need to do is input text, and our software does the rest!</Typography>
            </Box>
          </Grid2>
          <Grid2 item xs = {12} md ={4}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography gutterBottom>All you need to do is input text, and our software does the rest!</Typography>
          </Box>
          </Grid2>
          <Grid2 item xs = {12} md ={4}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h6" gutterBottom>
              Fast Generation
            </Typography>
            <Typography gutterBottom>All you need to do is input text, and our software does the rest!</Typography>
          </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{my: 6, textALign: 'center'}}>
        <Typography variant="h4" gutterBottom>
            Pricing
        </Typography>
        <Grid2 container spacing = {4}>
          <Grid2 item xs = {12} md ={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>
              Basic
            </Typography>
            <Typography variant="h6" gutterBottom>
              $5 / month
            </Typography>
            <Typography gutterBottom>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant = "contained" color="primary" sx={{mt: 2}}>Choose Basic</Button>
            </Box>
          </Grid2>
          <Grid2 item xs = {12} md ={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>
              Pro
            </Typography>
            <Typography variant="h6" gutterBottom>
              $10 / month
            </Typography>
            <Typography gutterBottom>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant = "contained" color="primary" sx={{mt: 2}}>Choose Pro</Button>
            </Box>
          </Grid2>
          <Grid2 item xs = {12} md ={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>
              Business
            </Typography>
            <Typography variant="h6" gutterBottom>
              $50 / month
            </Typography>
            <Typography gutterBottom>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant = "contained" color="primary" sx={{mt: 2}}>Choose Business</Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
