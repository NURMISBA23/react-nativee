import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Menggunakan daftar gambar yang Anda berikan
const daftarGambarAwal = [
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNRZg2KXTlVxT88X67ig-28tXxCL0PoON4w&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89tk8EYmK2Ywyp9-bP8MU1WHuBZO9WBMMgTJFxYtNjiYEBkvAadgxCREN5iuA6mCRDOw&usqp=CAU' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJf7LGe2EupZm5FVDQwcUlv39VCZe5QdAyKg&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogQn7rfXiEpepGb_RGu79N62fBujxAQKBMA&s' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSz6ZUat1hXr9YZqxuz979oeP8SyT_vqd2g&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeX2oXdPA5BvoWSxndJ6JKKNdL5lVHgaraZLD9SkOKf9c5do7YQIvvprncTHWSfyt1hjA&usqp=CAU' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8P_gpeM5fMS0U_PDTx2oFr3r5PMtrgEt25cv94U8TyZ_oJGgzfsP7NK27h-85RSdLdWg&usqp=CAU', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWp21TT27Lc9cIhuHnkp3MsNfFfKCBgBPYI4fit6voLJuSKTJaJj4d7cz7znkRboUHJM&usqp=CAU' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2v4lke4zgAtT7e51Z--iKVbQoKeqmXMwwg&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrajD_kN4X62UE5PwSEBaNtBsOc4XA2UcXw&s' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqW7A5Yyfa3vWYwTJJFjs2vrzh4vpvr9GKQ&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WKTn4EjO1Ml0eRrnOr9L3DQlv9BoJam5KA&s' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeU_UOQsI5DnvOXrUnf56S5QjRsdQMXdMV5g&s', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqNw8-dbMB1ejB22UUOFomJX_WLfssv0jyw&s' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSij0bL7wcgOrlUayn2oln-EOMXLFZvgP75cWu4z2MYn1TF7HUgjpR_Y2c7kqlVPUHblvk&usqp=CAU', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCNbaXBiGvlsXWG0oeVffgdiXif55t2U6DA&s' },
  { utama: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL573VvS3yXWD0nFqVhkRlJyQ8HcrEEcFCc9O_SH4MPkBrz-Yzb6RiIikAZKiINOLsULg&usqp=CAU', alternatif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18bwI_004HXNUanY3k--zqR_DkwqBZLPVgceJ7gZcFJYrH873FLsLoTu-WmGqBUNUyno&usqp=CAU' },
];


export default function Tugas2() {
  const [gambar, setGambar] = useState(
    daftarGambarAwal.map(g => ({
      ...g,
      sumberSaatIni: g.utama,
      skala: 1,
    }))
  );

  const tanganiTekanGambar = (index) => {
    setGambar(gambarSebelumnya =>
      gambarSebelumnya.map((item, i) => {
        if (i === index) {
          // Perbesar gambar 1.2x, dengan batas maksimal 2x
          const skalaBaru = item.skala < 2 ? item.skala * 1.2 : 2;
          
          return {
            ...item,
            // Ganti sumber gambar antara utama dan alternatif
            sumberSaatIni: item.sumberSaatIni === item.utama ? item.alternatif : item.utama,
            skala: skalaBaru,
          };
        }
        return item; // Kembalikan gambar lain tanpa perubahan
      })
    );
  };

  return (
    <View style={gaya.wadah}>
      <Text style={gaya.judul}>Galeri Gambar 3x3</Text>
      <View style={gaya.grid}>
        {gambar.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={gaya.sel}
            onPress={() => tanganiTekanGambar(index)}
          >
            <Image
              source={{ uri: item.sumberSaatIni }}
              style={[
                gaya.gambar,
                { transform: [{ scale: item.skala }] }
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const gaya = StyleSheet.create({
  wadah: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 372, 
  },
  sel: {
    width: 120,
    height: 120,
    margin: 2,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  gambar: {
    width: '100%',
    height: '100%',
  },
});