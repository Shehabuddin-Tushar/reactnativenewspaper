import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,Pressable,Modal } from 'react-native'
import { Divider,NativeBaseProvider,FlatList,ScrollView,Image,Spinner} from 'native-base';
import Services from '../Services/Services';
import moment from 'moment'
export default function All() {
   const [newsdata,setNewsdata]=useState([]);
   const [modalVisible, setModalVisible] = useState(false);
    useEffect(()=>{
        Services("general")
        .then(data=>{
            setNewsdata(data)
        }).catch(err=>{
            alert(err)
        })
    },[])


  return (
        <NativeBaseProvider>
        <View style={{marginBottom:30}}>
         
            <View style={styles.container}>
                <Text style={styles.text}>All News</Text>
            </View>

           {
               newsdata.length>1?
               <FlatList
                data={newsdata}
                renderItem={({ item }) => (
                    <View>
                        <View style={{marginTop:10}}>
                            <View style={{paddingHorizontal:15,paddingBottom:10}}>
                                <Image
                                    height={200}
                                    width={550}
                                    source={{
                                        uri: item.urlToImage?item.urlToImage : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                                    }}
                                    alt="Alternate Text"
                                />
                             </View> 
                        
                            <View style={styles.myflex}>
                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                        backgroundColor: pressed
                                            ? '#85C1E9'
                                            : 'white'
                                        },
                                        styles.button,styles.buttonOpen
                                    ]}
                                    onPress={() =>setModalVisible(true)}   
                                        
                                            
                                        >
                                            <Text style={styles.title}>{item.title}</Text>
                                </Pressable>
                                <Text style={styles.date}>{moment(item.publishedAt).format('lll')}</Text>
                            </View>
                            <View style={styles.myflex}>
                                
                            </View>
                     {/* modal start */}
                        {/* <Modal
                            animationType="slide"
                        
                            visible={modalVisible}
                            onRequestClose={() => {
                            
                            setModalVisible(!modalVisible);
                            }}
                    
                        
                        >
                            <View>
                                <View style={styles.myflex}>
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                            backgroundColor: pressed
                                                ? '#85C1E9'
                                                : 'white'
                                            },
                                            styles.button,styles.buttonOpen
                                        ]}
                                        onPress={() => setModalVisible(false)}   
                                        >
                                        <Text style={styles.title}>close</Text>
                                        </Pressable>
                                     </View>
                                    </View>    
                                </Modal> */}

                        {/* modal end */}
                            <View style={styles.description}>
                                <Text style={styles.destitle}>{item.description}</Text>
                            </View>
                        </View>
                        <Divider my="2"  bg="gray.300" thickness="10" />
                    </View>     
                    
                )}
                keyExtractor={(item) => item.title}
         />
        :(
            <View style={styles.myspiner}>
               <Spinner color="cyan.500" />
            </View>
           
            )
           } 
            

        </View>
    </NativeBaseProvider>
    )
}

const styles=StyleSheet.create({
   container:{
       alignItems:"center",
       padding:10,
       paddingTop:20,
       backgroundColor:"#e0e0e0",
       borderWidth:1,
       borderColor:"#bdbdbd"
   },
   text:{
       fontSize:24
   },

   myflex:{
   paddingHorizontal:15
    
   },

   title:{
       fontSize:16,
       fontWeight:"bold"
   },
   date:{
       paddingTop:10,
       fontSize:16
   },
   description:{
     padding:15
   },
   destitle:{

   },

   myspiner:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:250
 
    },
    button: {
        
        padding: 10,
        elevation: 5
      },
      buttonOpen: {
        
      }
})