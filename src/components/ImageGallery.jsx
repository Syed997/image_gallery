
import { useState } from 'react';
import {data} from './data';
const ImageGallery = () => {
    
    const [images, setImages] = useState(data);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageSelect = (imageId) => {
        if (selectedImages.includes(imageId)) {
            setSelectedImages(selectedImages.filter((id) => id !== imageId));
        } else {
            setSelectedImages([...selectedImages, imageId]);
        }
    };


    const handleDeleteSelectedImages = () => {
        const remainingImages = images.filter((image) => !selectedImages.includes(image.id));
        setImages(remainingImages);
        setSelectedImages([]);
    };



    return (

        <div className="container mx-auto p-4">


            <h1 className={`text-2xl font-bold mb-4 ${selectedImages.length>0 ? 'hidden' : ''}`}>Image Gallery</h1>
            
            {selectedImages.length > 0 && (
                <div className="flex items-center justify-between mb-4">
                    <div className=' font-bold '>
                        {selectedImages.length} File{selectedImages.length === 1 ? '' : 's'} Selected
                    </div>
                    <button
                        onClick={handleDeleteSelectedImages}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        Delete Selected
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 my-4 border-t-2 border-gray-300">
                {images.map((image, index) => (
                    <div key={image.id} className=" mt-4 relative border border-gray-300 border-solid rounded-lg group image-container ">
                        <input
                            type="checkbox"
                            checked={selectedImages.includes(image.id)}
                            onChange={() => handleImageSelect(image.id)}
                            className={`absolute top-2 left-2 mt-2 ml-2 my-2 opacity-0 checked:opacity-100 checked:z-10 w-8 group-hover:opacity-100 group-hover:ease-out group-hover:duration-300 group-hover:bg-white group-hover:z-10`}
                        />
                        
                        <img
                            src={image.name}
                            alt={`Image ${index}`}
                            className={`w-full h-auto rounded-lg group-hover:brightness-50 ease-in duration-300 ${selectedImages.includes(image.id) ? 'brightness-75' : ''}`}
                        />
                    </div>
                ))}



            </div>
        </div>
    );
};

export default ImageGallery;
