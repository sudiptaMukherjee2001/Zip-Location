import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pageloaing from '../../Pageloading/Pageloaing';
import { useNavigate } from 'react-router-dom';
import "../LocationInfo/Locationinfo.scss";
import { errorSms, resetState } from "../../feature/Apislice";

function LocationInformationDisplayComponent() {
    const [loading, setloading] = useState();
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const { initialData, error } = useSelector((state) => state?.data);
    const state = initialData?.places?.length > 0 ? initialData?.places[0]?.state : '';

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 3000);
    }, []);

    const gotoHomepage = () => {
        Dispatch(resetState());
        Dispatch(errorSms());
        navigate("/");
    }

    return (
        <>
            {loading ?
                <Pageloaing />
                :
                <div className='InfoSection'>
                    <h1>
                        Location Information
                    </h1>
                    {error ? (
                        <h2>
                            {error}
                        </h2>
                    ) : (
                        <>
                            <span>
                                {initialData?.country && `Country Name : ${initialData?.country} `}
                            </span>
                            <br />
                            <span>
                                {initialData?.places && `State Name : ${state}`}
                            </span>

                            {initialData?.places?.map((item, index) => (
                                <div key={index}>
                                    <br />
                                    Place Name: {item?.['place name']}
                                </div>
                            ))}
                        </>
                    )}

                    <button onClick={gotoHomepage}>
                        Go back
                    </button>
                </div>
            }
        </>
    );
}

export default LocationInformationDisplayComponent;
