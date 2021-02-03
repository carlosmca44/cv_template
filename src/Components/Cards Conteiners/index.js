import { Card, CardContent, Divider, Grid, Icon, Typography, withStyles } from '@material-ui/core'
import { DateRange } from '@material-ui/icons'
import React, {Component} from 'react'

const styles = theme=>({
    root:{
        padding:'3%'
    },
    thematic:{
        padding:'15px 0px',
        margin:'10px 0px',
        color:theme.palette.secondary.main
    },
    title:{
        fontSize:18,
        color:theme.palette.secondary.main
    },
    date:{
        height:'max-content',
        color:theme.palette.primary.main,
        marginLeft:'15px'
    },
    description:{
        fontSize:15
    },
    icon:{
        padding:15,
    },
    dateicon:{
        marginRight:15
    }
})

class Containers extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card>
                <CardContent className={classes.root}>
                        <Typography className={classes.thematic} variant='h4'>
                            <Icon className={classes.icon} fontSize='large'>{this.props.icontheme}</Icon>
                            {this.props.themes}
                        </Typography>
                    {
                        this.props.maped.map((key, index) =>(
                            <Grid container direction='column' justify={'center'} spacing={2} key={index}>
                                <Grid item>
                                    <Typography className={classes.title} component='b'>{key.title}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.date}>
                                        <DateRange className={classes.dateicon} color='primary' fontSize='small'/>
                                        {key.date}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.description}>{key.description}</Typography>
                                </Grid>
                                <Grid item>
                                    <Divider/>
                                </Grid>
                            </Grid>
                        ))
                    }
                </CardContent>                
            </Card>
        )
    }
}

export default withStyles(styles)(Containers)