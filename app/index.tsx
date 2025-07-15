// import { Text, View, StyleSheet } from "react-native";
// import { Link } from 'expo-router';

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Halaman Utama</Text>
//       <Text style={styles.subtitle}>Klik tombol di bawah untuk melihat tugas.</Text>
      
//       {/* Tombol untuk navigasi ke halaman tugas1 */}
//       <Link href="/tugas1" style={styles.linkButton}>
//         <Text style={styles.linkText}>Buka Tugas 1</Text>
//       </Link>
      
//       {/* 🔗 TAMBAHKAN TOMBOL INI untuk navigasi ke halaman tugas2 */}
//       <Link href="/tugas2" style={[styles.linkButton, { marginTop: 15 }]}>
//         <Text style={styles.linkText}>Buka Tugas 2</Text>
//       </Link>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   linkButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     elevation: 2, // Shadow for Android
//     shadowColor: '#000', // Shadow for iOS
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//   },
//   linkText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   }
// });
// --------------------------------------TUGAS 1------------------------------------------
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function LayarBentukGeometris() {
//   return (
//     <View style={gaya.wadahUtama}>
//       <View style={gaya.bentukSegitiga} />

//       <View style={gaya.kotakPersegi}>
//         <Text style={gaya.teksDiDalam}>NURMISBA</Text>
//       </View>

//       <View style={gaya.kapsulInfo}>
//         <Text style={gaya.teksDiDalam}>105841103422</Text>
//       </View>
//     </View>
//   );
// }

// const gaya = StyleSheet.create({
//   wadahUtama: {
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//     flex: 1,
//     gap: 32,
//     justifyContent: 'center',
//   },
//   bentukSegitiga: {
//     backgroundColor: 'transparent',
//     borderBottomColor: '#c13e2c',
//     borderBottomWidth: 115,
//     borderLeftColor: 'transparent',
//     borderLeftWidth: 75,
//     borderRightColor: 'transparent',
//     borderRightWidth: 75,
//     borderStyle: 'solid',
//     height: 0,
//     width: 0,
//   },
//   kotakPersegi: {
//     alignItems: 'center',
//     backgroundColor: '#2a81ba',
//     borderRadius: 10,
//     height: 68,
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//     width: 290,
//   },
//   kapsulInfo: {
//     alignItems: 'center',
//     backgroundColor: '#28b062',
//     borderRadius: 34,
//     height: 68,
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//     width: 290,
//   },
//   teksDiDalam: {
//     color: '#ffffff',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });
// ----------------------------------BATAS TUGAS 1----------------------------------------
// ----------------------------------TUGAS 2----------------------------------------
import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- Konfigurasi Awal ---
// Datanya diubah untuk menampilkan gambar yang Anda minta.
const DATA_GAMBARA = Array.from({ length: 9 }, (_, index) => ({
  pananda: index + 1,
  // Gambar orisinil/utama menggunakan link baru.
  orisinil: `https://i.pinimg.com/736x/8a/ea/22/8aea2261be9889f7a937a0d2810d5591.jpg`,
  // Gambar cadangan/alternatif diperbarui sesuai permintaan Anda.
  cadanganna: `https://i.pinimg.com/736x/0b/59/a9/0b59a9a5405a5fd301e4fd0beb0649e5.jpg`,
}));

// Tipe data untuk memastikan struktur data kita konsisten.
type InfoGambara = {
  pananda: number;
  orisinil: string;
  cadanganna: string;
};

/**
 * Komponen untuk satu gambar interaktif.
 * Sekarang dengan logika skala yang benar dan penanganan error yang lebih baik.
 */
const GambaraInteraktif = ({ sumberra }: { sumberra: InfoGambara }) => {
  const [pakeCadanganna, setPakeCadanganna] = useState(false);
  // State skala sekarang akan meningkat setiap kali gambar dipencet.
  const [skala, setSkala] = useState(1);
  const [gagalKiMemuat, setGagalKiMemuat] = useState(false);
  const [gambarUtamaGagal, setGambarUtamaGagal] = useState(false);
  const [gambarCadanganGagal, setGambarCadanganGagal] = useState(false);

  // Fungsi ini jalan kalau gambara' dipencet.
  const pasDipencet = () => {
    // Ganti antara gambar orisinil dan cadangan.
    const targetPakeCadangan = !pakeCadanganna;

    // Cek apakah gambar yang akan ditampilkan sudah gagal dimuat.
    if (targetPakeCadangan && gambarCadanganGagal) return;
    if (!targetPakeCadangan && gambarUtamaGagal) return;

    setPakeCadanganna(targetPakeCadangan);

    // Logika skala baru:
    // Meningkat 20% setiap kali dipencet, dengan batas maksimal 2x (2.0).
    setSkala(skalaSebelumnya => Math.min(skalaSebelumnya * 1.2, 2));
  };

  // Memilih URL gambar yang akan ditampilkan.
  const gambaraDipake = pakeCadanganna ? sumberra.cadanganna : sumberra.orisinil;
  const sedangMemuatGambarUtama = !pakeCadanganna;

  const handleGagalMuat = () => {
      if(sedangMemuatGambarUtama) {
          setGambarUtamaGagal(true);
      } else {
          setGambarCadanganGagal(true);
      }
  }

  const tampilkanError = (sedangMemuatGambarUtama && gambarUtamaGagal) || (!sedangMemuatGambarUtama && gambarCadanganGagal);

  return (
    <TouchableOpacity onPress={pasDipencet} style={modelna.wadahGambara}>
      {tampilkanError ? (
        // Tampilan error jika gambar gagal dimuat.
        <View style={modelna.tampilanKasala}>
          <Text style={modelna.tulisangKasala}>Gagal ji</Text>
        </View>
      ) : (
        <Image
          source={{ uri: gambaraDipake }}
          // Set state gagal jika ada error saat memuat URL gambar.
          onError={handleGagalMuat}
          style={[modelna.gambara, { transform: [{ scale: skala }] }]}
        />
      )}
    </TouchableOpacity>
  );
};

// --- Komponen Utama Aplikasi ---
// Komponen utama yang menyusun semua gambar dalam grid.
export default function AplikasiGambara() {
  const lebaraLayar = Dimensions.get('window').width;
  // Ukuran setiap sel dihitung berdasarkan lebar layar dibagi 3.
  // Ini memastikan "Setiap sel gambar harus memiliki ukuran yang sama".
  const ukuranKotaka = lebaraLayar / 3;

  // Fungsi untuk membagi array jadi beberapa bagian (untuk setiap baris).
  const potongArrayJadiBagian = (arr: InfoGambara[], ukuranBagian: number): InfoGambara[][] => {
    const hasilPotongan = [];
    for (let i = 0; i < arr.length; i += ukuranBagian) {
      hasilPotongan.push(arr.slice(i, i + ukuranBagian));
    }
    return hasilPotongan;
  };

  const dataPerBaris = potongArrayJadiBagian(DATA_GAMBARA, 3);

  return (
    <SafeAreaView style={modelna.latara}>
      <ScrollView contentContainerStyle={modelna.kontainera}>
        {dataPerBaris.map((baris, index) => (
          <View key={`baris-${index}`} style={modelna.baris}>
            {baris.map(item => (
              // Setiap sel pembungkus diatur dengan width dan height yang sama.
              <View key={item.pananda} style={[modelna.pembungkusKotaka, { width: ukuranKotaka, height: ukuranKotaka }]}>
                <GambaraInteraktif sumberra={item} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Kumpulan Model (Styling) ---
const modelna = StyleSheet.create({
  latara: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  kontainera: {
    // Kontainer utama untuk scroll view
  },
  baris: {
    flexDirection: 'row',
  },
  pembungkusKotaka: {
    padding: 4, // Memberi sedikit jarak antar gambar
  },
  wadahGambara: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gambara: {
    width: '100%',
    height: '100%',
  },
  tampilanKasala: {
    alignItems: 'center',
    backgroundColor: '#ffdddd',
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
  },
  tulisangKasala: {
    color: '#b00020',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// ----------------------------------BATAS TUGAS 2----------------------------------------