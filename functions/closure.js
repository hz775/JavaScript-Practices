function point(totappo){
    let points=totappo

    let  addpoints =() => {
        return points+1
    }

    let removepoints=() =>{
        return points-1
    }

    let getTotalpoints=() =>{
        return points+addpoints()
    }
    return{
        addpoints,removepoints,getTotalpoints
    }
}
const res=point(100);
console.log(res.addpoints())