import React, {useEffect, useState} from 'react';

const List = ({coords}) => {
    const [list, setList] = useState({});

    const monument = [
        {
            id: 0,
            name: 'cathedrale'
        },
        {
            id: 1,
            name: 'cathedrale'
        },
        {
            id: 2,
            name: 'cathedrale'
        }
    ]

    const loisirs = [
        {
            id: 0,
            name: 'louvre'
        },
        {
            id: 1,
            name: 'Disneyland Paris'
        }
    ]
    return (
        <div className="list_container">
            {monument.map(m => {
                return (
                    <div className="list_content">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                            <path fill="#6563ff"
                                  d="M13,10H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm5,0a4,4,0,0,0-3-3.86V5A3,3,0,0,0,9,5V6.14A4,4,0,0,0,6,10a4,4,0,0,0-4,4v3a3,3,0,0,0,3,3H6.18A3,3,0,0,0,9,22h6a3,3,0,0,0,2.82-2H19a3,3,0,0,0,3-3V14A4,4,0,0,0,18,10ZM6,18H5a1,1,0,0,1-1-1V14a2,2,0,0,1,2-2ZM11,5a1,1,0,0,1,2,0V6H11Zm5,14a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2Zm0-4.44A3.91,3.91,0,0,0,14,14H10a3.91,3.91,0,0,0-2,.56V10a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2ZM20,17a1,1,0,0,1-1,1H18V12a2,2,0,0,1,2,2Z"/>
                        </svg>
                        <h2>{m.name}</h2>
                    </div>
                )
            })}

        </div>
    )
}


export default List;

const request = async (coord) => {
    const res = await fetch("https://api.foursquare.com/v3/places/search?ll=" + coord + "&radius=1000&categories=16026,16032,18021", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'fsq3LUE8WwKio5dQklMt0eyb9dW/T39x/rwh30gRy0cgsDI='
            }
        }
    );
    return await res.json();
}

/*
 * changeAC={updateListCity}
 *                   changeInput={updateCitySearch}
 * render
 * au niveau du composant
 * const updateListCity = async (e: any, value: any) => {
 *     if (value) {
 *       setChoiceCity(value.id);
 *     } else {
 *       setChoiceCity(null);
 *     }
 *   };
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------
 * const [choiceCity, setChoiceCity] = useState(null);
 *   const [searchCity, setSearchCity] = useState("");
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------
 * const updateArrayCity = async () => {
 *     const user = await getStorage("userData");
 *
 *     if (searchCity !== null && searchCity.length > 2) {
 *       const categories = await request(
 *         /api/city/search?search=${searchCity},
 *         "get",
 *         user.token
 *       );
 *       const newArr = categories.cities.map((city) => ({
 *         label: city.name,
 *         id: city.id,
 *       }));
 *
 *       setCities(newArr);
 *     }
 *   };
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------
 *
 *
 * useEffect(() => {
 *     updateArrayCity();
 *   }, [searchCity]);
 */
