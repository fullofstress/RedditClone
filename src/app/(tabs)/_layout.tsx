import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'black'
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'Home',
                    headerTitle: 'Reddit',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }} 
            />
            <Tabs.Screen 
                name="chat" 
                options={{ title: 'Chat',
                    headerTitle: 'Chat',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color={color} />,
                }} 
            />
            <Tabs.Screen 
                name="communities" 
                options={{ title: 'Communities',
                    headerTitle: 'Communities',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({ color }) => <AntDesign name="team" size={24} color={color} />,
                }} 
            />
            <Tabs.Screen 
                name="create" 
                options={{ title: 'Create',
                    headerTitle: 'Create',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({ color }) => <AntDesign name="plus" size={24} color={color} />,
                }} 
            />
            <Tabs.Screen 
                name="inbox" 
                options={{ title: 'Inbox',
                    headerTitle: 'Inbox',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />,
                }} 
            />
        </Tabs>
    )
}