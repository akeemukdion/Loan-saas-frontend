import { UploadWrapper } from "./upload.style";
// import UploadBTN from '../Button'
interface Iprops {
  title?: string;
}
const UploadInput = (props: Iprops) => {
  return (
    <UploadWrapper>
      {props.title && <p>{props.title}</p>}
      <label htmlFor="upload">
        {/* <span className="fa fa-file-word-o" aria-hidden="true"><small style={{padding:"4px"}} >select file </small></span> */}
        <input type="file" name="uploadedFiles" id="upload" accept="image/*" />
      </label>
    </UploadWrapper>
  );
};

export default UploadInput;
