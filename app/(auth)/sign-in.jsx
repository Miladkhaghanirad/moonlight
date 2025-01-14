import { StyleSheet, Text, View,ScrollView , Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '@/components/FormField';
import CustomButton  from '../../components/CustomButton'
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit =()=>{}
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='text-2xl text-white font-semibold mt-10 text-semibold'>Log in to moonlight</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form,password: e })}
            otherStyle="mt-7"
          />
            <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})