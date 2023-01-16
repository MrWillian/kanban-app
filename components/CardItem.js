import { ChatAlt2Icon, PaperClipIcon, PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function CardItem({ data }) {
    return (
        <div className="bg-white rounded-md p-3 mt-3">
            <label 
                className={
                    `bg-gradient-to-r from-blue-500 to-blue-200 px-2 py-1 rounded text-white text-sm
                    ${data.priority === 0 ? 'from-blue-500 to-blue-200' 
                    : data.priority === 1 ? 'from-green-500 to-green-200'
                    : 'from-red-500 to-red-200'}
                `}>
                {
                    data.priority === 0 
                        ? "Low Priority" 
                        : data.priority === 1 ? "Medium Priority" : "High Priority"
                }
            </label>
            <h5 className="text-md my-3 text-lg leading-6">
                {data.title}    
            </h5>
            <div className="flex justify-between">
                <div className="flex space-x-4 items-center">
                    <span className="flex space-x-2 items-center">
                        <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                        <span>{data.chat}</span>
                    </span>
                    <span className="flex space-x-2 items-center">
                        <PaperClipIcon className="w-4 h-4 text-gray-500" />
                        <span>{data.attachment}</span>
                    </span>
                </div>

                <ul className="flex space-x-3">
                    {
                        data.assignees.map((ass, index) => {
                            return (
                                <li>
                                    <Image 
                                        src={ass.avt}
                                        width="36"
                                        height="36"
                                        objectFit='cover'
                                        className='rounded-full'
                                        alt="user image"
                                    />
                                </li>
                            )
                        })
                    }
                    <li>
                        <button className="border border-dashed flex items-center rounded-full">
                            <PlusIcon className='w-5 h-5 text-gray-500' />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardItem;
