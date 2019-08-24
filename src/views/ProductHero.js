import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'

import backgroundImage from '../static/sitio.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
})

const ProductHero = ({ classes }) => (
  <ProductHeroLayout backgroundClassName={classes.background}>
    <img style={{ display: 'none' }} src={backgroundImage} alt="" />
    <Typography color="inherit" align="center" variant="h2" marked="center">
      Sítio Novo Horizonte
    </Typography>
    <Typography color="inherit" align="center" variant="h4" className={classes.h5}>
      Conheça nossos cortes e produtos variados
    </Typography>
  </ProductHeroLayout>
)

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHero)
