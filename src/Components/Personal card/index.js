import React, {Component} from 'react'
import { Card, CardMedia, List, ListItem, Typography, Divider, LinearProgress, withStyles, Box, Grid } from '@material-ui/core'
import { BusinessCenter, Email, HomeWork } from '@material-ui/icons'
 import img2 from '../../Assets/img2.jpg'

const styles = theme=>({
    root:{
                
    },
    titles:{
        padding:'15px 0px',
        marginLeft:'5%',
        color:theme.palette.secondary.main
    },
    subtitles:{
        color:theme.palette.secondary.main
    },
    bars:{
        height:20,
        borderRadius:10
    },
    media:{ 
        height:350
    },
    icons:{
        paddingRight:15
    },
    name:{
        padding:15,
        paddingBottom:0
    }
})

class PersonalContainer extends Component{
    render(){
        const {classes} = this.props
        return(
            <Card>
                <Grid container direction='column'>
                    <Grid item lg={12} xs={12}>
                    <CardMedia
                        className={classes.media}
                        image={img2}
                    />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.name} variant='h5'>
                            Carlos Manuel Crespo Astorac
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{padding:'15px'}}>
                <List>
                    <ListItem>
                        <Typography className={classes.subtitles}><BusinessCenter className={classes.icons} color='primary' fontSize='small'/>{this.props.profesion}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography className={classes.subtitles}><HomeWork className={classes.icons} color='primary' fontSize='small'/>{this.props.region}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography className={classes.subtitles}><Email className={classes.icons} color='primary' fontSize='small'/>{this.props.email}</Typography>
                    </ListItem>
                </List>

                <Divider/>

                <Typography className={classes.titles} variant='h5'>Skills</Typography>

                <List>
                    {
                        this.props.progress.map((key, index) =>(
                            <ListItem key={index}>
                                <Grid container direction='column' spacing={1}>
                                    <Grid item lg={12}>
                                        <Typography className={classes.subtitles}>{key.technology}</Typography>
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <LinearProgress
                                            className={classes.bars}
                                            variant='determinate'
                                            value={key.progress}
                                        > "agfgdfghghfbashgf" </LinearProgress>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))
                    }
                </List>

                <Divider/>

                <Box justifyContent='center' className={classes.presonalTitles}>
                    <Typography className={classes.titles} variant='h5'>Language</Typography>
                </Box>

                <List>
                    {
                        this.props.language.map((key, index) =>(
                            <ListItem key={index}>
                                <Grid container direction='column' spacing={1}>
                                    <Grid item lg={12}>
                                        <Typography className={classes.subtitles}>{key.language}</Typography>
                                    </Grid>
                                    <Grid item lg={12} xs={12}>
                                        <LinearProgress
                                            className={classes.bars}
                                            variant='determinate'
                                            value={key.domain}
                                        />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))
                    }
                </List>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(PersonalContainer)