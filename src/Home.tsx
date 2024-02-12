import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Button } from './Button';
import { decrement, increment, selectCount } from './redux/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Counter app</Text>
      <View className="my-5">
        <Button label="Decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Text className="text-3xl">{count}</Text>
      <View className="my-5">
        <Button label="Increment" onPress={() => dispatch(increment())} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
