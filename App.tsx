import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { WebView } from 'react-native-webview';
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
export default function App() {

  const [Myprogress, setMyprogress] = useState(0);
  const [isLoaded, setisLoaded] = useState(false)

  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
//const javascript='window.alert("test")';

const java="document.querySelectorAll('a').forEach(function(element) {element.target='_self'});document.querySelectorAll('.social_sidebar_internal a').forEach(function(element) {element.target='_blank'});";

const webviewStyle ={marginTop: 20}

    return (
     
<>      

{ 
  !isLoaded ?
  <Progress.Bar 
  style={{ marginTop: 28 }}
  borderWidth={0}
  borderRadius={0}
  color='#944192'
  progress={Myprogress} 
  width={null} 

  />
  :null
}


      <WebView 
      
      containerStyle={[ isLoaded ? webviewStyle :null]}
      source={{ uri: 'https://www.vivehg.com/' }} 
      //injectedJavaScriptBeforeContentLoaded={javascript}
      originWhitelist={['*']}
      startInLoadingState
      injectedJavaScript={java}
      onLoadStart={ () => setisLoaded(false) }
      onLoadEnd={ () => setisLoaded(true) }
      onLoadProgress={({ nativeEvent }) => {
        setMyprogress(nativeEvent.progress);
      }}
      
     
     />
</>
    );
  

}
