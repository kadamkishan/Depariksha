import React from 'react'

import {Smartphone,Mail }from 'lucide-react';

const UpperBar = () => {
  return (
    <div className="flex p-4 bg-gray-800 text-gray-400 gap-x-2 justify-evenly overflow-hidden">
        <div className="flex  ">
          <div>
            <Smartphone />
          </div>
          <div className="ml-1">
            <a href="tel:7387975223" title="7387975223">
              7387975223
            </a>
          </div>
        </div>

        
        <div className="flex ml-2">
          <div>
            <Mail />
          </div>
          <div className="ml-2">
            <a
              href="mailto:rajeshbiradar1995@gmail.com"
              title="rajeshbiradar1995@gmail.com"
            >
              rajeshbiradar1995@gmail.com
            </a>
          </div>
        </div>
    </div>
  )
}

export default UpperBar