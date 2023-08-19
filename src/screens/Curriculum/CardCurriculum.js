// CardComponent.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardComponent = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{title}</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      {isExpanded && (
        <Card style={[styles.card, styles.expandedCard]}>
          <Card.Content>
            <Paragraph>{description}</Paragraph>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    margin: 10,
  },
  expandedCard: {
    marginTop: 10,
  },
});

export default CardComponent;
