async function fetchCurso(){
  const response = await fetch (`${process.env.API_URL}/curso?populate=imagen`, {cache: "no-cache"})

  if(!response.ok){
    throw new Error("failed to fetch curso")
  }

  return await response.json()
}


  export{fetchCurso}

  