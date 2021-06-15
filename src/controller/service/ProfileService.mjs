export async function getProfiles(){
    try{
        const res = await fetch('https://randomuser.me/api/?page=1&results=100&seed=abc')
        const data = await res.json()
        return data.results
    }catch{
        getProfiles()
    }
}
/**
 * Aquí irían el resto de métodos necesarios en el CRUD
 */