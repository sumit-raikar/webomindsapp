import React from 'react';

const ImageUploadComponent = ({ url }) => {
    const [image, setImage] = useState({ raw: '' });

    const handleChange = (e) => {
        if (e.target.files.length) {
            setImage({ raw: e.target.files[0] });
        }
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", image.raw);

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        }).then(response => {
            // Notify the user/ parent component
        }).catch(err => {
            // error handling
        })
    }

    return (
        <div>
            <input
                type="file"
                id="upload-button"
                onChange={handleChange}
            />
            <br />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ImageUploadComponent;