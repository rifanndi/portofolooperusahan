import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Navbar from "../componet/navbar";

const ProductPage = () => {
  const products = [
    {
      image: "https://via.placeholder.com/150",
      name: "Produk 1",
      price: "Rp100",
      originalPrice: "Rp51.000",
      stock: "Lagi Diminati",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Produk 2",
      price: "Rp100",
      originalPrice: "Rp25.000",
      stock: "Tersedia",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Produk 3",
      price: "Rp100",
      originalPrice: "Rp49.950",
      stock: "Tersedia",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Produk 4",
      price: "Rp100",
      originalPrice: "Rp65.000",
      stock: "Segera Habis",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Produk 5",
      price: "Rp100",
      originalPrice: "Rp51.000",
      stock: "Tersedia",
    },
  ];

  const articles = [
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 1",
      description: "Deskripsi singkat artikel 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 2",
      description: "Deskripsi singkat artikel 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 3",
      description: "Deskripsi singkat artikel 3.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Artikel 4",
      description: "Deskripsi singkat artikel 4.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {/* Promosi */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#FFEBEE",
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="green"
              gutterBottom
            >
              Traktiran Pengguna Baru
            </Typography>
            <Typography variant="h6">Belanja Pertama cuma</Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Rp100
            </Typography>
            <Typography variant="body2" color="textSecondary">
              *S&K Berlaku
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Cek Sekarang
            </Button>
          </Card>
        </Grid>

        {/* Daftar Produk */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {product.originalPrice} 99%
                    </Typography>
                    <Typography
                      variant="body2"
                      color={
                        product.stock === "Segera Habis"
                          ? "error"
                          : "textSecondary"
                      }
                      sx={{ mt: 1 }}
                    >
                      {product.stock}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Tombol di Bawah Produk */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 1
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 2
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Tombol 3
        </Button>
      </Box>

      {/* Deretan Artikel */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Artikel Terkait
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductPage;
