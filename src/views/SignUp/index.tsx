// import React, { useEffect, useRef, useState } from "react";
// import { ActivityIndicator, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
// import styles from "./Style/Style";
// import { FlatListProps } from "react-native";
// import InputText from "../../Component/InputText/InputText";
// const Index: React.FC<{}> = () => {
//   const [Data, setData] = useState<any>();
//   const [sendData, setSendDataStatus] = useState<boolean>(false);
//   const [modalView, setModalViewStatus] = useState<boolean>(false);
//   const [id, setId] = useState<number>();
//   const [isLoader,setIsLoader]=useState<boolean>(false);
//   const Details = {
//     email: useRef(''),
//     name: useRef(''),
//     gender: useRef(''),
//     status: useRef(''),
//   }

//   const updateDetails = {
//     email: useRef(''),
//     name: useRef(''),
//     gender: useRef(''),
//     status: useRef(''),
//   }

//   const DataToSent = {
//     "email": Details.email.current,
//     "name": Details.name.current,
//     "gender": Details.gender.current,
//     "status": Details.status.current,
//   }

//   const url = "https://gorest.co.in/public/v2/users";

//   const getAPIData = async () => {
//     try {
//       setIsLoader(true);
//       const response = await fetch(url,
//         {
//           method: 'GET',
//           // body: JSON.stringify(data),
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
//           }
//         });

        
//         if(response.status==200){
//        setIsLoader(false);
//         };
//       const json = await response.json();

//       setData(json);

//       console.log("Getting Data::", json);
//     } catch (error) {
//       setIsLoader(false);
//       console.log("error", error);
//     }

//   }





//   const postAPIData = async () => {
//     try {
//       console.log("post data", DataToSent)
//       let result = await fetch(url,
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-type': 'application/json; charset=UTF-8',
//             'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
//           },
//           body: await JSON.stringify({
//             email: Details.email.current,
//             name: Details.name.current,
//             gender: Details.gender.current,
//             status: Details.status.current,
//           })
//         }
//       )
//         .then((response: any) => response.json())
//           getAPIData()
//         .then((json: any) => console.log(json))

//     }
//     catch (error) {
//       console.log("error", error);
//     }

//   }


//   const UpdateApiData = async (id: any) => {
//     try {
      
      
//       await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           name: updateDetails.name.current,
//           email: updateDetails.email.current,
//           gender: updateDetails.gender.current,
//           status: updateDetails.status.current
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//           'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
//         },
//       })
//         .then((response) => response.json())
//            getAPIData()
//         .then((json) => console.log(json));

//     }
//     catch (error) {
//       console.log("Your error is::", error);
//     }
//   }

//   const DeleteUser = async (id: any) => {
//     try {

//       fetch(`https://gorest.co.in/public/v2/users/${id}`, {
//         method: 'DELETE',
//         headers: {
//           // 'Content-type': 'application/json; charset=UTF-8',
//           'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
//         },
        
//       });
//       getAPIData();
//     }
//     catch (error) {

//     }

//   }





//   const renderItem = (item: any) => {
//     // console.log("hii::",item.item);
//     function handleUpdate() {
//       updateDetails.name.current = item.item.name;
//       updateDetails.email.current = item.item.email;
//       updateDetails.status.current = item.item.status;
//       updateDetails.gender.current = item.item.gender;
//       setId(item.item.id);
//       setModalViewStatus(true);


//     }

//     return (
//       <View style={{ margin: 20, backgroundColor: '#5DFFFF56', borderColor: 'black', borderWidth: 1 }}>
//         <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}><Text style={{ fontWeight: '600', fontSize: 16, color: 'black' }}>Email: </Text>{item.item.email}</Text>
//         <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}><Text style={{ fontWeight: '600', fontSize: 16, color: 'black' }}>Name:</Text> {item.item.name}</Text>
//         <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}><Text style={{ fontWeight: '600', fontSize: 16, color: 'black' }}>Gender: </Text>{item.item.gender}</Text>
//         <Text style={{ fontSize: 14, color: 'black', fontWeight: '400' }}><Text style={{ fontWeight: '600', fontSize: 16, color: 'black' }}>Active Status: </Text>{item.item.status}</Text>

//         <View style={{ flexDirection: 'row' }}>
//           <TouchableOpacity style={{ margin: 30, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 100 }} onPress={() => { handleUpdate() }}>
//             <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Edit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ margin: 30, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 100 }} onPress={() => { DeleteUser(item.item.id) }}>
//             <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Delete</Text>
//           </TouchableOpacity>

