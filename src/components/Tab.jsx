import { useState } from 'react';
import '../css/tab.css';
import Button from './Button';

function Tab({ tabContentList }) {

    const [idxOfItem, setIndexOfItem] = useState(0);

    return (
        <div className="tab">
            <div className="tab-nav">
                <ul className='tab-nav-items'>
                    {tabContentList.map((item, idx) => {
                        return (
                            <li className='tab-nav-item'>
                                <Button
                                    className={`tab-button ${idx === idxOfItem ? "open" : ""}`}
                                    onClick={()=>setIndexOfItem(idx)}
                                >
                                    {item.tabTitle}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
                <div className='tab-nav-space'></div>
            </div>
            <div className="tab-text">
                {tabContentList[idxOfItem].tabContent}
            </div>
        </div>
    );
}

export default Tab;