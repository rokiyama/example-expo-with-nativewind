import { Text, TouchableOpacity } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity className="p-3 rounded-lg bg-blue-600" onPress={onPress}>
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
};
