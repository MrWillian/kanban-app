import { ChevronDownIcon, DotsVerticalIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from './layout';
import CardItem from '../components/CardItem';
import BoardData from '../data/board-data.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="p-10">
        {/* Board header */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
            <ChevronDownIcon className="w-9 h-9 text-gray-500 rounded-full p-1 bg-white ml-5 shadow-xl" />
          </div>
          <ul className="flex space-x-3">
            <li>
              <Image 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                width="36" 
                height="36" 
                objectFit='cover' 
                className=" rounded-full " 
                alt="image"
              />
            </li>
            <li>
              <Image 
                src="https://randomuser.me/api/portraits/men/76.jpg" 
                width="36" 
                height="36" 
                objectFit='cover' 
                className=" rounded-full " 
                alt="image"
              />
            </li>
            <li>
              <Image 
                src="https://randomuser.me/api/portraits/men/77.jpg" 
                width="36" 
                height="36" 
                objectFit='cover' 
                className=" rounded-full " 
                alt="image"
              />
            </li>
            <li>
              <button className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full">
                <PlusIcon className="w-5 h-5 text-gray-500" />
              </button>
            </li>
          </ul>
        </div>

        {/* Board columns */}
        <div className="grid grid-cols-4 gap-5 my-5">
          {
            BoardData.map((board, index) => {
              return (
                <div key={index} className="bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden">
                  <span className="w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 absolute inset-x-0 top-0"></span>
                  <h4 className="flex justify-between items-center mb-2">
                    <span className="text-2xl text-gray-600">{board.name}</span>
                    <DotsVerticalIcon className='w-5 h-5 text-gray-500' />
                  </h4>

                  {
                    board.items.length > 0 && (
                      board.items.map((item, iIndex) => {
                        return <CardItem key={iIndex} data={item} />
                      })
                    )
                  }

                  <button className="flex justify-center items-center mt-6 space-x-2 text-lg">
                    <span>Add task</span>
                    <PlusCircleIcon className="w-4 h-4 text-gray-500" />
                  </button>

                </div>
              )
            })
          }
        </div>
        
      </div>

    </Layout>
  )
}

export default Home
