export async function getProfiles(){
    const res = await fetch('https://randomuser.me/api/?page=1&results=100&seed=abc')
    const data = await res.json()
    return data.results
}
/**
 * Aquí irían el resto de métodos necesarios en el CRUD
 */