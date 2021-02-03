import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import PerfomanceSection from './Sections/Performance'
import PersonalContainer from './Components/Personal card'
import { Grid, withStyles } from '@material-ui/core';
import { languageDomain, progressValue } from './Assets';
import Footer from './Components/Footer';
import { theme } from './styles'

const styles = theme=>({
  root:{
    width:'100%',
    margin:'auto auto',
    backgroundColor:'#f1f1f1',
  }
})

class App extends Component {
  render(){
    const {classes} = this.props
    return (
        <ThemeProvider theme={theme}>

          <Grid className={classes.root} container direction='row' justify={'center'} spacing={2}>
            <Grid item xs={12} sm={5} lg={3}>
              <PersonalContainer
                img='../Assets/img2.jpg'
                profesion='Developer'
                region='Havana, Cuba'
                email='carlosmca4424@gmail.com'
                progress={progressValue}
                language={languageDomain}
              />
            </Grid>
            <Grid item xs={12} sm={7} lg={6}>
              <PerfomanceSection/>
            </Grid>
          </Grid>

          <Footer/>

        </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
