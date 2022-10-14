import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {ProgressChart} from 'react-native-chart-kit';
import theme from '../../assets/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';

const FocusCard = () => {
    const data = {
        data: [0.8]
      };
    
      const chartConfig = {
        backgroundGradientFrom: "#FFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(182, 112, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
        
    };
      
  return (
    <View style={styles.container}>
        <View style={styles.chartContainer}>
            <ProgressChart
                style={{ marginLeft: 15 }}
                data={data}
                width={100}
                height={100}
                strokeWidth={7}
                radius={36}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            <Text style={styles.chartText}>Focus {"\n"} Area</Text>
        </View>
        <Text style={{color: theme.primaryColor, fontSize: wp('4%'), fontFamily: fonts.regular, marginVertical: 20 }}>Your wellbeing focus is</Text>
        <Text style={{color: theme.primaryColor, fontSize: wp('8%'), fontFamily: fonts.bold, marginVertical: 0 }}>Social Connection</Text>
        <Text style={{color: theme.primaryColor, fontSize: wp('4.5%'), fontFamily: fonts.regular, marginVertical: 20, borderBottomWidth: 1, borderBottomColor: theme.primaryColor }}>View your latest anser</Text>
    </View>
  )
}

export default FocusCard

const styles = StyleSheet.create({
    container: {
        width: '92%',
     backgroundColor: "#F2FBFC",
     alignItems: 'center',
     alignSelf: 'center',
     borderRadius: 8,
     paddingVertical: 10
    },
    chartContainer: {
      justifyContent: 'center', 
      alignItems:'center'
    },
    chartText: {
      position: 'absolute',
      top: 35,
      textAlign: 'center',
      right: 30,
      fontSize: wp('3%'),
      color: theme.backgrounds.darkViolet
    }
})