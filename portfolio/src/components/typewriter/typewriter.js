import Typewriter from 'typewriter-effect';

export default function TypeWriter({ text }) {
    return (
        <div className='typewriter-text' style={{fontSize: 60, color:'inherit'}}>
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(text).start();
            }}
            options={{
                delay: 50
            }
            }
            />
        </div>

    );
}
