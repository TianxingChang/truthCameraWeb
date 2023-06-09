import React, { useCallback, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import DropZone from './DropZone.jsx'
import DropBox from "./DropBox";

export default function Home() {
  /******************** handleDrop ***************************/

  // const onDrop = useCallback((acceptedFiles) => {
  //   // Upload files to the server here
  //   console.log(acceptedFiles);
  //   const file = acceptedFiles[0];
  //   // const reader = new FileReader();

  //   // reader.onload=()=>{
  //   //   setImageSrc(reader.result);
  //   // }

  //   // reader.readAsDataURL(file)
  //   setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  /***************** handleUpload *******************************/

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const response = await axios.post('/api/upload', formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });

  //     setImageSrc(response.data.url);
  //     setShowFireworks(true);
  //     setTimeout(() => setShowFireworks(false), 5000);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>TruthCamera</title>
        <link rel="icon" href="/smallLogo.ico" />
        <meta
          name="description"
          content="TruthCamera - a WEB3 solution for photo verification"
        />
      </Head>
      <main>
        <div className={styles.holder}></div>
        <h1 className={styles.title}>
          Verify your <a href="https://nextjs.org">photo!</a>
        </h1>

        <p className={styles.description}>
          <code>
            See if the photo you upload is shot with a real camera or generated
            by ai
          </code>
        </p>

        <div className={styles.grid}>
          <DropBox />
        </div>
      </main>
      <div className={styles.container3}>
        <h1>{"->"} The open source web3 photo verification platform</h1>
      </div>

      <footer>
        <a
          href="https://hkust.edu.hk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/hkust.png" alt="HKUST logo" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
