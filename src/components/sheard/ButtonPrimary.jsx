 
import { LuBookOpenCheck } from 'react-icons/lu';

const ButtonPrimary = ({ title }) => {
    return (
        <div>
            <div className="flex  ">
                <div className="flex gap-2 text-xl items-center border border-[#ED1C3E] px-4 py-2 rounded-md">
                    <LuBookOpenCheck className="text-2xl text-[#ED1C3E] font-semibold" />
                    <p className="text-[#ED1C3E] font-semibold">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ButtonPrimary;
