import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const GlobalModal = ({ visible, onClose }:any) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer} pointerEvents="box-none">
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {visible ? "Are you sure to enable this service?" : "Are you sure to disable this service?"}
            </Text>
            <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>

            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0,0,0,0.5)",
    height:"30%"
  },
  modalContent: {
    width: 300,
    height: 200,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color:"#fff"
  },
});

export default GlobalModal;
