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
/**
 * Aquí irían el resto de métodos necesarios en el CRUD
 */