import WoodBg from '../../assets/woodpattern.png';

const ActionCard = (props) => {
    return(
        <>  
            <div style={{backgroundImage: `url(${WoodBg})`}} className="mt-6 w-96 rounded-lg p-4 text-black border-solid border-wood1 border-8 transition-transform transform hover:scale-105 duration-500 ">
                <div 
                    className="h-56 bg-cover bg-no-repeat bg-center rounded-md shadow-xl " 
                    style={{backgroundImage: `url(${props.img})` }}
                ></div>
                
                <div className="text-5xl text-left font-PirataOne pt-3">{props.title}</div>
                <p className="h-28 text-lg">{props.desc}</p>
        
            </div>
        </>
    );
}
export default ActionCard;
