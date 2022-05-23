import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/UserInfo.module.css';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

function UserInfo({ user }) {
  return (
    <Grid
      container
      item
      xs={12}
      md={3}
      alignContent="flex-start"
      className={styles.userInfo}
    >
      <Grid item xs={12} justifyContent="center" p={3}>
        <Image
          width={200}
          height={200}
          alt="profile"
          src={user.avatarUrl}
          layout="responsive"
          objectFit="cover"
          className={styles.avatar}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="subtitle1">{user.email}</Typography>
        <Typography variant="subtitle1">{user.websiteUrl}</Typography>
        <Typography variant="subtitle1" mb={3}>
          {user.location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" mb={3}>
          {user.bio}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        className={styles.followers}
      >
        <GroupOutlinedIcon />
        <Typography variant="subtible2">
          {user.followers.totalCount}{' '}
          {user.followers.totalCount > 1 ? 'followers' : 'follower'}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserInfo;
