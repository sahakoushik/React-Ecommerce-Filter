import {useContext} from 'react'
import { AiFillStar } from "react-icons/ai";
import { FilterContext } from '../context/FilterContext';

interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({rating}) => {
    const {selectedRating,setSelectedRating} = useContext(FilterContext)
    
    const handelRating = (val: number) =>{
        setSelectedRating(val);
    }
    return (
        <div onClick={()=>handelRating(rating)}>
            <AiFillStar color={(rating > selectedRating) ?  "gray" : "#F6BE00"} size={"2em"}/>
        </div>
    )
}

export default Rating