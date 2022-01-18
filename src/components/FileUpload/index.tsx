import { UploadWrapper } from "./upload.style"
// import UploadBTN from '../Button'

const UploadInput = () => {
    return ( 
        <UploadWrapper>
            <label htmlFor="upload">
                {/* <span className="fa fa-file-word-o" aria-hidden="true"><small style={{padding:"4px"}} >select file </small></span> */}
                <input type="file"name="uploadedFiles"  id="upload"  />
            </label>          
        </UploadWrapper>
        
    )
}

export default UploadInput
