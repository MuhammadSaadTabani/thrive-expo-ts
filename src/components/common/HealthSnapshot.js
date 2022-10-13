import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ProgressChart} from 'react-native-chart-kit';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../assets/colors'
import fonts from '../../assets/fonts';

const HealthSnapshot = ({heading, date}) => {
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
            <View style={styles.textContainer}>
                <Text style={{color: theme.primaryColor, fontSize: wp("5%"), fontFamily: fonts.bold }}>{heading}</Text>
                <Text style={{color: theme.primaryColor, fontSize: wp("4%"), fontFamily: fonts.regular, marginTop: 12, marginBottom: 6 }}>{date}</Text>
                <Text style={{color: theme.primaryColor, fontSize: wp("4%"), fontFamily: fonts.bold, borderBottomColor: theme.primaryColor, borderBottomWidth: 1 }}>View Result</Text>
            </View>
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
        </View>
    )
}

export default HealthSnapshot

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
    borderRadius: 25,
    borderBottomRightRadius: 0,
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
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