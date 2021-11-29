import makeStyles from '@mui/styles/makeStyles';
import { Avatar } from './avatar.component';

export default {
  title: 'Components/Display/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle:
      'Avatars assists users in understanding content, without being the focal point in a UI. They represent a user or a brand (with a logo or branded graphic).',
  },
};

const useStyles = makeStyles({
  avatar: {
    display: 'flex',
    '& .MuiAvatar-root': {
      margin: '4px',
    },
  },
});

export const Avatars = () => {
  const classes = useStyles();

  return (
    <div className={classes.avatar}>
      <Avatar
        alt="Squaredev"
        src="https://trello-logos.s3.amazonaws.com/da3ecf32ff64dfa1fc504013d5534a1a/170.png"
      />
      <Avatar
        alt="Jef Stals"
        src="https://trello-members.s3.amazonaws.com/5beb16e3702e685947ac265b/1c3591a18413a2382f7e0823cac7991a/original.png"
      />
      <Avatar
        alt="Megaklis Vasilakis"
        src="https://trello-members.s3.amazonaws.com/5b8d185fdd66b46bdc25059c/2cfe3571b458a928eb951efebb7f9746/original.png"
      />
      <Avatar>W</Avatar>
    </div>
  );
};
