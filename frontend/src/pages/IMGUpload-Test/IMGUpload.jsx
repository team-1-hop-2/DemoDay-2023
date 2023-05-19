import React, {useState} from 'react'
import axios from 'axios'


export const IMGUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const imageData = "data:image/png;base64,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"
  // const getBase64 = file => {
  //   return new Promise(resolve => {
  //     let fileInfo
  //     let baseURL = ""
  //     let reader = new FileReader()

  //     reader.readAsDataURL(file)
  //     reader.onload = () => {
  //       baseURL = reader.result
  //       resolve(baseURL)
  //       return baseURL
  //     }
  //   })
  // }

  // function UploadImage(image) {
  //   console.log("as")
  //   console.log(getBase64(image))
  //   axios.post('https://www.localhost:8080/', {
  //     // image: image,
  //     dataslot:"test123"
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  const handleFileUpload = async (e) => {
    const file = e
    const base64 = await convertToBase64(file);
    console.log(base64)
    axios.post('http://www.localhost:8080/', {
      image: base64,
      dataslot:"test123"
    })
  }

  

  return (
    <div className='bg-gray-500 h-screen'>
      <h1 className="text-3xl font-bold font-quicksand underline">
        Hello world!
      </h1>
      <img src={imageData} alt=''></img>
      {selectedImage && (
        <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
          <br/>
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      {/* <img src={imageData}></img> */}
      <input type="file" name="myImage"onChange={(event) => {console.log(event.target.files[0])
        setSelectedImage(event.target.files[0])}}/>
      <button className='bg-white' onClick={()=>handleFileUpload(selectedImage)}>Upload</button>
    </div>
  )
}