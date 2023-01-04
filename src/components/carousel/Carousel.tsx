import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface PropTypes {
    children: ReactElement[];
}

interface ICarouselBody {
    position: number;
}

const CarouselBody = styled.div<ICarouselBody>`
    display: flex;
    justify-content: center;
    transition: all ease 1s;
    transform: ${props => `translateX(${(props.position-1) * (-774)}px)`};
`



export default function Carousel({ children }: PropTypes): JSX.Element {

    const [items, setItems] = React.useState<ReactElement[]>([]);
    const [position, setPosition] = React.useState(0);

    const handleLeftClick = () => {
        setPosition((position - 1) % children.length);
    }

    const handleRightClick = () => {
        setPosition((position + 1) % children.length);
    }

    React.useEffect(() => {
        setItems([children[children.length - 1], ...children, children[0]]);
    }, [children])

    return (
        <div className='flex flex-col items-center '>

            {/* Carousel part */}
            <div className='flex items-center'>

                {/* Left Arrow Button */}
                <div className='w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer relative z-20' onClick={() => handleLeftClick()}>
                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7447 28.3483L1.28192 15.8855C0.517147 15.1208 0.517147 13.8808 1.28192 13.116L13.7447 0.65327C14.5095 -0.111507 15.7494 -0.111508 16.5142 0.653269C17.279 1.41805 17.279 2.658 16.5142 3.42277L6.58334 13.3536L6.58334 15.6479L16.5142 25.5788C17.279 26.3436 17.279 27.5835 16.5142 28.3483C15.7494 29.1131 14.5095 29.1131 13.7447 28.3483Z" fill="#3683FC" />
                    </svg>
                </div>

                {/* Items Part */}
                <div className='mx-[127px] w-[520px] '>
                    <CarouselBody position={position}>
                        {
                            items && items.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index} className='mx-[132px]'>
                                        {
                                            item
                                        }
                                    </div>
                                )
                            })
                        }
                    </CarouselBody>
                </div>

                {/* Right Arrow Button */}
                <div className='w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer relative z-20' onClick={handleRightClick}>
                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25532 0.651708L16.7181 13.1145C17.4829 13.8792 17.4829 15.1192 16.7181 15.884L4.25532 28.3467C3.49054 29.1115 2.25059 29.1115 1.48582 28.3467C0.72104 27.582 0.721039 26.342 1.48582 25.5772L11.4167 15.6464L11.4167 13.3521L1.48581 3.42121C0.721037 2.65643 0.721037 1.41648 1.48581 0.651708C2.25059 -0.113069 3.49054 -0.11307 4.25532 0.651708Z" fill="#3683FC" />
                    </svg>
                </div>

            </div>


            {/* Button Bottom */}
            <div className='flex mt-[202px]'>
                {
                    children.map((item, index) => {
                        return (
                            index === Math.abs(position) ? <div key={index} className='w-[24px] h-[10px] bg-[#3683FC] mx-[9px]' onClick={() => setPosition(index)} /> : <div key={index} className='w-[24px] h-[10px] bg-[#E7E9EC] mx-[9px]' onClick={() => setPosition(index)} />
                        )
                    })
                }
            </div>
        </div>
    )
}