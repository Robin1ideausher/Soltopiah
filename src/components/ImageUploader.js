import React,{useState,useRef,useEffect} from 'react'
import { toast } from 'react-toastify';
export default function ImageUploader(props) {
    const [file, setFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(props.uploaded);
    const [url,setUrl] = useState(props.fileAdded);
    const fileRef = useRef(null);
    const [loading,setLoading] = useState(false)
    const coverHandler = (e) => {
        if(e.target.files[0]){
            if(e.target.files[0].type == "image/png" || e.target.files[0].type == "image/jpg" || e.target.files[0].type == "image/jpeg"){
                setFile(e.target.files[0]);
            }else{
                toast.error("Only JPEG ,PNG are supported"),{
                    toastId:"upload-error-1"
                }
            }
        }
        else{
            toast.error("No file chosen"),{
                toastId:"uploaddd-error-1aejdg"
            }
        }
        // setFile(e.target.files[0]);
    }
    const uploadHandler = () => {
        props.callback(file)
        setUrl(URL.createObjectURL(file))
        setIsUploaded(true)
    }
    const backImage = {
        backgroundImage: isUploaded?`url("${url}")`:``,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        borderColor:"transparent"
    }

    useEffect(()=>{
        if(file){
            setLoading(true)
            uploadHandler();
        }
    },[file])

    return (
        <div className='flex items-center cursor-pointer relative group justify-center w-36 h-36 rounded-lg bg-white border border-solid border-[#E7E5E4]' style={backImage}>
            {!isUploaded && <h6 className='text-sm font-normal text-[#9C9896]'>Add Banner</h6>}
            {isUploaded && <h5 className={`text-sm font-normal text-[#AE445A] hidden group-hover:flex`}>Edit Picture</h5>}
            <input 
                type='file'
                ref={fileRef}
                multiple={false}
                onChange={coverHandler}
                className={`absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer`} 
                accept=".jpg,.png,.svg,.gif,.webp,.avif"
            />
        </div>
    )
}
