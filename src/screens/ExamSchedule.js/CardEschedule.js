import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Colors from '../../Color';

const CardEschedule = ({title, description}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Extracting Mark Status from the description
  const markStatusMatch = description.match(/Mark Status: ([^\n]+)/);
  const markStatus = markStatusMatch ? markStatusMatch[1] : 'Unknown'; // Provide a default value if not found

  return (
    <View style={styles.cardContainer}>
      <TouchableWithoutFeedback onPress={toggleExpansion}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
      {isExpanded && (
        <Card style={[styles.card, styles.expandedCard]}>
          <Card.Content style={styles.descriptionContainer}>
            {description.split('\n').map((line, index) => (
              <Paragraph
                style={[
                  styles.description,
                  markStatus === 'Present'
                    ? styles.greenText
                    : markStatus === 'Absent'
                    ? styles.redText
                    : null,
                ]}
                key={index}>
                {line}
              </Paragraph>
            ))}
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    backgroundColor: '#E3E3E3',
    height: 'auto',
  },
  card: {
    margin: 10,
    backgroundColor: 'white',
  },
  expandedCard: {
    marginTop: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  description: {
    marginBottom: 5,
    color: 'grey',
    fontSize: 17,
    fontWeight: '500',
  },
  redText: {
    color: 'red', // Change the color to red for absent mark status
  },
  greenText: {
    color: 'green', // Change the color to green for present mark status
  },
});

export default CardEschedule;
