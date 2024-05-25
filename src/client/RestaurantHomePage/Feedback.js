import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Rating } from '@mui/material';

const FeedbackPage = () => {
  const [comment, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Feedback:', comment);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/create-Review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json',
          'Authorization' : `Bearer ${token}`
          
        },
        body: JSON.stringify({ rating, comment }),
      });

      if (!response.ok) {
        throw new Error('Failed to create review');
      }

      
      setFeedback('');
      setRating(0);
    } catch (error) {
      console.error('Error creating review:', error);
    
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Feedback Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Rating
              value={rating}
              onChange={handleRatingChange}
              precision={0.5}
              size="large"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Your Feedback"
              variant="outlined"
              value={comment}
              onChange={handleFeedbackChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default FeedbackPage;