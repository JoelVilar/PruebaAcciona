export async function getProfiles(){
    try{
        const res = await fetch('http://localhost:8081/profile')
        const data = await res.json()
        return data
    }catch{
        getProfiles()
    }
}

export async function getProfile(id){
    const res = await fetch(`http://localhost:8081/profile/${id}`)
    const data = await res.json()
    return data;
}

export async function saveProfileInList(data){
    const res = await fetch('http://localhost:8081/profile/favs',{
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await res.json()
    alert(await response.msg)
}
/**
 * Aquí irían el resto de métodos necesarios en el CRUD
 */