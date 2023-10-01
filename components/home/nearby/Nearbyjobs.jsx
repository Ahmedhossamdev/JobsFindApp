import {View, Text, TouchableOpacity , ActivityIndicator} from 'react-native';
import styles from './nearbyjobs.style';
import {COLORS, SIZES} from '../../../constants';
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import useFetch from '../../../hook/useFetch';
import {useRouter} from "expo-router";


const Nearbyjobs = () => {

    const router = useRouter();
    let options = {
        query: 'unreal engine developer',
        num_pages: 1,
    }
    const {data, isLoading, error} = useFetch('search', options);

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    // React built-in spanner that will show us we are reloading...
                    <ActivityIndicator size="large" colors={COLORS.primary}/>
                ) : error ? (
                    <Text>Something Want Wrong!</Text>
                ) : (
                    data?.map((job)=> (
                       <NearbyJobCard
                         job={job}
                         key={`nearby-job-${job?.job_id}`}
                         handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                       />
                   ))
                )}
            </View>
        </View>
    )
}

export default Nearbyjobs;