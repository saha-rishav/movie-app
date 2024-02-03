/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className='genres'>
            {/* ? is used for optional Chaning */}
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                <div className="genre" key={g}>
                    {genres[g]?.name}
                </div>
            })
            }
        </div>
    )
}

export default Genres