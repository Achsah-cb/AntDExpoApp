import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../styles/BasicInfoStyle';
import { WhiteSpace } from '@ant-design/react-native';

const BasicInfoScreen = ({ navigation }) => {
  // Form state variables
  const [hobbies, setHobbies] = useState('');
  const [partnerPreferences, setPartnerPreferences] = useState({
    ageRange: '',
    location: '',
    interests: '',
  });
  const [availability, setAvailability] = useState({ startTime: '', endTime: '' });
  const [profilePhotos, setProfilePhotos] = useState([]);
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState(new Date());
  const [zodiacSign, setZodiacSign] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState(new Date());
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [education, setEducation] = useState('');
  const [livingHistory, setLivingHistory] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    linkedIn: '',
    instagram: '',
    facebook: '',
    website: '',
    other: '',
  });

  // Functions to handle Image Upload
  const handleImageUpload = () => {
    const options = {
      title: 'Select Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setProfilePhotos([...profilePhotos, source]);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hobbies and Interests */}
      <Text style={styles.label}>Hobbies and Interests</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your hobbies and interests"
        value={hobbies}
        onChangeText={setHobbies}
      />

      {/* Partner Preferences */}
      <Text style={styles.label}>Partner Preferences</Text>
      <TextInput
        style={styles.input}
        placeholder="Age Range (e.g., 25-30)"
        value={partnerPreferences.ageRange}
        onChangeText={(value) => setPartnerPreferences({ ...partnerPreferences, ageRange: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferred Location"
        value={partnerPreferences.location}
        onChangeText={(value) => setPartnerPreferences({ ...partnerPreferences, location: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Partner's Interests"
        value={partnerPreferences.interests}
        onChangeText={(value) => setPartnerPreferences({ ...partnerPreferences, interests: value })}
      />

      {/* Availability Timings */}
      <Text style={styles.label}>Availability Timings for Matchmaking</Text>
      <TextInput
        style={styles.input}
        placeholder="Start Time (e.g., 6:00 PM)"
        value={availability.startTime}
        onChangeText={(value) => setAvailability({ ...availability, startTime: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="End Time (e.g., 9:00 PM)"
        value={availability.endTime}
        onChangeText={(value) => setAvailability({ ...availability, endTime: value })}
      />

      {/* Upload Profile Photos */}
      <Text style={styles.label}>Upload Profile Photos</Text>
      <Button title="Upload Photo" onPress={handleImageUpload} />
      <View style={styles.imageContainer}>
        {profilePhotos.map((photo, index) => (
          <Image key={index} source={photo} style={styles.image} />
        ))}
      </View>

      {/* Bio Section */}
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.bioInput}
        placeholder="Write something about yourself"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Astrology Information */}
      <Text style={styles.label}>Astrology Information</Text>
      {/* <Text>Date of Birth</Text>
      <DateTimePicker value={dob} mode="date" display="default" onChange={(event, date) => setDob(date || dob)} />
      <Text>Time of Birth</Text>
      <DateTimePicker value={timeOfBirth} mode="time" display="default" onChange={(event, time) => setTimeOfBirth(time || timeOfBirth)} /> */}
      <TextInput
        style={styles.input}
        placeholder="Zodiac Sign"
        value={zodiacSign}
        onChangeText={setZodiacSign}
      />

      {/* Additional Community-Specific Questions */}
      <Text style={styles.label}>Additional Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Place of Birth"
        value={placeOfBirth}
        onChangeText={setPlaceOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Education Background"
        value={education}
        onChangeText={setEducation}
      />
      <TextInput
        style={styles.input}
        placeholder="Living History"
        value={livingHistory}
        onChangeText={setLivingHistory}
      />
      <TextInput
        style={styles.input}
        placeholder="Current Location"
        value={currentLocation}
        onChangeText={setCurrentLocation}
      />

      {/* Social Media Links */}
      <Text style={styles.label}>Social Media Links</Text>
      <TextInput
        style={styles.input}
        placeholder="LinkedIn"
        value={socialLinks.linkedIn}
        onChangeText={(value) => setSocialLinks({ ...socialLinks, linkedIn: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Instagram"
        value={socialLinks.instagram}
        onChangeText={(value) => setSocialLinks({ ...socialLinks, instagram: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Facebook"
        value={socialLinks.facebook}
        onChangeText={(value) => setSocialLinks({ ...socialLinks, facebook: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Online Website"
        value={socialLinks.website}
        onChangeText={(value) => setSocialLinks({ ...socialLinks, website: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Other Sources"
        value={socialLinks.other}
        onChangeText={(value) => setSocialLinks({ ...socialLinks, other: value })}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={() => Alert.alert('Form Submitted', 'Your preferences have been saved!')} />
        <WhiteSpace />
    </ScrollView>
  );
};

export default BasicInfoScreen;
