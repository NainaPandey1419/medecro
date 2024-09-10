import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleRegister = () => {
    if (role === 'Admin') {
      navigation.navigate('AdminDashboard', { role });
    } else {
      navigation.navigate('UserDashboard', { role });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={styles.gray}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={styles.gray}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={styles.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.picker}>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={{color: styles.darkBlue}}
        >
          <Picker.Item label="User" value="User" />
          <Picker.Item label="Admin" value="Admin" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { register } from '../utils/Api';
// import styles from './styles';

// export default function RegisterScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('User');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       await register({ name, email, password, role });
//       alert('Registration successful! Please login.');
//       navigation.navigate('Login');
//     } catch (error) {
//       setError(error.message || 'Registration failed');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor={styles.gray}
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor={styles.gray}
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor={styles.gray}
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <View style={styles.picker}>
//         <Picker
//           selectedValue={role}
//           onValueChange={(itemValue) => setRole(itemValue)}
//           style={{color: styles.darkBlue}}
//         >
//           <Picker.Item label="User" value="User" />
//           <Picker.Item label="Admin" value="Admin" />
//         </Picker>
//       </View>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.linkButtonText}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

