import React, { useState, useCallback, memo } from 'react';
import { StyleSheet, Text, View, Pressable, StatusBar, SafeAreaView, Alert, Platform } from 'react-native';

// Theme / constants
const COLORS = {
  background: '#0f172a', // Deep Midnight Blue
  surface: '#1e293b',
  accent: '#38bdf8', // Sky Blue
  muted: '#94a3b8',
  danger: '#ef4444',
  footer: '#475569',
  textOnAccent: '#0f172a',
  white: '#ffffff',
};

// Small presentational components kept in the same file for simplicity
const Header = memo(function Header() {
  return (
    <View style={styles.header} accessibilityRole="header">
      <Text style={styles.headerTitle} allowFontScaling>
        PRO TEACHER APP
      </Text>
    </View>
  );
});

const CounterCircle = memo(function CounterCircle({ count }) {
  return (
    <View style={styles.counterCircle} accessible accessibilityRole="image" accessibilityLabel={`Students count: ${count}`}>
      <Text style={styles.counterText} allowFontScaling accessibilityLiveRegion="polite">{count}</Text>
    </View>
  );
});

const Footer = memo(function Footer() {
  return (
    <View style={styles.footer} accessibilityRole="contentinfo">
      <Text style={styles.footerText} allowFontScaling>Powered by MyTeacherApp</Text>
    </View>
  );
});

export default function App() {
  // State
  const [count, setCount] = useState(0);

  // Handlers (use callbacks and functional updates)
  const increment = useCallback(() => setCount(c => c + 1), []);

  const confirmReset = useCallback(() => {
    Alert.alert(
      'Reset counter',
      'Are you sure you want to reset the student counter?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', style: 'destructive', onPress: () => setCount(0) },
      ],
      { cancelable: true }
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.content}>
        <Text style={styles.label} allowFontScaling>Total Students Logged:</Text>

        <CounterCircle count={count} />

        <Pressable
          onPress={increment}
          style={({ pressed }) => [styles.buttonMain, pressed && styles.buttonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Add student"
        >
          <Text style={styles.buttonText} allowFontScaling>+ ADD STUDENT</Text>
        </Pressable>

        <Pressable
          onPress={confirmReset}
          style={({ pressed }) => [styles.buttonReset, pressed && styles.buttonPressedReset]}
          accessibilityRole="button"
          accessibilityLabel="Reset counter"
        >
          <Text style={styles.resetText} allowFontScaling>RESET COUNTER</Text>
        </Pressable>
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    color: COLORS.accent,
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
    color: COLORS.muted,
    fontSize: 18,
    marginBottom: 20,
  },
  counterCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    marginBottom: 40,
    // Platform specific shadow/elevation
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  counterText: {
    color: COLORS.white,
    fontSize: 72,
    fontWeight: 'bold',
  },
  buttonMain: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
    minWidth: 220,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: COLORS.textOnAccent,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonReset: {
    marginTop: 20,
    padding: 10,
  },
  buttonPressedReset: {
    opacity: 0.7,
  },
  resetText: {
    color: COLORS.danger,
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.footer,
    fontSize: 12,
  },
});
