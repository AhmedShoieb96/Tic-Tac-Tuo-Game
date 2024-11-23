export default function Log({turns}){
    
return (<>
{turns.map((turn)=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} is selected {turn.square.row},{turn.square.col}</li>)}
</>

)

}