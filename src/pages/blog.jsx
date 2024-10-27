import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import "./css/blog.css";
import Navbar from "../componet/navbar";

const BlogPage = () => {
  const articles = [
    {
      title: "Artikel 1",
      description: "Ini adalah deskripsi singkat untuk artikel pertama.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Artikel 2",
      description: "Ini adalah deskripsi singkat untuk artikel kedua.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Artikel 3",
      description: "Ini adalah deskripsi singkat untuk artikel ketiga.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Artikel 4",
      description: "Ini adalah deskripsi singkat untuk artikel keempat.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar style={{ position: "fixed", top: 0, left: 0, right: 0 }} />

      <Container maxWidth="md" sx={{ mt: 10 }}>
        {" "}
        {/* Mengubah mt untuk memberi ruang bagi Navbar yang tetap */}
        {/* Gambar Header dan Konten */}
        <Card sx={{ mb: 5 }} className="card-header">
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/800x300"
            alt="Blog Header"
          />
          <CardContent className="card-content">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Judul Blog
            </Typography>
            <Typography variant="body1" paragraph>
              Ini adalah paragraf pertama yang memberikan penjelasan awal
              tentang topik blog ini.
            </Typography>
            <Typography variant="body1" paragraph>
              Paragraf kedua memberikan informasi tambahan dan mendetail tentang
              topik yang dibahas.
            </Typography>
            <Typography variant="body1" paragraph>
              Paragraf ketiga memberikan kesimpulan atau ringkasan dari
              pembahasan topik blog ini.
            </Typography>
          </CardContent>
        </Card>
        {/* Artikel Terkait */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Artikel Terkait
        </Typography>
        <Grid container spacing={3} className="related-articles">
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="article-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2">{article.description}</Typography>
                </CardContent>
                <Button size="small" sx={{ mb: 1 }}>
                  Baca Selengkapnya
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;
