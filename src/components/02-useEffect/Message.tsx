import { useEffect, useState } from 'react';


const Message = () => {

    const[coords, setcoords] = useState({ x:0,y:0 })
    const{ x , y }= coords

    useEffect(()=>{

        const mouseMove = (e:any) => {
            const coors = {x: e.x, y: e.y};
            setcoords(coors); 
            
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Aplicación funcional!!! :D </h3>
            <p/>
            X:{x} Y:{y}
        </>
    );
};

export{
    Message
};