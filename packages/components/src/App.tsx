import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as channelLogos from './Media/channelLogos';

const Multiplier = (props: any) => {
  const result: Array<React.FC> = [];

  for (let i = 0; i < props.amount; i++) {
    result.push(props.component);
  }

  return (
    <View style={props.style}>
      {result.map(r => (r))}
    </View>
  );
};

const AllLogos = () => {
  return (
    <>
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
    </>
  );
};

export function App() {
  return (
    <View style={styles.app}>
    <channelLogos.Qvc style={styles.icon} />
    <channelLogos.Qvc2 style={styles.icon} />
    <channelLogos.Qvc3 style={styles.icon} />
    <channelLogos.Beautyiq style={styles.icon} />
    <channelLogos.Hsn style={styles.icon} />
    <channelLogos.Hsn2 style={styles.icon} />
    <channelLogos.Qvc style={styles.icon} />
    <channelLogos.Qvc2 style={styles.icon} />
    <channelLogos.Qvc3 style={styles.icon} />
    <channelLogos.Beautyiq style={styles.icon} />
    <channelLogos.Hsn style={styles.icon} />
    <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
      <channelLogos.Qvc style={styles.icon} />
      <channelLogos.Qvc2 style={styles.icon} />
      <channelLogos.Qvc3 style={styles.icon} />
      <channelLogos.Beautyiq style={styles.icon} />
      <channelLogos.Hsn style={styles.icon} />
      <channelLogos.Hsn2 style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  icon: {
    height: 30,
    width: 90,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

declare var global: any