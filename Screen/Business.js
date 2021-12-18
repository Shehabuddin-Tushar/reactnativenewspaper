import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Divider,NativeBaseProvider,FlatList,Image,Spinner } from 'native-base';
import Services from '../Services/Services';
import moment from 'moment'
export default function Business() {
    const [newsdata,setNewsdata]=useState([]);
    useEffect(()=>{
        Services("business")
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
                    <Text style={styles.text}>Business</Text>
                </View>
            {
               newsdata.length>1?<FlatList
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
                               <Text style={styles.title}>{item.title}</Text>
                               <Text style={styles.date}>{moment(item.publishedAt).format('lll')}</Text>
                           </View>
                           <View style={styles.myflex}>
                               
                           </View>
                          
                           <View style={styles.description}>
                               <Text style={styles.destitle}>{item.description}</Text>
                               
                           </View>
                       </View>
                       <Divider my="2"  bg="gray.300" thickness="10" />
                   </View>     
                   
               )}
               keyExtractor={(item) => item.title}
        />:(
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
    
        paddingHorizontal:20,
        
       },
    
       title:{
           fontSize:16,
           fontWeight:"bold"
       },
       date:{
           fontSize:16,
           paddingTop:10
       },
       description:{
         padding:20
       },
       destitle:{
    
       },
       myspiner:{
           flex:1,
           justifyContent:"center",
           alignItems:"center",
           paddingTop:250
        
       }
 })