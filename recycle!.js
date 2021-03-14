function recycleMe(recycle){ 
    let Plastics=0,Glass=0,Card=0;
    recycle.map(v=>v===0?Card++:v<0?Glass++:Plastics++)
    return [Plastics,Glass,Card]
    }