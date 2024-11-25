import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather';

const Prescriptions = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    // Dummy report data for demonstration
    const reportData = [
        { Date: '2024-09-29', Type: 'Prescription', Image: 'https://example.com/image.png' },
        { Date: '2024-09-28', Type: 'Lab Report', Image: 'https://example.com/report.pdf' },
    ];

    return (
        <View style={styles.container_bg}>
            <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon} />
                    </TouchableOpacity>
                    <Text style={styles.header_name}>My Reports</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btnRefresh}>
                <Text style={styles.btnUploadText}>
                    <Feather name={'refresh-ccw'} /> Refresh
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload}>
                <Text style={styles.btnUploadText}>{loading ? 'Uploading...' : 'Upload Prescription'}</Text>
            </TouchableOpacity>

            <ScrollView style={{ flex: 1, marginBottom: 70, marginVertical: 8 }}>
                {reportData.length <= 0 ? (
                    <View style={styles.justify_content_center}>
                        <Text style={styles.label}>No Record Found!</Text>
                    </View>
                ) : (
                    reportData.map((r, index) => {
                        // Placeholder logic for differentiating between images and PDFs
                        const isPdf = r.Image.endsWith('.pdf');
                        return (
                            <View key={index} style={styles.reportViewer}>
                                <Text style={styles.reportViewerText}>{r.Date}</Text>
                                <Text style={styles.reportViewerText}>{r.Type}</Text>
                                <TouchableOpacity onPress={() => {}}>
                                    <Image
                                        style={isPdf ? { width: 150, height: 150 } : styles.reportViewerImage}
                                        source={{
                                            uri: isPdf
                                                ? 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Pdf_icon_file.png'
                                                : r.Image,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    })
                )}
            </ScrollView>
        </View>
    );
};

export default Prescriptions;
