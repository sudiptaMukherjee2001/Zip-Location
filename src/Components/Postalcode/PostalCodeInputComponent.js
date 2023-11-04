import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../../feature/Apislice"
import "../Postalcode/Postalcodeinfo.scss"
import { useNavigate } from 'react-router-dom';
function PostalCodeInputComponent() {
    const [userInput, setUserInput] = useState({
        countryCode: '',
        posttalCode: ''
    })

    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const hadelUserInput = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });

    }


    const handelSubmit = async (e) => {
        e.preventDefault();

        Dispatch(getData(`/${userInput.countryCode}/${userInput.posttalCode}`));

        navigate("/LocationInfo");


    }

    return (
        <>
            <form onSubmit={handelSubmit} method='post'>
                <h1>
                    ZipLocation
                </h1>
                <label>

                    CountryCode: <input type="text" name="countryCode" value={userInput.countryCode} onChange={hadelUserInput} />
                </label>
                <label >

                    PosttalCode: <input type="text" name="posttalCode" value={userInput.posttalCode} onChange={hadelUserInput} />
                </label>
                <button type='submit'>Get Details</button>
            </form>

        </>
    )
}

export default PostalCodeInputComponent