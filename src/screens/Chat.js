import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, Platform } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import styles, { MAIN_COLOR } from '../componentts/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat';

const ImageLink = "https://example.com/"; // Replace with the actual link for your images

const Chat = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // Add some dummy data to simulate conversation
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello! How can I assist you today?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Customer Support',
                    avatar: ImageLink + 'Customer/default_avatar.png',
                },
            },
        ]);
    }, []);

    // Handle sending messages
    const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    }, []);

    return (
        <View style={[styles.container, { paddingHorizontal: 0 }]}>
            {loading && (
                <View style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1, backgroundColor: "rgba(0,0,0,0.2)", justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={MAIN_COLOR} size={"large"} />
                </View>
            )}

            <View style={styles.chat_header}>
                <TouchableOpacity style={styles.chat_btn_back} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View>
                    <Image
                        source={route.params.image ? { uri: ImageLink + "Customer/" + route.params.image } : require('../../assets/images/chat_profile.png')}
                        style={styles.chat_user_image}
                    />
                </View>
                <View style={styles.chat_user_detail}>
                    <Text style={[styles.user_name, { color: "#000" }]}>{route.params.name}</Text>
                    <Text style={styles.user_message}>Online</Text>
                </View>
                <TouchableOpacity onPress={() => { /* Add phone call logic */ }}>
                    <Feather name="phone" size={24} color={MAIN_COLOR} />
                </TouchableOpacity>
            </View>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: "d" + route.params.sender,
                    avatar: ImageLink + "Doctor/" + route.params.avatar,
                }}
                alwaysShowSend={true}
                renderFooter={() => {
                    return <View style={{ marginBottom: 50 }} />;
                }}
                showUserAvatar={true}
                showAvatarForEveryMessage={false}
                renderComposer={(props) => {
                    return (
                        <View style={styles.chat_input_container}>
                            <TextInput
                                value={props.text}
                                onChangeText={props.onTextChanged}
                                placeholder={'Message'}
                                style={styles.chat_input}
                            />
                            <TouchableOpacity style={styles.chat_btn_file}>
                                <EvilIcons name="paperclip" size={24} color="#999" />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                renderSend={(props) => {
                    return (
                        <Send {...props} containerStyle={styles.btn_send_message}>
                            <MaterialCommunityIcons name="send" size={20} color="#fff" />
                        </Send>
                    );
                }}
                renderInputToolbar={props => {
                    return (
                        <InputToolbar
                            {...props}
                            containerStyle={{
                                backgroundColor: "#fff",
                                height: Platform.OS === "ios" ? 100 : 80,
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderWidth: 0,
                                borderColor: "#fff",
                                paddingHorizontal: 20,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 8,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default Chat;
