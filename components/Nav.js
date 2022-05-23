import { Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <Grid
      container
      item
      xs={12}
      className={styles.nav}
      mb={1}
      alignItems="center"
      p={3}
    >
      <GitHubIcon />
      <Typography variant="h5" ml={2}>
        Github Repo Search
      </Typography>
    </Grid>
  );
}

export default Nav;
