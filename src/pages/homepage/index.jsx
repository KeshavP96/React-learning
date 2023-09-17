import Search from "../../components/search";
import './styles.css'

const dummyData = "DummyData";

const Homepage = ()=> {

    const getDataFromSearchComponent = (getData) =>{
        console.log(getData);

//        calling API to get data
        async function getRecipes(){
            const apiResponce = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1db890e2637c46e89b1d7f3eaf5a94e7&query=${getData}`)
            const result = await apiResponce.json();

            console.log(result);
        } 

        getRecipes();
    }
    

    return(
        <div className="Homepage">
            <Search getDataFromSearchComponent = {getDataFromSearchComponent} dummyData = {dummyData}/>
        </div>
    )
}

export default Homepage;