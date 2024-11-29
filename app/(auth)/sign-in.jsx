import { StyleSheet, Text, View,ScrollView , Image,Alert} from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '@/components/FormField';
import CustomButton  from '../../components/CustomButton'
import { Link ,router} from 'expo-router'
import {getCurrentUser, signIn} from '../../lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider';
const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async()=>{
    if( !form.email || !form.password){
      Alert.alert('Error' , 'Please fill in all the fields')
    }
    setIsSubmitting(true)
    try {
      await signIn(form.email,form.password);
      // set it to global state...
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);
      Alert.alert("Success", "User signed in successfully");
      router.replace('/home');

    } catch (error) {
      Alert.alert('Error', error.message)
    }
    finally{
      setIsSubmitting(false)
    }

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[60vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
          <Text className='text-2xl text-black font-semibold mt-10 text-semibold'>Log in to Moonlight</Text>
          <FormField
            title="ایمیل"
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e })}
            otherStyle="mt-7"
          />
          <FormField
            title="پسورد"
            value={form.password}
            handleChangeText={(e) => setForm({...form,password: e })}
            otherStyle="mt-7"
          />
            <CustomButton 
            title="ورود به حساب کاربری"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            />

            <View className='justify-center pt-5 flex-row gap-2'>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>ثبت نام کنید</Link>
              <Text className='text-lg text-black-50 font-pregular'>
              حساب کاربری ندارید؟
              </Text>
              

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})