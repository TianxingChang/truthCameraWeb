// handleFile.js
import React, { useCallback, useState ,useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import { SHA1 } from 'crypto-js';
// import axios from 'axios';
import styles from '../styles/Home.module.css';
import { Button } from '@geist-ui/core'
import styled, { createGlobalStyle } from 'styled-components';
import Fireworks from './backupFiles/Fireworks'
import dropzoneStyle from '../styles/DropZone.module.css'

const DropzoneContainer = styled.div`
`;

const UploadMessage = styled.p`
  color: #333;
  font-size: 18px;
`;


function DropBox() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [imageSrc, setImageSrc] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const [boxText,setBoxText] = useState("Drag and drop an image here, or click to select a file.");

  const [formData, setFormData] = useState([]);
  const [background,setBackground] = useState(null)
  const [textColor,setTextColor] = useState('black')
  const [isHover, setIsHover] = useState(false);
  const [uploadHash, setUploadHash] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadButton, setUploadButton] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };


  // useEffect(() => {
  //   console.log('backGroundSrc changed:', background);
  // }, [background]);
  
  // const onDrop = useCallback(async (acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   const reader = new FileReader();
  //   reader.onload = async () => {
  //     const hash = SHA1(reader.result).toString();
  //     const formData = new FormData();
  //     formData.append('hash', hash);
  //     formData.append('image', file);
  //     try {
  //       const response = await axios.post('http://truthcamera.tech:8080/api/upload', formData);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   reader.readAsArrayBuffer(file);
  // }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);
    const reader = new FileReader();
    reader.onload = async () => {
      const hash = SHA1(reader.result).toString();
      setUploadHash(hash);
      const formData = new FormData();
      formData.append('hash', hash);
      setFormData(formData);
      // formData.append('image', file);
      // try {
      //   const response = await axios.post('http://truthcamera.tech:8080/api/upload', formData);
      //   console.log(response);
      // } catch (error) {
      //   console.error(error);
      // }

    };
    reader.readAsArrayBuffer(file);
    setBoxText('');

    // reader.readAsDataURL(file)
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);


  async function handleUploadInner(){
//    const upUrl ='http://127.0.0.1:5000/verify_img?pic_hash=' + '"' + uploadHash + '"';
  //  console.log(upUrl);
//     const response = await fetch(upUrl,{method: "POST"})
//       .then((response) => response.json())
//       .then((res)=>{
//         if(res.status==='200'){
//           if(res.result){
//             setBoxText("Image is shot with a real camera!");
//             setShowFireworks(true);
//             setBackground("./checkMark.png");
//             setTextColor("green");
//           }
//           else{
//             setBoxText("No record is found on the blockchain...");
//             setBackground("./checkMark.png");
//             setTextColor("red");
//           }
//       }
//     })
// .catch(err=>console.log(err));

    setUploadButton(true);
    setBoxText('uploading file...');
    setTextColor('purple');


    setTimeout(()=>{
      setBoxText("No record is found on the blockchain...");
      setBackground("./wrongMark.svg");
      setTextColor("red");
    }, 2000)

    /*
    axios({
      url: "http://20.24.98.15:8080/api/upload",
      method: 'POST',
  }).then((res)=>{
    //res.json()}).then((res)=>{
    if(res.status==200){
      console.log(res)
      if(res.data.result){
        setBoxText("Image is shot with a real camera!");
        setShowFireworks(true);
        setBackground("./checkMark.png");
        setTextColor("green");
      }
      else{
        setBoxText("No record is found on the blockchain...");
        setBackground("./checkMark.png");
        setTextColor("red");
      }
    }
  }).catch((err)=>{console.log(err)
  }).finally(()=>{
        setBoxText("No record is found on the blockchain...");
        setBackground("./wrongMark.svg");
        setTextColor("red");
  })
  */
}

  function renderText(textColor){
    return(
        <p style={{color: textColor}}>{boxText}</p>
    )
  }
// style={{backgroundImage: `url('${background}')` }

  function renderBackground(background){
    return(
      <DropzoneContainer className={dropzoneStyle.DropzoneContainer} {...getRootProps()}>
        <input {...getInputProps()} />
        {uploadedImage && !background &&
          <img src={URL.createObjectURL(uploadedImage)} alt="Preview" style={{ maxWidth: '70%' ,maxHeight:'70%'}} />
        }
        {!uploadedImage && !background && <img src='./upload.svg' style={{height:70}}/>}
        {background && <img src={background} style={{maxWidth: '60%',maxHeight:'60%'}} />}
        {!uploadedImage && renderText(textColor)}
        {uploadedImage && renderText(textColor)}
      </DropzoneContainer>
    )
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  console.log('uploadButton',uploadButton);
  return (
<>
    <div className={styles.card}>
      {renderBackground(background)}
      <Fireworks show={showFireworks} />

      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

    </div>

    <div>
          <Button onClick={handleUploadInner} style={{color:"rgb(47,110,235)",borderColor:isHover?'rgb(47,110,235)':''}} onMouseOver={handleMouseEnter}><b>Verify</b></Button>
    </div>
</>
  );
}

export default DropBox;