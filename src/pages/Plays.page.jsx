import React from 'react';
//Component
import Poster from '../components/Poster/Poster.component';
import EventsFilter from '../components/EventsFilter/EventsFilter.component';

const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Events In Pune</h2>
                <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313626-yflbsjwylv-portrait.jpg"
                  title="Celebfie - Cruise with the Stars"
                  subtitle="Music -> ₹104000"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313626-yflbsjwylv-portrait.jpg"
                  title="Celebfie - Cruise with the Stars"
                  subtitle="Music -> ₹104000"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313626-yflbsjwylv-portrait.jpg"
                  title="Celebfie - Cruise with the Stars"
                  subtitle="Music -> ₹104000"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313626-yflbsjwylv-portrait.jpg"
                  title="Celebfie - Cruise with the Stars"
                  subtitle="Music -> ₹104000"
                />
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold">Filters</h2>
            <div><EventsFilter 
            title="Date" 
            tags={["Today", "Tomorrow", "This Weekend"]}
            />
            <EventsFilter 
            title="Time" 
            tags={["No Choice"]}
            />
            <EventsFilter 
            title="Language" 
            tags={["Tamil", "Hindi", "English"]}
            />
            </div>
            <div className="" >

            </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Plays;
