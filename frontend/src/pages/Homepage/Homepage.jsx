import React, {useState} from 'react'
import axios from 'axios'


export const Homepage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo
      let baseURL = ""
      let reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => {
        baseURL = reader.result
        resolve(baseURL)
        return baseURL
      }
    })
  }

  function UploadImage(image) {
    console.log("as")
    console.log(getBase64(image))
    axios.post('https://www.localhost:8080/', {
      // image: image,
      dataslot:"test123"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='bg-gray-500 h-screen'>
      <h1 className="text-3xl font-bold font-quicksand underline">
        Hello world!
      </h1>
      {selectedImage && (
        <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
          <br/>
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <input type="file" name="myImage"onChange={(event) => {console.log(event.target.files[0])
        setSelectedImage(event.target.files[0])}}/>
      <button className='bg-white' onClick={()=>UploadImage(selectedImage)}>Upload</button>
    </div>
  )
}
