import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../providers/AppThemeProvider';

const tabs = [
  { name: 'Preferences', icon: 'settings' },
  { name: 'Help', icon: 'help-circle' },
  { name: 'Themes', icon: 'pen-tool'},
];

export default function Example() {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const [value, setValue] = React.useState(0);
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={[styles.profile, {backgroundColor: backgroundColor}]}>
          <View style={[styles.profileHeader, {backgroundColor: backgroundColor}]}>
            <Image
              alt=""
              source={{
                uri: 'https://lh3.googleusercontent.com/pw/AP1GczOOdQtnh-Hfp5sLzpyQ45hcHBXZVhZ_TUU0StlTCsyxAwtWXgq9_Yg63WFR---w7oRjNVkfEM38OGRYdZSfm1T2Mo8XxA0HeS23zLjfPdyVEl_5lTKMAPaax8w5xDpX57ft6SVnT_0O9zOiwGufIkiW_iNggvgmRpS5bBcIagh5gifo0CAg7esCJ6DCX-txxzWN3e_hBtu_LFOPqrdJ_P9UTMHD-T7k00b3p6gYyOUzQbRfcIvwqHU9MUMjKi8XLzy3T000vtxBbZkMdwOlTgpDZXypyf8SRqTFNuX7otQPWiIvc-tbTB1n5HZx5gqjXuwW6WOVPm8Niiu62sObS3GYMEzxVLX_gNm_gaz9_LjzG_7C0weX8arN9JTOCQB4dQRnBs3L0VFMUDEeHRmO7sBSfxqgIIxSZFv3U9b9BJJA5nXeIvHynIlbllwgtVVEj0QA8WfhKv3H-8qSAfXWIL6xiVpJeoDp8WWdQHMT7vV9rXfAdLEnnfJKGxvEzWT9Ww2xgrR8oGIohqMPk2MP43A2sQa1rOlaS13hbirweFjyGJCrQIMyArf9Th-mubiAHTdDsCkVc4zfSb8WTaizwn_54x98hjyzPjAlCbwECcT8JE1XItRfaTcK88UXD_fA5i2wA39X62OluOuhiJildKPnn6OuDx3SNLnoSnfe7BoFHlc5DQgJQ2Ne09v-NXyCPd_kZzzhTb2AnfbWgEuKn7PRLksab5UF-8KYDSYPZ443iR_ylqrsLhCkgrM4x1KLSp-2GbVHsNEtODo0wHsOglw30SsTtQxQyg3557PXLgQggwHTZpTM_kPGnIZUTHPITycHlALRcEnyCk-LZd0F--MbIOSP_6N6bSCKZDHD-66Tm7r7WHbiKYIQ_3RE4Hqo9coZfJfpwz9yDUhkZx--nGg6xQ=w521-h928-s-no-gm?authuser=0',
              }}
              style={styles.profileAvatar} />

            <View>
              <Text style={styles.profileName}>John Doe</Text>

              <Text style={styles.profileHandle}>@john.doe</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={[styles.profileAction, {backgroundColor: containerColor}]}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          {tabs.map(({ name, icon }, index) => {
            const isActive = index === value;

            return (
              <View
                key={name}
                style={[
                  styles.tabWrapper,
                  isActive && { borderBottomColor: highlightColor },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    setValue(index);
                  }}>
                  <View style={[styles.tab, {backgroundColor: containerColor}]}>
                    <FeatherIcon
                      color={isActive ? highlightColor : '#6b7280'}
                      name={icon}
                      size={16} />

                    <Text
                      style={[
                        styles.tabText,
                        isActive && { color: highlightColor },
                      ]}>
                      {name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {value === 0 && (
          <ScrollView>
            <View style={styles.section}>
              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Language</Text>

                    <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>English</Text>

                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Location</Text>

                    <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>Los Angeles, CA</Text>

                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>Email Notifications</Text>

                    <View style={styles.rowSpacer} />

                    <Switch
                      onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                      }
                      style={{
                        transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                      }}
                      value={form.emailNotifications} />
                  </View>
                </View>

                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>Push Notifications</Text>

                    <View style={styles.rowSpacer} />

                    <Switch
                      onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                      }
                      style={{
                        transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                      }}
                      value={form.pushNotifications} />
                  </View>
                </View>
              </View>
            </View>

          </ScrollView>
        )}
        {value === 1 && (
        <View style={styles.section}>
          <View style={[styles.sectionBody, {backgroundColor: highlightColor}]}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <Text style={styles.rowLabel}>Contact Us</Text>

                <View style={styles.rowSpacer} />

                <FeatherIcon
                  color="#C6C6C6"
                  name="chevron-right"
                  size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Report Bug</Text>

                <View style={styles.rowSpacer} />

                <FeatherIcon
                  color="#C6C6C6"
                  name="chevron-right"
                  size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Rate in App Store</Text>

                <View style={styles.rowSpacer} />

                <FeatherIcon
                  color="#C6C6C6"
                  name="chevron-right"
                  size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Terms and Privacy</Text>

                <View style={styles.rowSpacer} />

                <FeatherIcon
                  color="#C6C6C6"
                  name="chevron-right"
                  size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  tabs: {
    flexDirection: 'row',
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  /** Profile */
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: 'white',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Tab */
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
    marginTop: -20
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  /** Section */
  section: {
    marginTop: 12,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    paddingLeft: 24,
  },
  sectionTitle: {
    marginTop: 0,
    marginHorizontal: 24,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 44,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    marginRight: 4,
  },
});
