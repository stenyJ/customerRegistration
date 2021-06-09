import React,{useState} from 'react'
import {View, Text,StyleSheet,TextInput, Image, ScrollView} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Picker} from '@react-native-picker/picker'
import {launchCamera} from 'react-native-image-picker';
import { RadioButton, Checkbox} from 'react-native-paper';
import DatePicker from 'react-native-datepicker'


export default function CustomerRegistration ({ navigation }) {

    const [selectedId,setSelectedId] = useState('')
    const [response,setResponse] = useState('');
    const [value,setValue] = useState('')
    const [mobileNumber, setMobileNumber] = useState('');
    const [messengerNumber, setMessengerNumber] = useState('');
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState('');

    const current_date = new Date();

    const [state,setState] = useState({
      id_type:'' , idproof_photo:'' , id_number:'' , partner:'' , partner_custid:'' , business_name:'', establishment_type:'' , establishment_ownership:'' , business_licence_photo:'' , business_establishment_photo:'' , first_name:'' , last_name:'' , gender:'' , dob:current_date , selfie_photo:'' , passport_photo:'' , mobile_no:'' , messenger_no:'' , region:'' , district:'' , country:'' , location:'' , subcountry:'' , parish:'' ,village:'' , landmark:'' , gps:''
    })

    const onChange = (key,val) => {
      setState({
        ...state,
        [key] : val
      })
    }

    const handleChoosePhoto =  (type) => {
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
        launchCamera(options,response => {

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              const uri = response.assets[0].uri
              onChange(type , uri)
              setResponse(response)
            }
          });
    }
    
    const defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
          flex: 1,
          backgroundColor:'#e6e6e6',
        }
      };
    const progressStepsStyle = {
        activeStepIconBorderColor: '#2570e9',
        activeLabelColor: '#000',
        activeStepNumColor: 'white',
        activeStepIconColor: '#2570e9',
        completedStepIconColor: '#a9a9a9',
        completedProgressBarColor: '#a9a9a9',
        completedCheckColor: 'white',
        marginBottom:50
      };

    const buttonTextStyle = {
        color: '#fff',
      };

     const onSubmitSteps = () => {
       navigation.navigate('preview' , state)
      };

      const nxtbtnstyle = {
        backgroundColor:'#2296f3',
        paddingHorizontal:30,
        position:'absolute',
        bottom:70,
        right:-60
      }

      const prevbtnstyle = {
        backgroundColor:'#2296f3',
        paddingHorizontal:30,
        position:'absolute',
        bottom:70,
        left:-60
      }

      const onChangeMessenger = (value) => {
        setMessengerNumber(value)
         if(checked) 
          setMobileNumber(value)
      }

      const onChangeMobile = (value) => {
        setMobileNumber(value)
        if(checked) 
        setMessengerNumber(value)
      }

      const onPresscheck = () => {
        setChecked(!checked) 
        
        if(checked) 
          setMessengerNumber('')
        else
          setMessengerNumber(mobileNumber)
       }


      return(
        <View style={{ flex: 1 }}>
        <ProgressSteps {...progressStepsStyle}>

          <ProgressStep
            label="IDs"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.container}>
              <Text style={styles.heading}>Identity Info</Text>
              <View style={styles.dropdown}>
                <Picker  style={styles.dropdownPicker}
                  selectedValue={state.id_type}
                  onValueChange={(val) => onChange('id_type',val) }>
                  <Picker.Item  label="Select ID Proof Type"  />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker> 
              </View>  
              <View style={styles.imagePicker}>
                <Text style={styles.text}>ID Proof Photo</Text>
                <Icon name="camera" size={25} onPress={() => handleChoosePhoto('idproof_photo')}></Icon>
              </View>
        
              <TextInput style={styles.textInput} placeholder="Enter Id Number" onChangeText={(text) => onChange('id_number', text)}/>
                
              <View style={styles.dropdown}>
                <Picker  style={styles.dropdownPicker}
                  selectedValue={state.partner}
                  onValueChange={(val) => onChange('partner',val) }>
                  <Picker.Item  label="Select Partner"  />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker> 
              </View>
                  
              <TextInput style={styles.textInput} placeholder="Enter Partner CustID" onChangeText={(text) => onChange('partner_custid', text)}/>
            </View>
          </ProgressStep>


          <ProgressStep
            label="Biz Info"
            scrollViewProps={defaultScrollViewProps}
            previousBtnText="Back"
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.container}>
              <Text style={styles.heading}>Biz Info</Text>
              <TextInput style={styles.textInput} placeholder="Enter Business Name" onChangeText={(text) => onChange('business_name', text)}/>
              <View style={styles.dropdown}>
                  <Picker  style={styles.dropdownPicker}
                    selectedValue={state.establishment_type}
                    onValueChange={(val) => onChange('establishment_type',val) }>
                    <Picker.Item  label="Establishment Type"  />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> 
              </View>
              <RadioButton.Group   onValueChange={val => onChange('establishment_ownership',val)} value={value}>
                <Text style={styles.radiobuttonLabel}>Establishment Ownership</Text>
                        <View style={styles.rowAlign}>
                        <Text >Rented</Text>
                        <RadioButton value="rented" />
                        <Text>Owned</Text>
                        <RadioButton value="owned" />
                        </View>
              </RadioButton.Group>
              <View style={styles.imagePicker}>
                <Text style={styles.text}>Business Licence Photo</Text>
                <Icon name="camera" size={25} onPress={() => handleChoosePhoto('business_licence_photo')}></Icon>
              </View>

              <View style={styles.imagePicker}>
                <Text style={styles.text}>Business establishment Photo</Text>
                <Icon name="camera" size={25} onPress={() => handleChoosePhoto('business_establishment_photo')}></Icon>
              </View>
            </View>
          </ProgressStep>


          <ProgressStep
            label="Personal"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.container}>
              <Text style={styles.heading}>Personal Info</Text>
              <TextInput style={styles.textInput} placeholder="Enter First Name" onChangeText={(text) => onChange('first_name', text)}/>
              <TextInput style={styles.textInput} placeholder="Enter Last Name" onChangeText={(text) => onChange('last_name', text)}/>
              <RadioButton.Group   onValueChange={val => onChange('gender' , val)} value={value}>
                <View style={styles.rowAlign}>
                  <Text style={styles.radiobuttonLabel}>Gender</Text>
                  <Text >Male</Text>
                  <RadioButton value="male" />
                  <Text>Female</Text>
                  <RadioButton value="female" />
                </View>
              </RadioButton.Group>
              <View style={styles.rowAlign}>
                <Text>DOB</Text>
                  <DatePicker
                    style={{width:180}}
                    date={state.dob}
                    mode="date"
                    placeholder="Select date"
                    format="DD/MMM/YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        right: 0,
                      },
                      dateInput: {
                        marginLeft:10
                      },
                      placeholderText : {
                        fontSize:15,  
                      }
                    }}
                    onDateChange={(dob) => onChange('dob',dob)}
                  />
              </View>
              <View style={styles.imagePicker}>
                <Text style={styles.text}>Selfie Photo</Text>
                <Icon name="camera" size={25} onPress={() => handleChoosePhoto('selfie_photo')}></Icon>
              </View>
              <View style={styles.imagePicker}>
                <Text style={styles.text}>Passport Photo</Text>
                <Icon name="camera" size={25} onPress={() => handleChoosePhoto('passport_photo')}></Icon>
              </View>
            </View>
          </ProgressStep>


          <ProgressStep
            label="Contact"
            scrollViewProps={defaultScrollViewProps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.container}>
              <Text style={styles.heading}>Contact Info</Text>
              <TextInput 
                style={styles.textInput} 
                value ={mobileNumber}
                onChangeText = {value => onChangeMobile(value)}
                placeholder="Enter Mobile Number"/>
              <TextInput 
                style={styles.textInput} 
                value= { messengerNumber}
                onChangeText = {value => onChangeMessenger(value)}
                placeholder="Enter Messenger Number"
              />
              <View style={styles.rowAlign}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => onPresscheck()}
                />
                <Text style={styles.text}>Same as Mobile Number</Text>
              </View>
              <Text>{mobileNumber}</Text>
              <Text>{messengerNumber}</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Address"
            scrollViewProps={defaultScrollViewProps}
            onSubmit={onSubmitSteps}
            nextBtnStyle={nxtbtnstyle}
            previousBtnStyle={prevbtnstyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          > 
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.heading}>Address Info</Text>
              <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <View style={styles.address}>
                  <Picker  style={styles.dropdownPicker}
                    selectedValue={state.region}
                    onValueChange={(val) => onChange('region',val) }>
                    <Picker.Item  label="Select Region"  />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> 
                </View>
                <View style={styles.address}>
                  <Picker  style={styles.dropdownPicker}
                    selectedValue={state.district}
                    onValueChange={(val) => onChange('district',val) }>
                    <Picker.Item  label="Select District"  />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> 
                </View>
                <View style={styles.address}>
                  <Picker  style={styles.dropdownPicker}
                    selectedValue={state.country}
                    onValueChange={(val) => onChange('country',val) }>
                    <Picker.Item  label="Select Country"  />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> 
                </View>
                <View style={styles.address}>
                  <Picker  style={styles.dropdownPicker}
                    selectedValue={state.location}
                    onValueChange={(val) => onChange('location',val) }>
                    <Picker.Item  label="Select Location"  />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> 
                </View>
                <TextInput style={styles.address} placeholder="Enter Sub Country" onChangeText={(text) => onChange('subcountry', text)}/>
                <TextInput style={styles.address} placeholder="Enter Parish" onChangeText={(text) => onChange('parish', text)}/>
                <TextInput style={styles.address} placeholder="Enter Village" onChangeText={(text) => onChange('village', text)}/>
                <TextInput style={styles.address} placeholder="Enter Landmark" onChangeText={(text) => onChange('landmark', text)}/>
              </View>
              <View style={styles.rowAlign}>
                <Text style={styles.text}>GPS Location</Text>
                <Icon name="map-marker" size={30} onPress={() => alert('map')}></Icon>
              </View>
              <Text>{state.landmark}</Text>
            </View>
          </ScrollView>
        </ProgressStep>
      </ProgressSteps>
      </View>
     
    )
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:70
  },
    heading: {
        fontSize:25,
       marginTop:20
    },
    textInput: {
      width:230,
      borderBottomWidth: 1,
      fontSize:16,
    },
    dropdown: {
      borderBottomWidth: 1,
      width:230
    },
    dropdownPicker: {
      color:'#8b8b8b'
    },
    imagePicker: {
      flexDirection:'row'
    },
    text: {
      fontSize:16,
      marginRight:30,
      alignItems:'center'
    },
    rowAlign: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:10
    },
    radiobuttonLabel: {
      fontSize:16,
      padding:10
    },
    address: {
      borderBottomWidth:1,
      width:160,
      marginHorizontal:'2%',
      marginVertical:10,
      fontSize:15
    },
})