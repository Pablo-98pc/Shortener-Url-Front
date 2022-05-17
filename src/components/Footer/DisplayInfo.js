import { useState } from "react"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const DisplayInfo = (props) => {
    const [view,setView] = useState(false)

    const handleView = () => {
        setView(!view)
    }

    return <div className={`info-container`}>
        { view ? <>
            <div className="info-title">
                <h4>{props.title}</h4>
                <div className="arrow-button">
                    <ArrowUpwardIcon onClick={handleView}/>
                </div>
            </div>
        
        <p>{props.answer}</p>
        </> : 
            <div className="info-title">
                <h4>{props.title}</h4>
                <div className="arrow-button">
                    <ArrowDownwardIcon onClick={handleView}/>
                </div>
            </div> }
    </div>

}