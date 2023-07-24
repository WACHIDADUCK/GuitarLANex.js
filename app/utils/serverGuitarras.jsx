async function getGuitarras(){
  const response = await fetch (`${process.env.API_URL}/guitarras?populate=imagen`, {cache: "no-cache"})

  if(!response.ok){
    throw new Error("failed to fetch guitarra")
  }

  return await response.json()
}


  export{getGuitarras}

  