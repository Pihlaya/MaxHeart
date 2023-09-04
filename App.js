import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
   // Tila-muuttujat iän ja sydämen sykkeen rajojen tallentamiseksi
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

   // Funktio sydämen sykerajojen laskemiseksi iän perusteella
  const calculateHeartRateLimits = (ageInput) => {
    if (ageInput !== '') {
      const ageNumber = parseFloat(ageInput);
      // Laske alempi ja ylempi sydämen sykeväli iän perusteella
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
         // Päivitä tila-muuttujat lasketuilla rajoilla
      setLowerLimit(lower.toString());
      setUpperLimit(upper.toString());
    } else {
 // Jos ikäkenttä on tyhjä, tyhjennä sydämen sykerajat
 
      setLowerLimit('');
      setUpperLimit('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Text label */}
      <Text>Enter your age:</Text>
      {/* TextInput  */}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          // Päivitä ikä-tila ja laske sydämen sykerajat tekstin muuttuessa
          setAge(text);
          calculateHeartRateLimits(text);
        }}
        value={age}
        keyboardType="numeric" // Aseta näppäimistö numeroksi
      />
      {}
      <Text>Lower Heart Rate Limit: {lowerLimit}</Text>
      {}
      <Text>Upper Heart Rate Limit: {upperLimit}</Text>
      {}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
   // Tyylit container-näkymälle
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   // Tyylit syöttökentälle
  input: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
