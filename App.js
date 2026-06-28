import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  // 1. State - This is the "Brain" of the app
  const [count, setCount] = useState(0);

  // 2. Logic - Functions to change the count
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PRO TEACHER APP</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.label}>Total Students Logged:</Text>
        
        <View style={styles.counterCircle}>
          <Text style={styles.counterText}>{count}</Text>
        </View>

        {/* Interactive Buttons */}
        <TouchableOpacity style={styles.buttonMain} onPress={increment}>
          <Text style={styles.buttonText}>+ ADD STUDENT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonReset} onPress={reset}>
          <Text style={styles.resetText}>RESET COUNTER</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Termux & Windows 7</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Deep Midnight Blue
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    color: '#38bdf8', // Sky Blue
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    color: '#94a3b8',
    fontSize: 18,
    marginBottom: 20,
  },
  counterCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#38bdf8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    marginBottom: 40,
    elevation: 10, // Shadow for Android
  },
  counterText: {
    color: '#fff',
    fontSize: 72,
    fontWeight: 'bold',
  },
  buttonMain: {
    backgroundColor: '#38bdf8',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonReset: {
    marginTop: 20,
    padding: 10,
  },
  resetText: {
    color: '#ef4444', // Red
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#475569',
    fontSize: 12,
  },
});
