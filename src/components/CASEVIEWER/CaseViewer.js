import React, { useEffect, useState } from 'react';
import './CaseViewer.css';

const CaseViewer = ({ instance }) => {
    const [currentImage, setCurrentImage] = useState(instance.previewImages[0]);
  
    const handlePreviewClick = (image) => {
      setCurrentImage(image);
    };
  

  return (
    <div className='case_viewer'>

        <div className='case_viewer_wrap'>

            <div className="large-case">                     
                <img src={currentImage} alt="큰 이미지" /> 
            </div>          

            <div className="preview-case">
                {instance.previewImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`미리보기 이미지 ${index}`}
                    onClick={() => handlePreviewClick(image)}
                    className={currentImage === image ? 'selected' : ''}
                />
                ))}
            </div>

        </div>

        <div className='case_detail'>
            <div className='case_detail_content'>
                <h2>{instance.title}</h2>
                <p>{instance.sub}</p>    
            </div>
            <ul>
                {instance.link}
            </ul>
        </div>
        
    </div>
  )
}

export default CaseViewer
