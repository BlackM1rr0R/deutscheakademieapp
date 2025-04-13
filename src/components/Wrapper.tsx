import React from "react";
import { StyleSheet, View } from "react-native";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "94%",
        margin: "auto",
        backgroundColor: "#fff",
       
    },
});

export default Wrapper;
