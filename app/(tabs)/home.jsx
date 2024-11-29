import { View, Text, FlatList , Image , RefreshControl,Alert} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchInput, {Search} from '../../components/SearchInput'
import VideoCard from '@/components/VideoCard'
import  Trending  from '@/components/Trending'
import EmptyState from "../../components/EmptyState"
import { useState } from 'react'
import { getAllPosts, getLatestPosts } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
const Home = () => {
  const { data: posts ,refetch} =useAppwrite(getAllPosts)
  const { data: latestPosts } =useAppwrite(getLatestPosts)
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async() =>{
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <VideoCard video={item}/>
        )}
        
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-end flex-row-reverse mb-6">
              <View>
                <Text className='font-pmedium text-sm text-black-100'>خوش آمدید</Text>
                <Text className='text-2xl font-psemibold text-black'>مون لایت</Text>
              </View>
              <View className='mt-1.5'>
                <Image 
                source={images.logoSmall}
                className='w-9 h-10'
                resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className='w-full flex-1 pt-5 pb-8 '>
              <Text className='text-gray-950 text-lg font-pregular mb-3 text-right'>
                 آخرین ویدیوها 
              </Text>

              <Trending posts={latestPosts ?? []} />

            </View>
          </View>
  )}
    ListEmptyComponent={() => (
      <EmptyState 
      title="No Videos Found"
      subtitle="Be the first one to upload a video"
      
      />
    )}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home