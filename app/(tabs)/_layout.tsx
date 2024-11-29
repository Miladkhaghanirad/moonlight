import React from 'react'
import { Tabs , Redirect} from 'expo-router'
import { Image, View ,Text } from 'react-native'
import {icons } from '../../constants';

const TabIcon = ({icon , color,name,focused}) => {
    return (
        <View className='items-center justify-center gap-2 pb-0'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            {/* change the color of font and type in focsued and unfocused mode */}
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-center`} style={{color:color , width: 60}}>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
                paddingTop: 5,
            }
        }}
      >
        <Tabs.Screen
            name='home'
            options={
                {
                    title: 'خانه',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon 
                        icon={icons.home}
                        color={color}
                        name="خانه"
                        focused={focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name='bookmark'
            options={
                {
                    title: 'نشانه گذاری',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon 
                        icon={icons.bookmark}
                        color={color}
                        name="نشانه گذاری"
                        focused={focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name='create'
            options={
                {
                    title: 'ایجاد',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon 
                        icon={icons.plus}
                        color={color}
                        name="ایجاد"
                        focused={focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name='profile'
            options={
                {
                    title: 'حساب کاربری',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon 
                        icon={icons.profile}
                        color={color}
                        name= 'حساب کاربری'
                        focused={focused}
                        />
                    )
                }
            }
        />
      </Tabs>
    </>
  )
}

export default TabsLayout