export default function addStorage(obj){
  for(const key in obj){
    localStorage.setItem(key, obj[key])
  }
}