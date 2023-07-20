import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className='flex items-center justify-center my-6'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <p className='text-lg font-medium'>© ZELENA 2023</p>
                <div className='flex flex-row gap-2'>
                    <a target='_blank' rel='noreferrer'>
                        <AiFillGithub fontSize={28} />
                    </a>
                    <a target='_blank' rel='noreferrer'>
                        <AiFillLinkedin fontSize={28} />
                    </a>
                    <a target='_blank' rel='noreferrer'>
                        <AiFillTwitterSquare fontSize={28} />
                    </a>
                    <a target='_blank' rel='noreferrer'>
                        <AiFillInstagram fontSize={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;