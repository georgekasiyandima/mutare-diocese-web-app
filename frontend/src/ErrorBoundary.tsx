import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Refresh, Home } from '@mui/icons-material';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              textAlign: 'center',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 3
            }}
          >
            <Typography 
              variant="h4" 
              color="#5C4033" 
              fontWeight={700} 
              fontFamily="Lora, serif" 
              mb={3}
            >
              Oops! Something went wrong
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              mb={4}
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              We're sorry, but something unexpected happened. Please try refreshing the page or return to the home page.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<Refresh />}
                onClick={this.handleRefresh}
                sx={{
                  bgcolor: '#5C4033',
                  '&:hover': { bgcolor: '#4a3329' }
                }}
              >
                Refresh Page
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Home />}
                onClick={this.handleGoHome}
                sx={{
                  borderColor: '#5C4033',
                  color: '#5C4033',
                  '&:hover': {
                    borderColor: '#4a3329',
                    bgcolor: '#5C403310'
                  }
                }}
              >
                Go to Home
              </Button>
            </Box>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 4, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, textAlign: 'left' }}>
                <Typography variant="caption" color="text.secondary">
                  <strong>Error Details (Development):</strong><br />
                  {this.state.error.message}
                </Typography>
              </Box>
            )}
          </Paper>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 