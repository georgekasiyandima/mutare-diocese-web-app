import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

interface Message {
  id: number;
  title: string;
  message: string;
  created_at: string;
}

const BishopsMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/bishops-messages')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch messages');
        return res.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Box maxWidth={700} mx="auto">
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <img
          src="/bishop.jpg"
          alt="Bishop Paul Horan"
          style={{
            width: 220,
            height: 260,
            objectFit: 'contain',
            aspectRatio: '220/260',
            borderRadius: 16,
            boxShadow: '0 4px 16px rgba(44,32,18,0.12)',
            border: '3px solid #bfa14a',
            background: '#fff',
            display: 'block',
          }}
        />
        <Typography variant="h6" align="center" mt={2} color="#5C4033">
          Rt. Rev. Paul Horan, O.Carm
        </Typography>
      </Box>
      <Typography variant="h4" color="#5C4033" mb={3} fontFamily="Lora, serif" align="center">
        Bishop's Messages
      </Typography>
      {loading && <Box display="flex" justifyContent="center"><CircularProgress /></Box>}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && messages.length === 0 && (
        <Alert severity="info">No messages found.</Alert>
      )}
      {!loading && !error && messages.map((msg) => (
        <Card key={msg.id} sx={{ mb: 3, background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" color="#5C4033" gutterBottom>
              {msg.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {msg.message}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(msg.created_at).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default BishopsMessages; 