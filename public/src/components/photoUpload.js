import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css'
import 'react-images-uploader/font.css'

export default class PhotoUpload extends Component {
    render() {
        return (
            <ImagesUploader
                url='https://projekte.milabor.ch/chooseStructureInLife/'
                optimisticPreviews
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Bilder hochladen"
                />
        );
    }
}
