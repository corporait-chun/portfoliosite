'use client';

import { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

interface PDFData {
  name: string;
  skills: string;
  experience: string;
}

const PDFDocument = ({ data }: { data: PDFData }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadFont = async () => {
      try {
        Font.register({
          family: 'Noto Sans JP',
          fonts: [
            {
              src: '/fonts/NotoSansJP-Regular.ttf',
              fontWeight: 'normal',
            },
            {
              src: '/fonts/NotoSansJP-Bold.ttf',
              fontWeight: 'bold',
            },
          ],
        });
        setIsFontLoaded(true);
      } catch (error) {
        console.error('フォントの読み込みに失敗しました:', error);
      }
    };

    loadFont();
  }, [isClient]);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30,
      fontFamily: 'Noto Sans JP',
      color: '#000000',
    },
    section: {
      margin: 10,
      padding: 10,
      fontFamily: 'Noto Sans JP',
      color: '#000000',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontFamily: 'Noto Sans JP',
      fontWeight: 'bold',
      color: '#000000',
    },
    text: {
      fontSize: 12,
      marginBottom: 10,
      fontFamily: 'Noto Sans JP',
      fontWeight: 'normal',
      color: '#000000',
    },
  });

  if (!isClient || !isFontLoaded) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.text}>読み込み中...</Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>ポートフォリオ</Text>
          <Text style={styles.text}>名前: {data.name}</Text>
          <Text style={styles.text}>スキル: {data.skills}</Text>
          <Text style={styles.text}>経験年数: {data.experience}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument; 