
import React,{useState,useEffect} from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button,Box } from '@mui/material';

const ReviewAdmin = () => {

const [review,setReview] = useState([]);

useEffect(()=>{
const fetchreview =  async () => {
    try {
      const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:8000/api/getReviews", {
          method:"GET",
          headers: {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`

          }
        });
        if(!response.ok) {
            console.error("Failed to fetch review");
        }
        const data = await response.json();
        setReview(data);
    } catch(error) {
        console.log(error);
    }

};
fetchreview();
},[]);


return (
    <div>
        <Typography variant="h4">Review Info from Feedback page</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {review.map(review1 => (
                 <TableRow>
                 <TableCell>{review1.id}</TableCell>
                 <TableCell>{review1.user.first}</TableCell>
                 <TableCell>{review1.user.last}</TableCell>
                 <TableCell>{review1.comment}</TableCell>
                 <TableCell>{review1.rating}</TableCell>
               </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReviewAdmin;
