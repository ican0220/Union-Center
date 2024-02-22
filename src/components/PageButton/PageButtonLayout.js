import React from "react";
import {useLocation} from 'react-router-dom';

export default function PageButtonLayout  ()  {
    const location = useLocation();
    const currentRoute = location.pathname;
    const pagesData = [
        { id: 0, name: 'HOME', link: '/' },
        { id: 1, name: 'VISION', link: '/vision' },
        { id: 2, name: 'RESIDENCES', link: '/residences' },
        { id: 3, name: 'AMENTIES', link: '/amenities' },
        { id: 4, name: 'NEIGHBORHOOD', link: '/neighborhood' },
        { id: 5, name: 'AVAILABILITY', link: '/availability' },
        { id: 6, name: 'GALLERY', link: '/gallery' },
        { id: 7, name: 'CONTACT', link: '/contact' }
    ];
    
    let i = 0;
    if (currentRoute == '/' )
        return (
            <div>
                <div className="flex justify-between pb-2">
                    <div className="page-button">
                        <a className="flex-grow" href="./contact"><p className="text-[#f2ede4] hover:text-[#b95a01] ml-[12px]">CONTACT</p></a>
                    </div>
                    <div className="page-button-next">
                        <a className="flex-grow" href="./vision"><p className="text-[#f2ede4] hover:text-[#b95a01] mr-[12px]">VISION</p></a>
                    </div>
                </div>
            </div>
        );
    else if(currentRoute == '/contact')
        return(<div>
        
        </div>)
        ;
    else for (i = 0; i < 7 ;i++) {
        if(currentRoute == pagesData[i].link){
            return (
                <div className="flex justify-between pb-2">
                    <div className="page-button">
                        <a className="flex-grow" href={'.'+  pagesData[i-1].link}><p className="text-[#f2ede4] hover:text-[#b95a01] ml-[12px]">{pagesData[i-1].name}</p></a>
                    </div>
                    <div className="page-button-next">
                        <a className="flex-grow" href={'.'+  pagesData[i+1].link}><p className="text-[#f2ede4] hover:text-[#b95a01] mr-[12px]">{pagesData[i+1].name}</p></a>
                    </div>
                </div>
            );
        }
    }

}

