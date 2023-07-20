import peopleInTheStreet from '../assets/images/peopleInTheStreet.png';


const Message = () => {
    return (
        <>
            <div className='flex relative items-center justify-center w-full h-full'>
                <figure className='w-full h-full'>
                    <img src={peopleInTheStreet} alt='banner' className='w-full h-[calc(100vh-192px)] object-cover'/>
                </figure>
                <div className='absolute text-6xl text-white font-medium'>
                    <h1 className='text-8xl font-bold' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>A place to grow</h1>
                </div>
            </div>
        </>
    );
}

export default Message;
