import React from 'react'
import {View, ScrollView, Text , StyleSheet} from 'react-native'

export default function PreviewScreen ({ route }) {

    const details = route.params;

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.detailList}>
                    <Text style={styles.tittle}>IDs</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>ID Number</Text>
                            <Text style={styles.contentTextKey}>Partner</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}> </Text>
                            <Text style={styles.contentTextValue}> </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
                    <Text style={styles.tittle}>Biz Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Biz Name</Text>
                            <Text style={styles.contentTextKey}>Establishment Type</Text>
                            <Text style={styles.contentTextKey}>Ownership</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
                    <Text style={styles.tittle}>Personal Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>First Name</Text>
                            <Text style={styles.contentTextKey}>Last Name</Text>
                            <Text style={styles.contentTextKey}>Gender</Text>
                            <Text style={styles.contentTextKey}>DOB</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
                    <Text style={styles.tittle}>Contact Info</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Mobile Number</Text>
                            <Text style={styles.contentTextKey}>Messenger Number</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.contentTextValue}></Text>

                            </View>




                            <Text style={styles.contentTextValue}></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailList}>
                    <Text style={styles.tittle}>Location</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <Text style={styles.contentTextKey}>Region</Text>
                            <Text style={styles.contentTextKey}>District</Text>
                            <Text style={styles.contentTextKey}>Country</Text>
                            <Text style={styles.contentTextKey}>Location</Text>
                            <Text style={styles.contentTextKey}>Sub Country</Text>
                            <Text style={styles.contentTextKey}>Parish</Text>
                            <Text style={styles.contentTextKey}>Village</Text>
                            <Text style={styles.contentTextKey}>Landmark</Text>
                        </View>
                        <View>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.colon}>:</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                            <Text style={styles.contentTextValue}></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
    },
    contentContainer: {
        flexDirection: 'row',
    },
    content: {
        flex: 1,
    },
    contentTextKey: {
        marginLeft: 50,
        fontWeight: 'bold'
    },
    contentTextValue: {
        marginLeft: 50,
        fontWeight: 'bold'
    },
    colon: {
        fontWeight: 'bold'
    }
})