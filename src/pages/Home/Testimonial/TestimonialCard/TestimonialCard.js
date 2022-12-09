import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({ image }) => {
  return (
    <Card
      sx={{
        mx: "auto",
        position: "relative",
        overflow: "visible",
        borderRadius: "10px",
        border: "1px solid #691B70",
        p: "30px",
        "&:hover": { 
          FormatQuoteIcon: "#fff",
          bgcolor: "#691B70",
          marginTop: "-40px",
          duration: ".3s",
        },
        "&:hover > span": {
          color: "#fff",
        },
      }}
    >
      <span>
        <FormatQuoteIcon sx={{ fontSize: "38px" }}></FormatQuoteIcon>
      </span>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "15px",
          }}
        >
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Typography variant="body2" color="#b1b1b1" sx={{ mb: "10px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="80"
        image={image}
        alt="green iguana"
        sx={{
          width: "auto",
          mx: "auto",
          position: "absolute",
          bottom: "-40px",
          left: "38%",
        }}
      />
      <Typography
        sx={{
          width: "auto",
          mx: "auto",
          position: "absolute",
          bottom: "-78px",
          left: "37%",
          fontSize: "16px",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Aminul Islam
      </Typography>
    </Card>
  );
};

export default TestimonialCard;
