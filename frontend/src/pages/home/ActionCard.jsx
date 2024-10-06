import WoodBg from '../../assets/woodpattern.png';

const ActionCard = (props) => {
    return(
        <>  
            <div style={{backgroundImage: `url(${WoodBg})`}} className="mt-6 w-96 rounded-lg p-4 text-white border-solid border-wood1 border-8 ">
                <div 
                    className="h-56 bg-cover bg-no-repeat bg-center rounded-md shadow-xl " 
                    style={{backgroundImage: `url(${props.img})` }}
                ></div>
                
                <div className="text-3xl text-left font-PirataOne">{props.title}</div>
                <p className="h-28">{props.desc}</p>
        
            </div>
        </>
    );
}
export default ActionCard;
