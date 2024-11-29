import { View, Text ,TextInput, TouchableOpacity, Image } from 'react-native'
import React , {useState }from 'react'
import {icons} from '../constants'


const SearchInput = ({title,value,placeholder,handleChangeText,handleFocusAction,otherStyle,...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
      <View className='border-2 border-black-200 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-secondary items-center flex-row 
      space-x-4'>
      <TextInput 
            className='flex-1 text-black font-pregular mt-0.5 text-base' 
            value={value}
            placeholder="جستجوی ویدیو"
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            onFocus={handleFocusAction}
            secureTextEntry={title ==='Password' && !showPassword}            
            />
        <TouchableOpacity>
            <Image source={icons.search} className='w-5 h-5'
            resizeMode='contain'/>
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput