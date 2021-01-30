import { withStyles, Grid } from '@material-ui/core';
import { Work } from '@material-ui/icons';
import React, { Component } from 'react';
import { education, workexp } from '../../Assets';
import  Containers from '../../Components/Cards Conteiners/index'

const styles = theme=>({
    root:{
        
    }
});

class PerfomanceSection extends Component{
    render(){
        
        return(
            <Grid container direction='column' spacing={2} justify='space-around'>
                <Grid item>
                    <Containers
                        icontheme={<Work/>}
                        themes='Work Experience'
                        maped={workexp}
                    />
                </Grid>
                <Grid item>
                    <Containers
                        themes='Education'
                        maped={education}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(PerfomanceSection)