import * as React from 'react';
import { Outlet, Link as RouterLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useAuth } from '../components/auth';
import { Footer } from './footer';

export function HomeLayout() {
  const { user, onLogout } = useAuth();
  return (
    <>      
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap
            sx={{ flexGrow: 1, textDecoration: 'none' }}
            component={RouterLink}
            to="home"
          >
            Safe Stock
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              component={RouterLink}
              to="/dashboard"
              sx={{ my: 1, mx: 1.5 }}
            >
              Dashboard
            </Link>
            <Link
              variant="button"
              color="text.primary"
              component={RouterLink}
              to="/admin"
              sx={{ my: 1, mx: 1.5 }}
            >
              Admin
            </Link>
            <Link
              variant="button"
              color="text.primary"
              component={RouterLink}
              to="/home"
              sx={{ my: 1, mx: 1.5 }}
            >
              PRICE
            </Link>
          </nav>
          {user ? (
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={onLogout}>
              Logout
            </Button>
          ) : (<>
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
              to="login"
            >
              Login
            </Button>
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
              to="signup"
            >
              Sign Up
            </Button>
          </>
          )
          }
        </Toolbar>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  )
}