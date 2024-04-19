import React, { useState } from "react";
import {
  StyleSheet, Pressable, View, Text
} from 'react-native';

const data = [
  { key: 0, name: 'Daily'},
  { key: 1, name: 'Weekly'},
  { key: 2, name: 'Monthly'},
];


const WeekdayButtonGroup = () => {
  const [sun, setSun] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  return(
    <View style={styles.weekdayView}>
      <Pressable
      style={
        sun ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setSun(!sun)}
      >
        <Text style={
          sun ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Sun
        </Text>
    </Pressable>
    <Pressable
      style={
        mon ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setMon(!mon)}
      >
        <Text style={
          mon ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Mon
        </Text>
    </Pressable>
    <Pressable
      style={
        tue ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setTue(!tue)}
      >
        <Text style={
          tue ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Tue
        </Text>
    </Pressable>
    <Pressable
      style={
        wed ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setWed(!wed)}
      >
        <Text style={
          wed ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Wed
        </Text>
    </Pressable>
    <Pressable
      style={
        thu ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setThu(!thu)}
      >
        <Text style={
          thu ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Thu
        </Text>
    </Pressable>
    <Pressable
      style={
        fri ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setFri(!fri)}
      >
        <Text style={
          fri ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Fri
        </Text>
    </Pressable>
    <Pressable
      style={
        sat ? styles.weekday.selected.pressable :
        styles.weekday.unselected.pressable
      }
      onPress={() => setSat(!sat)}
      >
        <Text style={
          sat ? styles.weekday.selected.text :
          styles.weekday.unselected.text
        }>
          Sat
        </Text>
    </Pressable>
    </View>
)};

const MonthButtonGroup = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [twelve, setTwelve] = useState(false);
  const [thirteen, setThirteen] = useState(false);
  const [fourteen, setFourteen] = useState(false);
  const [fifteen, setFifteen] = useState(false);
  const [sixteen, setSixteen] = useState(false);
  const [seventeen, setSeventeen] = useState(false);
  const [eighteen, setEighteen] = useState(false);
  const [nineteen, setNineteen] = useState(false);
  const [twenty, setTwenty] = useState(false);
  const [twentyone, setTwentyone] = useState(false);
  const [twentytwo, setTwentytwo] = useState(false);
  const [twentythree, setTwentythree] = useState(false);
  const [twentyfour, setTwentyfour] = useState(false);
  const [twentyfive, setTwentyfive] = useState(false);
  const [twentysix, setTwentysix] = useState(false);
  const [twentyseven, setTwentyseven] = useState(false);
  const [twentyeight, setTwentyeight] = useState(false);
  const [twentynine, setTwentynine] = useState(false);
  const [thirty, setThirty] = useState(false);
  const [thirtyone, setThirtyone] = useState(false);
  return(
    <View style={styles.monthView}>
      <View style={styles.monthRowView}>
        <Pressable
          style={
            one ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setOne(!one)}
        >
          <Text style={
            one ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            1
          </Text>
        </Pressable>
        <Pressable
          style={
            two ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwo(!two)}
        >
          <Text style={
            two ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            2
          </Text>
        </Pressable>
        <Pressable
          style={
            three ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setThree(!three)}
        >
          <Text style={
            three ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            3
          </Text>
        </Pressable>
        <Pressable
          style={
            four ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setFour(!four)}
        >
          <Text style={
            four ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            4
          </Text>
        </Pressable>
        <Pressable
          style={
            five ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setFive(!five)}
        >
          <Text style={
            five ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            5
          </Text>
        </Pressable>
        <Pressable
          style={
            six ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setSix(!six)}
        >
          <Text style={
            six ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            6
          </Text>
        </Pressable>
        <Pressable
          style={
            seven ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setSeven(!seven)}
        >
          <Text style={
            seven ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            7
          </Text>
        </Pressable>
      </View>
      <View style={styles.monthRowView}>
        <Pressable
          style={
            eight ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setEight(!eight)}
        >
          <Text style={
            eight ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            8
          </Text>
        </Pressable>
        <Pressable
          style={
            nine ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setNine(!nine)}
        >
          <Text style={
            nine ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            9
          </Text>
        </Pressable>
        <Pressable
          style={
            ten ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTen(!ten)}
        >
          <Text style={
            ten ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            10
          </Text>
        </Pressable>
        <Pressable
          style={
            eleven ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setEleven(!eleven)}
        >
          <Text style={
            eleven ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            11
          </Text>
        </Pressable>
        <Pressable
          style={
            twelve ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwelve(!twelve)}
        >
          <Text style={
            twelve ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            12
          </Text>
        </Pressable>
        <Pressable
          style={
            thirteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setThirteen(!thirteen)}
        >
          <Text style={
            thirteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            13
          </Text>
        </Pressable>
        <Pressable
          style={
            fourteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setFourteen(!fourteen)}
        >
          <Text style={
            fourteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            14
          </Text>
        </Pressable>
      </View>
      <View style={styles.monthRowView}>
        <Pressable
          style={
            fifteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setFifteen(!fifteen)}
        >
          <Text style={
            fifteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            15
          </Text>
        </Pressable>
        <Pressable
          style={
            sixteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setSixteen(!sixteen)}
        >
          <Text style={
            sixteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            16
          </Text>
        </Pressable>
        <Pressable
          style={
            seventeen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setSeventeen(!seventeen)}
        >
          <Text style={
            seventeen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            17
          </Text>
        </Pressable>
        <Pressable
          style={
            eighteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setEighteen(!eighteen)}
        >
          <Text style={
            eighteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            18
          </Text>
        </Pressable>
        <Pressable
          style={
            nineteen ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setNineteen(!nineteen)}
        >
          <Text style={
            nineteen ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            19
          </Text>
        </Pressable>
        <Pressable
          style={
            twenty ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwenty(!twenty)}
        >
          <Text style={
            twenty ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            20
          </Text>
        </Pressable>
        <Pressable
          style={
            twentyone ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentyone(!twentyone)}
        >
          <Text style={
            twentyone ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            21
          </Text>
        </Pressable>
      </View>
      <View style={styles.monthRowView}>
        <Pressable
          style={
            twentytwo ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentytwo(!twentytwo)}
        >
          <Text style={
            twentytwo ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            22
          </Text>
        </Pressable>
        <Pressable
          style={
            twentythree ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentythree(!twentythree)}
        >
          <Text style={
            twentythree ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            23
          </Text>
        </Pressable>
        <Pressable
          style={
            twentyfour ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentyfour(!twentyfour)}
        >
          <Text style={
            twentyfour ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            24
          </Text>
        </Pressable>
        <Pressable
          style={
            twentyfive ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentyfive(!twentyfive)}
        >
          <Text style={
            twentyfive ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            25
          </Text>
        </Pressable>
        <Pressable
          style={
            twentysix ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentysix(!twentysix)}
        >
          <Text style={
            twentysix ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            26
          </Text>
        </Pressable>
        <Pressable
          style={
            twentyseven ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentyseven(!twentyseven)}
        >
          <Text style={
            twentyseven ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            27
          </Text>
        </Pressable>
        <Pressable
          style={
            twentyeight ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentyeight(!twentyeight)}
        >
          <Text style={
            twentyeight ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            28
          </Text>
        </Pressable>
      </View>
      <View style={styles.monthLastRowView}>
        <View style={styles.monthLastRowFirstDivider}/>
        <Pressable
          style={
            twentynine ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setTwentynine(!twentynine)}
        >
          <Text style={
            twentynine ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            29
          </Text>
        </Pressable>
        <View style={styles.monthLastRowSecondDivider}/>
        <Pressable
          style={
            thirty ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setThirty(!thirty)}
        >
          <Text style={
            thirty ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            30
          </Text>
        </Pressable>
        <View style={styles.monthLastRowThirdDivider}/>
        <Pressable
          style={
            thirtyone ? styles.month.selected.pressable :
            styles.month.unselected.pressable
          }
          onPress={() => setThirtyone(!thirtyone)}
        >
          <Text style={
            thirtyone ? styles.month.selected.text :
            styles.month.unselected.text
          }>
            31
          </Text>
        </Pressable>
      </View>
    </View>
  );
}


const FrequencyButtonGroup = () => {
  const [userOption, setUserOption] = useState('Daily');
  return (
    <View style={styles.view}>
    <View style={styles.periodView}>
      {data.map((item, index) => {
        key = index;
        return (
          <View key={index}>
            <Pressable
              style={
                item.name === userOption ? styles.period.selected.pressable :
                styles.period.unselected.pressable
              }
              onPress={() => setUserOption(item.name)}
            >
              <Text style={
                  item.name === userOption ? styles.period.selected.text :
                  styles.period.unselected.text
              }>
                {item.name}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
    <View style={styles.weekdayView}>
      {
        userOption === 'Weekly' ? <WeekdayButtonGroup /> : <View style={styles.weeklySpacer}/>
      }
    </View>
    <View>
      {
        userOption === 'Monthly' ? <MonthButtonGroup /> : null
      }
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
    // backgroundColor: 'red',
  },
  periodView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  weekdayView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  monthView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: -50,
    // backgroundColor: 'red',
  },
  dailySpacer: {
    height: 50,
  },
  weeklySpacer: {
    height: 50,
  },
  monthRowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  monthLastRowView: {
    flexDirection: 'row',
    justifyContent: 'left',
    margin: 5,
  },
  monthLastRowFirstDivider: {
    width: 3,
  },
  monthLastRowSecondDivider: {
    width: 6,
  },
  monthLastRowThirdDivider: {
    width: 5.5,
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  period: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
      },
      text: {
        color: 'black',
        fontSize: 23,
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      margin: 10,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 23,
    },
  }
  },
  weekday: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        margin: 5,
        padding: 5,
        borderRadius: 10,
      },
      text: {
        color: 'black',
        fontSize: 15,
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      margin: 5,
      padding: 5,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 15,
    },
  }},
  month: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        width: 35,
        height: 35,
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      borderRadius: 10,
      width: 35,
      height: 35,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
    },
  }}
});

export default FrequencyButtonGroup;
