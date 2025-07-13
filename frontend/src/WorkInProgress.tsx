import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';

const WorkInProgress: React.FC<{ message?: string; subtext?: string }> = ({
  message = 'This page is under construction',
  subtext = 'We are working hard to bring you this content. Please check back soon!'
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
        px: 2,
      }}
      aria-label="Work in progress section"
    >
      <Stack spacing={2} alignItems="center">
        <ConstructionIcon
          sx={{ fontSize: 80, color: 'warning.main', animation: 'wip-bounce 1.5s infinite' }}
          aria-label="Under construction icon"
        />
        <Typography variant="h4" component="h1" fontWeight="bold">
          {message}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtext}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
          aria-label="Back to Home"
        >
          Back to Home
        </Button>
      </Stack>
      <style>{`
        @keyframes wip-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
};

export default WorkInProgress; 