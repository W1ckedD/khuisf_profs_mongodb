import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Context as ProfContext } from '../context/ProfContext';
import { styles } from '../../global/styles';
import List from '../components/elements/List';
import ServerError from '../components/errors/ServerError';
import SearchBar from '../components/elements/SearchBar';

const PartTimeScreen = props => {
    const [term, setTerm] = useState('');
    const { state, getAllProfs } = useContext(ProfContext);
    const { profs, errorMessage } = state;
    useEffect(() => {
        getAllProfs();
    }, []);
    if (errorMessage) {
        return <ServerError />;
    }
    if (profs.length === 0) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator color="gray" size="large" />
            </View>
        );
    }
    const partTimeProfs = profs.filter(prof => prof.position === 'هيأت علمي نیمه وقت');
    const searchedProfs = partTimeProfs.filter(prof =>
        prof.lastName.includes(term.trim())
    );
    return (
        <View style={styles.screen}>
            <SearchBar 
                placeholder="‍جستجو بر اساس نام خانوادگی"
                label="جستجو"
                value={term}
                onChangeText={txt => setTerm(txt)}
            />
            {searchedProfs.length === 0 ? <Text style={styles.title}>پروفایلی یافت نشد!</Text> : null}
            <List data={searchedProfs} />
        </View>
    );
};

export default PartTimeScreen;
