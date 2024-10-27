import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "./css/sertifikat.css";

function SertifikatCard() {
  const cards = [
    {
      title: "Sertifikasi ISO 9001: Manajemen Mutu",
      description:
        "Pabrik kami telah tersertifikasi ISO 9001, yang menunjukkan komitmen kami terhadap manajemen mutu dalam setiap proses produksi.",
      img: "path/to/iso9001.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Sertifikasi ISO 14001: Manajemen Lingkungan",
      description:
        "Dengan sertifikasi ISO 14001, kami memastikan bahwa setiap langkah produksi dijalankan dengan perhatian terhadap kelestarian lingkungan.",
      img: "path/to/iso14001.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Sertifikasi SNI: Standar Nasional Indonesia",
      description:
        "Produk PVC kami telah sesuai dengan standar SNI, menjamin kualitas dan keamanan untuk berbagai aplikasi industri.",
      img: "path/to/sni.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Sertifikasi RoHS: Bebas Bahan Kimia Berbahaya",
      description:
        "Kami mematuhi standar RoHS, memastikan produk bebas dari bahan berbahaya seperti timbal, merkuri, dan kadmium.",
      img: "path/to/rohs.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#333", color: "#fff" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", color: "green" }}
        gutterBottom
      >
        News Update
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "white" }}>
        NOW ENJOY A WONDERFUL NEWS UPDATE
      </Typography>

      <Grid
        container
        spacing={2}
        style={{ marginTop: "20px", marginLeft: "0.1" }}
      >
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                style={{ margin: "0 16px 16px 16px", color: "#1976d2" }}
              >
                LEARN MORE
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SertifikatCard;
