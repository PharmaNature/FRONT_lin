import React from "react";
import videoLIN from "../../assets/videos/VIDEO-LIN-HOMEPAGE.mp4"
import videoLIN_PHONE from "../../assets/videos/VIDEO-LIN-HOMEPAGE-PHONE.mp4"
import { Link} from 'react-router-dom';


function Introduction(props) {

    if (props.format === "image") {
        return (
            <div className='centered-image'>
                <img src={props.imageChoice} className='imgBG' alt={props.alt} />
                <div className="divTitle ">
                    <h1 className={'centered-title ' + props.titleSizeChoice}>
                        <span className='title-bold'>
                            {props.titleBold1} {props.titleBold2 ? <br /> : null} {props.titleBold2}
                        </span> <br />
                        {props.title1} <br />
                        {props.title2}
                    </h1>
                    {props.bouton ?
                        

                        <Link
                            to={"/contact"}
                            dangerouslySetInnerHTML={{ __html: "<h3>DEMANDEZ <br /> NOTRE CATALOGUE</h3>" }}
                            className={"buttonTitle " + props.titleSizeChoice + "but"}
                            />
                        : <></>}
                </div>
            </div>
        )
    } else {
        if (props.imageChoice === "Video") {
            return (
                <div className='centered-image'>
                    <video autoPlay loop muted playsInline>
                        <source src={videoLIN} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            )
        } else {
            return (
                <div className='centered-image'>
                    <video autoPlay loop muted playsInline width="auto" height="500px" >
                        <source src={videoLIN_PHONE} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            )
        }

    }

}

export default Introduction;