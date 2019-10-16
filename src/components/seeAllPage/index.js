/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const {height, width} = Dimensions.get('window');

// class SeeAllPage extends Component {
const SeeAllList = ({trend, mediaType}) => {
  return (
    <FlatList
      data={trend}
      renderItem={({item}) => {
        return <SeeAllCard data={item} mediaType={mediaType} />;
      }}
      numColumns={2}
      keyExtractor={(item, index) => index}
    />
  );
};

const SeeAllCard = ({data, mediaType}) => {
  const {poster_path, title, id, name, profile_path} = data;
  const newTitle = title ? title : name;
  const uri = poster_path ? poster_path : profile_path;
  return (
    <TouchableOpacity
      key={id}
      style={{
        borderColor: 'transparent',
        borderWidth: 1,
      }}
      onPress={() =>
        Actions.DetailPage({data, from: Actions.currentScene, mediaType})
      }
      useForeground={true}>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${uri}`,
          }}
          style={{
            width: width / 2 - 4,
            maxWidth: 200,
            height: 250,
            flexWrap: 'wrap',
          }}
          progressiveRenderingEnabled={true}
        />
        <View
          style={{
            width: width / 2 - 4,
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 10,
            backgroundColor: '#00060880',
          }}>
          <Text style={{color: '#FFFFFF'}}>{newTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SeeAllPage = ({mediaData, mediaType}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <SeeAllList trend={mediaData} mediaType={mediaType} />
    </View>
  );
};

export default SeeAllPage;
