import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data,setData] = useState([])
  const [error,setError] = useState("")
  const[search,setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/plants").then(res => {
      if (!res.ok){
        throw new Error("Failed to fetch plants details")
      }
      return res.json()
    }).then(data => (
      setData(data)
    )).catch(error => {
      setError(error.message)
    })
  },[])

  function handleCreate(formData){  
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then(res => {
      if (!res.ok){
        throw new Error("failed to add plant")
      }
      return res.json()
    }).then((newPlant)=> {
        setData(prevPlants => ([...prevPlants,newPlant]))
      }
    ).catch(error => {
      setError(error.message)
    })
  }
  return (
    <main>
      <NewPlantForm handleCreate={handleCreate}/>
      <Search setSearch={setSearch}/>
      <PlantList data={data} search={search}/>
    </main>
  );
}

export default PlantPage;
