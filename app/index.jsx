import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import {useGlobalContext} from '../context/GlobalProvider';

export default function App(){
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return(
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle = {{ height: '100%'}}>
        <View className='w-full justify-start items-center min-h-[85vh] px-4'>
          <Image
          source={images.logo}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-black font-bold text-center'>Descover Endless possibilities with{' '}
              <Text className='text-secondary-200'>Moonlight</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-4 -right-5'
              resizeMode='contain'
            />
          </View>
         
          <Text className='text-sm font-pregular text-black-100 mt-7 text-center'>جایی که خلاقیت با نوآوری تلاقی می‌کند:  
          سفری به دنیای بی‌پایان اکتشافات را با مون‌لایت آغاز کنید.
          </Text>
          <CustomButton title="ادامه از طریق ایمیل"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt7" />
        </View>
        
      </ScrollView>
      <StatusBar backgroundColor='#20B2AA' style='dark' />
    </SafeAreaView>
  );
}

