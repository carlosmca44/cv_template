import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette:{
      primary:{
        main:'#009688'
      },
      secondary:{
        main:'#757575',
      }
    },
    overrides:{
      MuiCard:{
        root:{
          boxShadow:'1px 1px 20px 1px gray',
          borderRadius:0
        }
      },
      MuiLinearProgress:{
        root:{
          height:15
        }
      },
      MuiIcon:{
        root:{
          color:'#009688'
        }
      }
    },
  })