//         </View>

//       </View>
//     );


//   }

//   return (
//     <View  style={{backgroundColor:'#58F6DF93',height:'100%'}}>
//       <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Learning API</Text>
//       <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 200 }} onPress={getAPIData}>
//         <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Get Data of API</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 200 }} onPress={() => { setSendDataStatus(true); }}>
//         <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Send Data of API</Text>
//       </TouchableOpacity>

//       {
//         sendData ?
//           <View style={{ borderWidth: 2, borderColor: 'black', margin: 5, borderRadius: 15 }}>
//             <View style={[styles.inputbox]}>

//               <InputText
//                 placeholder="Enter Email"
//                 ChangeText={(text: any) => {
//                   Details.email.current = text;
//                 }}
//                 keyboardType="default"
//                 secureText={false}
//                 maxLength={20}
//               />
//             </View>
//             <View style={[styles.inputbox]}>

//               <InputText
//                 placeholder="Enter Name"
//                 ChangeText={(text: any) => {
//                   Details.name.current = text;
//                 }}
//                 keyboardType="default"
//                 secureText={false}
//                 maxLength={20}
//               />
//             </View>
//             <View style={[styles.inputbox]}>

//               <InputText
//                 placeholder="Enter Gender"
//                 ChangeText={(text: any) => {
//                   Details.gender.current = text;
//                 }}
//                 keyboardType="default"
//                 secureText={false}
//                 maxLength={20}
//               />
//             </View>
//             <View style={[styles.inputbox]}>

//               <InputText
//                 placeholder="Enter Status"
//                 ChangeText={(text: any) => {
//                   Details.status.current = text;
//                 }}
//                 keyboardType="default"
//                 secureText={false}
//                 maxLength={500}
//               />
//             </View>

//             <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 16, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 200 }} onPress={() => { postAPIData(); setSendDataStatus(false) }}>
//               <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Submit</Text>
//             </TouchableOpacity>

//           </View>
//           : null
//       }


//       {Data ? <FlatList
//         data={Data}
//         renderItem={renderItem}
//         style={{ marginTop: 20, borderColor: 'black', backgroundColor: '#FFFFFF', borderWidth: 1, margin: 10, height: 250 }} /> : null}




//       <Modal
//         visible={modalView}

//       >
//         <View style={[styles.inputbox]}>

//           <Text style={styles.modalText}>Your Email:</Text>
//           <TextInput
//             placeholder={updateDetails.email.current}

//             onChangeText={(text: any) => { updateDetails.email.current = text }}
//             style={[styles.modalText, { color: 'black', marginLeft: 5, alignSelf: 'center', marginTop: -16, fontWeight: '400' }]}
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={[styles.inputbox]}>

//           <Text style={styles.modalText}>Your Name:</Text>
//           <TextInput
//             placeholder={updateDetails.name.current}
//             onChangeText={(text: any) => { updateDetails.name.current = text }}
//             style={[styles.modalText, { color: 'black', marginLeft: 5, alignSelf: 'center', marginTop: -16, fontWeight: '400' }]}
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={[styles.inputbox]}>
//           <Text style={styles.modalText}>Your Gender:</Text>
//           <TextInput
//             placeholder={updateDetails.gender.current}
//             onChangeText={(text: any) => { updateDetails.gender.current = text }}
//             style={[styles.modalText, { color: 'black', marginLeft: 5, alignSelf: 'center', marginTop: -16, fontWeight: '400' }]}
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={[styles.inputbox]}>

//           <Text style={styles.modalText}>Your Status:</Text>
//           <TextInput
//             placeholder={updateDetails.status.current}
//             onChangeText={(text: any) => { updateDetails.status.current = text }}
//             style={[styles.modalText, { color: 'black', marginLeft: 5, alignSelf: 'center', marginTop: -16, fontWeight: '400' }]}
//             placeholderTextColor={'black'}
//           />
//         </View>



//         <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 16, backgroundColor: '#7CBCF9B7', borderRadius: 30, height: 50, width: 200 }} onPress={() => { UpdateApiData(id); setModalViewStatus(false) }}>
//           <Text style={{ fontWeight: '600', textAlign: 'center', color: 'black', padding: 10 }}>Update</Text>
//         </TouchableOpacity>

//       </Modal>
//       {isLoader && <ActivityIndicator size={'large'} color={'red'} animating={true} style={{position:'absolute',top:300,alignSelf:'center'}}/>}
//     </View>
//   );
// }
// export default Index;

// function async() {
//   throw new Error("Function not implemented.");
// }
