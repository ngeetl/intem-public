import React, { useEffect, useState } from 'react';
import './ImgViewer.css';

function ImgViewer({ option, name }) {
  const [currentImage, setCurrentImage] = useState(null);
  const [model, setModel] = useState('');
  const [previewImages, setPreviewImages] = useState([]);

  const handlePreviewClick = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    setModel(option);
    setPreviewImages([
        `/product/${model.toString()}_1.jpg`,
        `/product/${model.toString()}_2.jpg`,
        `/product/${model.toString()}_3.jpg`    
      ]);
  }, [model]);

  useEffect(() => {
    setCurrentImage(previewImages[0]);
  }, [previewImages])


  // const optionClick = (e) => {
  //       setModel(e.target.value);
  //   }

  return (
    <div className='image_viewer'>
        {/* <div className='image_viewer_model'>
            <select onChange={optionClick}>
            {option}
            </select>
        </div> */}
        <div className='imgae_viewer_name'>{name}</div>
        <div className='image_viewer_wrap'>

            <div className="image-viewer">

                <div className="large-image">                     
                    <img src={currentImage} alt="큰 이미지" /> 
                </div>          

                <div className="preview-images">
                    {previewImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`미리보기 이미지 ${index}`}
                        onClick={() => handlePreviewClick(image)}
                    />
                    ))}
                </div>

            </div>
            <div className='image_detail'>
                <img src={`/product/${model}_detail.jpg`}/>
            </div>            

        </div>
    </div>
  );
}


export default ImgViewer;
