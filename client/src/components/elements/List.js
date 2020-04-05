import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = props => {
    return (
        <FlatList
            keyExtractor={item => item._id}
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <ListItem
                    id={item._id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    imageUrl={item.imageUrl}
                    email={item.email}
                    faculty={item.faculty}
                    major={item.major}
                />
            )}
        />
    );
};

export default List;
