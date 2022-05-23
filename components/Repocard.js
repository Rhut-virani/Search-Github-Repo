import { Box, Chip, Grid, Link, Typography } from '@mui/material';
import styles from '../styles/Repocard.module.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Repocard({
  name,
  forkCount,
  stargazerCount,
  isPrivate,
  url,
  description,
  primaryLanguage,
}) {
  return (
    <Grid
      container
      item
      className={styles.card}
      xs={12}
      lg={5}
      alignContent="space-between"
    >
      <Grid container item justifyContent="flex-start" alignItems="center">
        <BookmarkBorderOutlinedIcon fontSize="small" />
        <Link
          target="_blank"
          href={url}
          rel="noreferrer"
          className={styles.link}
        >
          <Typography variant="subtitle1" color="primary" ml={1}>
            {name}
          </Typography>
        </Link>
        <Chip
          label={isPrivate ? 'Private' : 'Public'}
          variant="outlined"
          className={styles.chip}
        />
      </Grid>
      <Typography variant="body2" noWrap className={styles.details} my={2}>
        {description}
      </Typography>
      <Grid container item justifyContent="flex-start">
        <Grid
          container
          item
          xs={4}
          className={styles.language}
          alignItems="center"
        >
          <Box className={`${primaryLanguage && styles.circle}`}></Box>
          <Typography variant="subtitle2" ml={1}>
            {primaryLanguage}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          className={styles.fork}
          alignItems="center"
          justifyContent="center"
        >
          <RestaurantOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" mx={1}>
            {forkCount}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          className={styles.star}
          alignItems="center"
          justifyContent="center"
        >
          <StarBorderOutlinedIcon fontSize="small" />
          <Typography variant="subtitle2" ml={1}>
            {stargazerCount}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Repocard;
