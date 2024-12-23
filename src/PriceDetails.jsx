



const PriceDetails = ({priceZ}) => {

    const {id, name, title, paragraph, price} = priceZ


    return (
        <div className=" bg-color-card ">

            <div>
             <p className=" name-text">{name}</p>
             <p className=" title-text ">{title}</p>
             <p className=" title-text1 ">{paragraph}</p>
             <p className=" title-text2 ">{price}</p>




            </div>
            
        </div>
    );
};

export default PriceDetails;