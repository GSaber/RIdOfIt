import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Login Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontWeight: "bold" }}>Sign In</Text>
            <View style={{ padding: 10, gap: 10 }}>
              <TextInput placeholder="Email" style={{ padding: 5 }} />
              <TextInput placeholder="Password" style={{ padding: 5 }} />
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Button title="Login" />
              <Button
                title="Close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* WelcomeScreen Content */}
      <Text>RId Of It</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable style={styles.button}>
          <Text
            style={{ color: "white" }}
            onPress={() => setModalVisible(true)}>
            Login
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{ color: "white" }}>Register</Text>
        </Pressable>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 100,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
});

export default WelcomeScreen;
