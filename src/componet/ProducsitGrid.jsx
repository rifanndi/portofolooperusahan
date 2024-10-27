import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./ProductGrid.css"; // Pastikan membuat file CSS untuk styling tambahan

const products = [
  {
    title: "PAPAN PLAFON PVC",
    description:
      "Plafon PVC merupakan salah satu material bangunan yang dipergunakan untuk membuat plafon. Plafon PVC ini bisa digunakan untuk bangunan hotel, kantor, rumah tinggal, restoran, room karaoke, gedung, dan lain sebagainya.",
    image: "url_gambar_papan_plafon_pvc",
  },
  {
    title: "LIST PVC",
    description:
      "List plafon merupakan penghubung antara permukaan plafon dengan dinding bangunan yang saling menempel. Selain sebagai hiasan agar terlihat lebih menarik, lis plafon ini juga mempunyai fungsi untuk memperindah bangunan.",
    image: "url_gambar_list_pvc",
  },
  {
    title: "PINTU PVC",
    description:
      "Pintu PVC adalah pilihan yang baik untuk kebutuhan pintu indoor dengan keunggulan tahan air dan perawatan mudah.",
    image: "url_gambar_pintu_pvc",
  },
  {
    title: "PROFIL PVC",
    description:
      "Profil PVC digunakan dalam dekorasi interior untuk menghasilkan garis-garis dekoratif yang halus dan tahan lama.",
    image: "url_gambar_profil_pvc",
  },
  {
    title: "KERANGKA PVC",
    description:
      "Kerangka PVC sering digunakan untuk mendukung struktur plafon atau dinding interior karena daya tahannya.",
    image: "url_gambar_kerangka_pvc",
  },
  {
    title: "LAMPU HIAS PVC",
    description:
      "Lampu hias PVC digunakan sebagai dekorasi interior yang ringan dan mudah dipasang di berbagai jenis plafon.",
    image: "url_gambar_lampu_hias_pvc",
  },
];

const ProducsitGrid = () => {
  return (
    <Container>
      <Grid container spacing={4} className="product-grid">
        {products.map((product, index) => (
          <Grid item xs={12} md={6} key={index} className="product-item">
            <div className="product-content">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <Typography variant="h5" component="h3" className="product-title">
                {product.title}
              </Typography>
              <Typography variant="body1" className="product-description">
                {product.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProducsitGrid;
