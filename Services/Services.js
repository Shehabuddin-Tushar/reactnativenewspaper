import { API_KEY,endpoint,country } from "../Config/Config";


export default async function Services(category="general") {
   
    let newsArticles=await fetch(`${endpoint}?country=${country}&category=${category}`,{
        headers:{
            'X-Api-Key': API_KEY
        }
    });
    let result=await newsArticles.json();
    return result.articles;
}
