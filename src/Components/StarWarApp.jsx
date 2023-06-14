import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';





// const StarWarsApp = ({ defaultResource = 'people', defaultId = 1 }) => {
//     const [resource, setResource] = useState(defaultResource);
//     const [id, setId] = useState(defaultId);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setData(data);
//                 setError(null);
//             } catch (error) {
//                 setError("These aren't the droids you're looking for");
//                 setData(null);
//             }
//         };

//         fetchData();
//     }, [id, resource]);

//     const handleResourceChange = (e) => {
//         setResource(e.target.value);
//     };

//     const handleIdChange = (e) => {
//         setId(parseInt(e.target.value));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // The data will be fetched automatically based on the updated ID and resource
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <select value={resource} onChange={handleResourceChange}>
//                     <option value="people">People</option>
//                     <option value="planets">Planets</option>
//                     <option value="starships">Starships</option>
//                 </select>
//                 <input type="number" value={id} onChange={handleIdChange} />
//                 <button type="submit">Submit</button>
//             </form>
//             {data ? (
//                 <div>
//                     <h2>{data.name}</h2>
//                     {resource === 'people' && (
//                         <div>
//                             <p>Height: {data.height}</p>
//                             <p>Skin Color: {data.skin_color}</p>
//                         </div>
//                     )}

//                     {resource === 'planets' && (
//                         <div>
//                             <p>Name: {data.name}</p>

//                             <p>Climate: {data.climate}</p>
//                             <p>Terrain: {data.terrain}</p>
//                         </div>
//                     )}

//                     {resource === 'starships' && (
//                         <div>
//                             <p>Manufacturer: {data.manufacturer}</p>
//                             <p>Model: {data.model}</p>
//                         </div>
//                     )}

//                 </div>
//             ) : (
//                 <p>{error ? error : 'Enter a valid ID to fetch data'}</p>
//             )}
//         </div>
//     );
// };

// export default StarWarsApp;



const StarWarsApp = ({ defaultResource = 'people', defaultId = 1 }) => {
    const [resource, setResource] = useState(defaultResource);
    const [id, setId] = useState(defaultId);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [resourceOptions, setResourceOptions] = useState(
        [
            { value: 'people', label: 'People' },
            { value: 'planets', label: 'Planets' },
            { value: 'starships', label: 'Starships' },
        ]);
    ;


    


    const handleResourceChange = (e) => {
        setResource(e.target.value);
    };

    const handleIdChange = (e) => {
        setId(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (error) {
                setError("These aren't the droids you're looking for");
                setData(null);
            }
        };
        fetchData()
    }, [resource,id]);



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select style={{ width: '150px', height: '30px' }} value={resource} onChange={handleResourceChange}>

                    {resourceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}

                </select>
                <input style={{ width: '150px', height: '30px' }} type="number" value={id} onChange={handleIdChange} />
                <button type="submit">Submit</button>
            </form>
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                    {resource === 'people' && (
                        <div>
                            <p>Height: {data.height}</p>
                            <p>Skin Color: {data.skin_color}</p>
                        </div>
                    )}
                    {resource === 'planets' && (
                        <div>
                            <p>Climate: {data.climate}</p>
                            <p>Terrain: {data.terrain}</p>
                        </div>
                    )}
                    {resource === 'starships' && (
                        <div>
                            <p>Manufacturer: {data.manufacturer}</p>
                            <p>Model: {data.model}</p>
                        </div>
                    )}
                </div>
            ) : (
                <p>{error ? error : 'Enter a valid ID to fetch data'}</p>
            )}
        </div>
    );
};

export default StarWarsApp;
