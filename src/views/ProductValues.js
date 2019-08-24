import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

import curvyLines from '../static/productCurvyLines.png'
import { ReactComponent as ProductValues1 } from '../static/productValues1.svg'
import { ReactComponent as ProductValues2 } from '../static/productValues2.svg'
import { ReactComponent as ProductValues3 } from '../static/productValues3.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    color: 'white'
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: 'white'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  }
})

const ProductValues = ({ classes }) => (
  <section className={classes.root}>
    <Container className={classes.container}>
      <img src={curvyLines} className={classes.curvyLines} alt="curvy lines" />
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <ProductValues1 fill="white" className={classes.image} />
            <Typography variant="h6" className={classes.title}>
              Melhores cortes
            </Typography>
            <Typography variant="h5">
              {'Escolha entre nossos vários cortes e produtos para sua casa e sua família'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <ProductValues2 fill="white" className={classes.image} />
            <Typography variant="h6" className={classes.title}>
              Maior qualidade
            </Typography>
            <Typography variant="h5">
              {
                'Priorizamos a qualidade de nossos produtos, como higiene, saúde de nossos animais, e refinamento dos produtos'
              }
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <ProductValues3 fill="white" className={classes.image} />
            <Typography variant="h6" className={classes.title}>
              Melhores preços
            </Typography>
            <Typography variant="h5">
              {'E com tudo isso, ainda temos como valor, oferecer um preço justo para todos'}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  </section>
)

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductValues)
