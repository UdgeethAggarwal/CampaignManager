import React, { useState } from 'react';
import Tabs from "./components/Tabs"; 
import "./App.css";


function TableData(data){
  return data.map((item,i) => {
    return  <tr key={i}> <td>{item.createdOn}</td>
                  <td>{item.name}</td>
                  <td>{item.price} </td>
                  <td>{item.region}</td>
             </tr>
  })
}

function getTodayDate(){
  const curr = new Date();
  let month = curr.getMonth() + 1;
 
  let date = curr.getDate();
  if(month < 10) {
    month  = '0'+month;
  }
  if(date < 10) {
    date  = '0'+date;
  }
  
  return curr.getFullYear() + "-"+ month+"-"+ date;
}

const filterData = (type,data,setData,currentData) => {
  
  const currentDate = new Date(getTodayDate());
  console.log(currentDate);
  if(type === "Upcoming"){
    // currentData.map(item => {
    //   console.log((new Date(item.createdOn)).getTime());
    //   console.log("and",currentDate.getTime());
    //   console.log("result", (new Date(item.createdOn)).getTime() > currentDate.getTime() );
    // });
  
      setData(currentData.filter(item => (new Date(item.createdOn)).getTime() > currentDate.getTime() ));
     
  }
  else if(type === "Live"){
    setData(currentData.filter(item => (new Date(item.createdOn)).getTime() === currentDate.getTime() ));
  }
  else{
    setData(currentData.filter(item => (new Date(item.createdOn)).getTime() < currentDate.getTime() ));
  }
}

function App() {

  const [data, setData] = useState([{
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": "Aug 1 2020",
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"Some image url of the campaign" 
  },
  {
    "name": "Super Jewels Quest",
    "region": "CA, FR",
    "createdOn": "Sep 30 2020",
    "price": "Price info of Super Jewels Quest",
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url":"Some image url of the campaign"
  },
  {
    "name": "Mole Slayer",
    "region": "FR",
    "createdOn": "2020-08-31",
    "price": "Price info of Mole Slayer",
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url":"Some image url of the campaign"
  },
  {
    "name": "Mancala Mix",
    "region": "JP",
    "createdOn": "Aug 29 2020",
    "price": "Price info of Mancala Mix",
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url":"Some image url of the campaign"
  }
  ]);
  const [currentData, setCurrentData] = useState(data);
  return (
    <div>
      <h1>Manage Campaigns</h1>
      <button onClick={()=>filterData("Upcoming",data,setData,currentData)} > Upcoming Campaigns</button>
      <button onClick={()=>filterData("Live",data,setData,currentData)} > Live Campaigns</button>
      <button onClick={()=>filterData("Past",data,setData,currentData)} > Past Campaigns</button>
       <table>
          <tr>
            <th> DATE </th>
            <th> CAMPAIGNS </th>
            <th>  VIEW </th>
            <th> ACTIONS</th>
          </tr>

            {TableData(data)}
            

       </table>
       
       
       
      
    </div>
  );
}

export default App;
