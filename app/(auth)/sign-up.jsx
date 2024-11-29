import { StyleSheet, Text, View,ScrollView , Image, Alert} from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '@/components/FormField';
import CustomButton  from '../../components/CustomButton'
import { Link,router } from 'expo-router'
import {createUser} from '../../lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider';
const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async()=>{
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error' , 'Please fill in all the fields')
    }
    setIsSubmitting(true)
    try {
      const result = await createUser(form.email,form.password,form.username);
      // set it to global state...
      setUser(result);
      setIsLogged(true);
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
          <Text className='text-2xl text-black font-semibold mt-10 text-semibold'>برای عضویت در مون‌لایت ثبت‌نام کنید</Text>
          <FormField
            title="نام کاربری"
            value={form.username}
            handleChangeText={(e) => setForm({...form,username: e })}
            otherStyle="mt-10"
          />
          <FormField
            title="ایمیل"
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
            handleFocusAction={(e) => { if (form.email === "initial@example.com") setForm({ ...form, email: "" })}}
          />
          <FormField
            title="پسورد"
            value={form.password}
            handleChangeText={(e) => setForm({...form,password: e })}
            otherStyle="mt-7"
          />
            <CustomButton 
            title="ثبت نام"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            />

            <View className='justify-center pt-5 flex-row gap-2'>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>وارد شوید</Link>
              <Text className='text-lg text-black-50 font-pregular'>
              قبلاً حساب کاربری دارید؟
              </Text>
              

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})