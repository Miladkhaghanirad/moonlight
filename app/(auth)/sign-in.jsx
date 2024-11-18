import { StyleSheet, Text, View,ScrollView , Image} from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '@/components/FormField';
import CustomButton  from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = useState({
    email: 'initial@example.com',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit =()=>{}
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='text-2xl text-black font-semibold mt-10 text-semibold'>Log in to Moonlight</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e })}
            otherStyle="mt-7"
            handleFocusAction={(e) => { if (form.email === "initial@example.com") setForm({ ...form, email: "" })}}
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
            isLoading={isSubmitting}
            />

            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-black-50 font-pregular'>
                Dont have an account?
              </Text>
              <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})