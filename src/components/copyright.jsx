import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#" component={RouterLink} to="/home">
        Safe Stock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
