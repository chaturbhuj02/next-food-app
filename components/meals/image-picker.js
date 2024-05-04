'use client';

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

     function handlePicker(){
        imageInputRef.current.click();
    };

    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>no image picked yet!</p>}
            {pickedImage && <Image src={pickedImage} fill alt='image picked by user'></Image>}
        </div>
        <input
        className={classes.input} ref={imageInputRef}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} onClick={handlePicker} type="button">
            Pick an image
        </button>
      </div>
    </div>
  );
}
