import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  const handleLogin = () => {
    if (role === 'Admin') {
      navigation.navigate('AdminDashboard', { role });
    } else {
      navigation.navigate('UserDashboard', { role });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkButtonText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text } from 'react-native';
// import { login } from '../utils/Api';
// import styles from './styles';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const { token, role } = await login({ email, password });
//       // Store the token securely (e.g., using AsyncStorage)
//       navigation.navigate(role === 'Admin' ? 'AdminDashboard' : 'UserDashboard');
//     } catch (error) {
//       setError(error.message || 'Login failed');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
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
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.linkButtonText}>Don't have an account? Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }